import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: "Hello World Abo Ahmed" });
})

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
})