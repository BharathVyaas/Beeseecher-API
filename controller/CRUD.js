const ItemClass = require("../model/items");

const titles = (req, res, next) => {
  res.statusCode = 200;
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  });
  ItemClass.titles()
    .then((data) => res.status(200).send(JSON.stringify(data)))
    .catch((err) => res.status(500).send("Internal Server Error"));
};

const Add = (req, res, next) => {
  if (req.body) {
    ItemClass.add(req.body)
      .then((data) => {
        res.statusCode = 200;
        res.set({
          "Content-Type": "plain/text",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        });
        res.send("Success");
      })
      .catch((err) => res.status(500).send("Internal Server Error"));
  }
};

module.exports = { titles, Add };
