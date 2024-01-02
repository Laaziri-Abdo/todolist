const express = require('express');
const cors = require('cors');
require('./config/config');

const app = express();

app.use(express.json());
app.use(cors());

const todoRouter = require('./routers/todo');

app.use('/api', todoRouter);


app.listen(3001, () => {
	console.log("Server is running on port 3001");
});