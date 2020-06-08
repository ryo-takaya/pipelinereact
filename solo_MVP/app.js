var createError = require("http-errors");
var express = require("express");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const config = require("./knexfile").development;
db = require("knex")(config);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "build")));
//app.use(express.static(path.resolve("..", "dist")));

app.get("/api", (req, res) => {
  // res.status(200);
  // res.send("sssss");
  db.select("*")
    .from("users")
    .then((result) => {
      console.log(result);
      res.send(result);
    });
});
// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
console.log(__dirname);
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
