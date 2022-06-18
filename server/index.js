const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.set("view engine", "ejs");
const db = require("./models");
app.use(cors());
// routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);
const lengkapiDataRouter = require("./routes/LengkapiData");
app.use("/lengkapi-data", lengkapiDataRouter);
const likesRouter = require("./routes/Likes");
app.use("/likes", likesRouter);
const communityRouter = require("./routes/Community");
app.use("/community", communityRouter);

app.get("/", (req, res) => {
  res.render("pages/index");
});

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log("Server running on port 3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });
