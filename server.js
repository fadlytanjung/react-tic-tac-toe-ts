import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('build'))
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));