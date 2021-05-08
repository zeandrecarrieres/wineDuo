//Importing the project dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Importing Models
const Wine = require("./models/wine_model");

const app = express();

app.use(cors());
app.use(express.json());

//DB connexion
mongoose.connect("mongodb://localhost/wineduo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

//<<============================= ROUTES =============================>>

//Create Wine Route
app.post("/wine", (req, res) => {
  const wine = Wine.create(req.body, (error) => {
    if (error)
      return res.status(400).json({
        error: true,
        message: "Error: Wine not saved, try again!",
      });
    return res.json({
      error: false,
      message: "Wine saved!",
    });
  });
});

//List Wine Route
app.get("/wine", (req, res) => {
  Wine.find()
    .then((wine) => {
      return res.json(wine);
    })
    .catch((error) => {
      return res.status(400)({
        error: true,
        message: "Wine not found!",
      });
    });
});


//Update Wine Route
app.put("/wine/:id", (req, res) => {
    const wine = Wine.updateOne({_id: req.params.id}, req.body, (error) => {
      if (error)
        return res.status(400).json({
          error: true,
          message: "Error: Wine not updated, try again!",
        });
      return res.json({
        error: false,
        message: "Wine updated!",
      });
    });
  });

  
//Delete Wine Route
app.delete("/wine/:id", (req, res) => {
    const wine = Wine.deleteOne({_id: req.params.id}, req.body, (error) => {
      if (error)
        return res.status(400).json({
          error: true,
          message: "Error: Wine not deleted, try again!",
        });
      return res.json({
        error: false,
        message: "Wine deleted!",
      });
    });
  });



//Listenning Server Port
app.listen(3001, () => {
  console.log("server is running");
});
