// bring in express
const express = require("express");
// initialise express with the epxress class constructor
const app = express();
// bring in path
const path = require("path");

// bring in http and https
const http = require("http");
const https = require("https");
// bring in fs
const fs = require("fs");

// listen on both http & https ports
const httpServer = http.createServer(app);
const httpsServer = https.createServer(
	{
		key: fs.readFileSync(
			"../../../etc/letsencrypt/live/brijeshsinghal.com/privkey.pem"
		),
		cert: fs.readFileSync(
			"../../../etc/letsencrypt/live/brijeshsinghal.com/fullchain.pem"
		),
	},
	app
);

httpServer.listen(80, () => {
	console.log("HTTP Server running on port 80");
});

httpsServer.listen(443, () => {
	console.log("HTTPS Server running on port 443");
});

// port
// const PORT = 80;
// app.listen(PORT, () => console.log(`server started on ${PORT}`));

// main get
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

// set static folder (home dir for requests)
app.use(express.static(path.join(__dirname, "public")));
