const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");
const cookieParser = require("cookie-parser");

// mongo 서버 initiate
InitiateMongoServer();

// express 로 만듬
const app = express();

// PORT 설정 -> 4000에서 서버 시작
const PORT = process.env.PORT || 4000;

// 미들웨어
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */

app.use("/user", user);

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});