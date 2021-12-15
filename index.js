const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001;

const fn = require('./services/apis')

app.get("/", (request, response) => {
	response.json({ yo: "Its lit fam" });
});

app.get('/random', fn.getRandom)

// RUN SERVER -- DEF GONNA BE WRITING THIS EVERYTIME TOO
app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});