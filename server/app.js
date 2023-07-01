var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");
const cors = require("cors");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
liveReloadServer.watch(path.join(__dirname, ""));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var levelRouter = require("./routes/api/V1/level");
var jobsRouter = require("./routes/api/V1/jobs");
var disseaseRouter = require("./routes/api/V1/dissease");
var alarmRouter = require("./routes/api/V1/AlarmClock");
var app = express();
app.locals.secretKey = process.env.SECRET_KEY;

app.use(connectLiveReload());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// CORS
const corsOption = {
  origin: ["*", "http://192.168.1.3"],
};
app.use(cors(corsOption));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/v1/level", levelRouter);
app.use("/api/v1/jobs", jobsRouter);
app.use("/api/v1/dissease", disseaseRouter);
app.use("/api/v1/alarm", alarmRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
