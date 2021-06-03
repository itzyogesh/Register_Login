const express = require("express");
const app = express();
const path = require("path");
require("./db/conn");
const Register = require("./models/registerlogin");

const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    const pass = req.body.password;
    const cpass = req.body.cpassword;
    if (pass === cpass) {
      const registeremp = new Register(req.body);
      await registeremp.save();
      res.status(201).render("login");
    } else {
      res.send("Passwords are not matching");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const usermail = await Register.findOne({ email: email });
    if (usermail.password === password) {
      res.status(201).render("dashboard");
    } else {
      res.send("Invalid Details");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

const port = process.env.PORT || 4000;

app.listen(port, (req, res) => {
  console.log(`Sever is running at port ${port}`);
});
