// Import modules
const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

// Import Router
const mintRouter = require("./routes/mint/mint.route");

const app = express();

app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));

app.use(express.json({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      `https://www.bigappletoken.net`,
      `https://big-apple.vercel.app/`,
    ],
  })
);

app.use("/", mintRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
