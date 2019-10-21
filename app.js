const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
const publicMarketData = require("./routes/api/publicMarketData");
const privateUserData = require("./routes/api/privateUserData");
const privateUserTrading = require("./routes/api/privateUserTrading");

app.use("/api/publicMarketData", publicMarketData);
app.use("/api/privateUserData", privateUserData);
app.use("/api/privateUserTrading", privateUserTrading);

const port = parseInt(process.env.PORT, 10) || 5000;
const ipaddr=process.env.IP_ADDRESS || "0.0.0.0";
app.listen(port, ipaddr, () => console.log(`server running on ${ipaddr} port ${port}`));
