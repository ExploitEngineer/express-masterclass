import express from "express";
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import mongoose from "mongoose";
import "./strategies/local-strategy.mjs";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/express_tutorial")
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.log(`Error ${error}`));

app.use(express.json());
app.use(cookieParser("secret"));
app.use(
  session({
    secret: "rafay the dev",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

app.post("/api/auth", passport.authenticate("local"), (request, reponse) => {});

const PORT = process.env.PORT || 4000;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
