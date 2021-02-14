// bring in express
const express = require("express");
// initialise express with the epxress class constructor
const app = express();
// bring in path
const path = require("path");
// port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on ${PORT}`));

// main get
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

// set static folder (home dir for requests)
app.use(express.static(path.join(__dirname, "public")));
