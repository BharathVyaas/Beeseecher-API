require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const ItemClass = require("./model/items");
const detail_Images = require("./controller/detail_images");

const app = express();

/* ROUTES */

const main = require("./router/main");
const Add = require("./router/Add");

/* END ROUTES */

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["GET", "POST"], // Allow only specified HTTP methods
    optionsSuccessStatus: 200, // Set the response status for successful preflight requests
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* API FOR IMAGES */

/* Default_Images(names from details page not main page):- RolePlayGame ChocolateDogTreats Movie 
PerformanceArtProject GreenspaceIdea TattooOfYou SpaceMonkey 
MountChiliad */

app.get("/RolePlayGame", detail_Images.RolePlayGame);
app.get("/ChocolateDogTreats", detail_Images.ChocolateDogTreats);
app.get("/Movie", detail_Images.Movie);
app.get("/PerformanceArtProject", detail_Images.PerformanceArtProject);
app.get("/GreenspaceIdea", detail_Images.GreenspaceIdea);
app.get("/TattooOfYou", detail_Images.TattooOfYou);
app.get("/SpaceMonkey", detail_Images.SpaceMonkey);
app.get("/MountChiliad", detail_Images.MountChiliad);

/* END IMAGES*/

/* API FOR CARD_DATA */
app.get("/get_items", (_, res) => {
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  });
  ItemClass.fetchData()
    .then((data) => res.status(200).send(JSON.stringify(data)))
    .catch((err) => res.status(500).send("Internal Server Error"));
});

/* CRUD HANDLER */

app.use("/get_CRUD", main);

app.use("/post_CRUD", Add);

/* END CRUD HANDLER */

/* END CARD_DATA */

app.listen(4000);
