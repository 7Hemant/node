import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello from demo');
});

app.listen(port, () => {
  console.log(`demo project is running on http://localhost:${port}`);
});
