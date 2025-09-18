const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let users = [
  { id: "1", firstName: "Anshika", lastName: "Agarwal", hobby: "Teaching" },
  { id: "2", firstName: "Rohit", lastName: "Sharma", hobby: "Cricket" }
];

// Logger middleware
function requestLogger(req, res, next) {
  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode}`);
  });
  next();
}
app.use(requestLogger);

// Validation middleware
function validateUserBody(req, res, next) {
  const { firstName, lastName, hobby } = req.body;
  const errors = [];
  if (!firstName) errors.push("firstName is required");
  if (!lastName) errors.push("lastName is required");
  if (!hobby) errors.push("hobby is required");

  if (errors.length) return res.status(400).json({ error: "Invalid input", details: errors });
  next();
}

app.get('/users', (req, res) => res.json({ users }));

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ user });
});

app.post('/user', validateUserBody, (req, res) => {
  const { firstName, lastName, hobby } = req.body;
  const newUser = { id: uuidv4(), firstName, lastName, hobby };
  users.push(newUser);
  res.status(201).json({ message: "User created", user: newUser });
});

app.put('/user/:id', validateUserBody, (req, res) => {
  const idx = users.findIndex(u => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "User not found" });
  users[idx] = { id: req.params.id, ...req.body };
  res.json({ message: "User updated", user: users[idx] });
});

app.delete('/user/:id', (req, res) => {
  const idx = users.findIndex(u => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "User not found" });
  const deleted = users.splice(idx, 1)[0];
  res.json({ message: "User deleted", user: deleted });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
