const fs = require("fs");
const Joi = require("joi");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors());

const states = require("./states.json");

/* Request: použití metody GET, URL adresy /:
   Response: HTML stránka  */
app.get("/", (req, res) => {
  res.send("<h1>Úvodní stránka - REST API</h1>");
});

/* Request: použití metody GET, URL adresy /api/states:
   Response: výpis všech států ve formátu JSON  */
app.get("/api/states", (req, res) => {
  res.send(states);
});

/* Request: použití metody GET, URL adresy /api/states, parametr id
   Response: výpis konkrétního státu podle zadaného id ve formátu JSON  */
app.get("/api/states/:id", (req, res) => {
  const id = Number(req.params.id);
  const state = states.find(state => state.id === id);
  if (state) {
    res.send(state);
  } else {
    res.status(404).send("Stát nebyl nalezen.");
  }
});

/* Request: použití metody POST, URL adresy /api/states
   Response: výpis nového státu   */
app.post("/api/states", (req, res) => {
  const { error } = validateState(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    const state = {
      id: states.length !== 0 ? states[states.length - 1].id + 1 : 1,
      name: req.body.name,
      description: req.body.description,
    };
    states.push(state);
    res.send(state);
    writeJSON(states, "states.json");
  }
});

app.put("/api/states/:id", (req, res) => {
  const id = Number(req.params.id);
  const state = states.find(state => state.id === id);
  if (!state) {
    res.status(404).send("Stát nebyl nalezen.");
    return;
  }
  const { error } = validateState(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    state.name = req.body.name;
    state.description = req.body.description;
    res.send(state);
    writeJSON(states, "states.json");
  }
});

app.delete("/api/states/:id", (req, res) => {
  const id = Number(req.params.id);
  const state = states.find(state => state.id === id);
  if (!state) {
    res.status(404).send("Stát nebyl nalezen.");
  } else {
    const index = states.indexOf(state);
    states.splice(index, 1);
    res.send(state);
    writeJSON(states, "states.json");
  }
});

app.listen(3000, () => console.log("Listening on port 3000..."));

function validateState(state) {
  const schema = {
    name: Joi.string()
      .min(2)
      .required(),
    description: Joi.string()
  };
  return Joi.validate(state, schema);
}

function writeJSON(jsonData, pathToFile) {
  let data = JSON.stringify(jsonData, null, 2);
  fs.writeFile(pathToFile, data, err => {
    if (err) {
      throw err;
    } else {
      console.log("Data written to file");
    }
  });
}
