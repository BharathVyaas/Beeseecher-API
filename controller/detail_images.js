const fs = require("fs");
const path = require("path");
const defaultPath = require("../util/filePath");

const RolePlayGame = (req, res) => {
  const filePath = path.join(defaultPath, "img", "RolePlayGame.jpg");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res
        .status(200)
        .set({
          "Content-Type": "image/jpg",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        })
        .send(data);
    }
  });
};

const ChocolateDogTreats = (req, res) => {
  const filePath = path.join(defaultPath, "img", "ChocolateDogTreats.jpg");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res
        .status(200)
        .set({
          "Content-Type": "image/jpg",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        })
        .send(data);
    }
  });
};

const Movie = (req, res) => {
  const filePath = path.join(defaultPath, "img", "Movie.jpg");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res
        .status(200)
        .set({
          "Content-Type": "image/jpg",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        })
        .send(data);
    }
  });
};

const PerformanceArtProject = (req, res) => {
  const filePath = path.join(defaultPath, "img", "PerformanceArtProject.jpg");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res
        .status(200)
        .set({
          "Content-Type": "image/jpg",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        })
        .send(data);
    }
  });
};

const GreenspaceIdea = (req, res) => {
  const filePath = path.join(defaultPath, "img", "GreenspaceIdea.jpg");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res
        .status(200)
        .set({
          "Content-Type": "image/jpg",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        })
        .send(data);
    }
  });
};

const TattooOfYou = (req, res) => {
  const filePath = path.join(defaultPath, "img", "TattooOfYou.jpg");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res
        .status(200)
        .set({
          "Content-Type": "image/jpg",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        })
        .send(data);
    }
  });
};

const SpaceMonkey = (req, res) => {
  const filePath = path.join(defaultPath, "img", "SpaceMonkey.jpg");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res
        .status(200)
        .set({
          "Content-Type": "image/jpg",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        })
        .send(data);
    }
  });
};

const MountChiliad = (req, res) => {
  const filePath = path.join(defaultPath, "img", "MountChiliad.jpg");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res
        .status(200)
        .set({
          "Content-Type": "image/jpg",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        })
        .send(data);
    }
  });
};

module.exports = {
  RolePlayGame,
  ChocolateDogTreats,
  Movie,
  PerformanceArtProject,
  GreenspaceIdea,
  TattooOfYou,
  SpaceMonkey,
  MountChiliad,
};
