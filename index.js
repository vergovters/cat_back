import express from "express"
const app = express();

app.use(express.static('build')); // Assuming 'build' is your build folder

// Serve the db.json file
app.get('/db.json', (req, res) => {
  res.sendFile(__dirname + "./db.json");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});