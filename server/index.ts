const express = require("express");
const prerender = require("prerender-node");

const app = express();

// Use prerender middleware
app.use(prerender.set("prerenderToken", "RSuLtJHnpnFBTokWQmd3")); // Replace 'YOUR_PRERENDER_TOKEN' with the token from prerender.io

// Serve your static React files
app.use(express.static("./build")); // replace 'path_to_your_react_build_folder' with your React app's build directory, e.g., './build'

// Any other routes should be redirected to your React app
app.get("*", (req, res) => {
  res.sendFile("./build/index.html"); // replace with path to your index.html in React app's build folder
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
