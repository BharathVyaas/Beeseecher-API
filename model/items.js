const db = require("../db/database");

class ItemClass {
  constructor() {
    this.tableLength = 0;
  }

  async fetchData() {
    return db
      .execute(
        "SELECT * FROM items INNER JOIN details ON details.item_id = items.id"
      )
      .then(([rows, _]) => {
        this.tableLength = rows.length;
        return rows;
      })
      .catch((err) => {
        throw err;
      });
  }

  async titles() {
    return db
      .execute("SELECT title FROM items")
      .then(([rows, fields]) => rows)
      .catch((err) => {
        throw err;
      });
  }

  async add(_request) {
    const itemQuery =
      "INSERT INTO items (id, title, location, img, discription) VALUES (?, ?, ?, ?, ? );";
    const detailsQuery =
      "INSERT INTO details (details_id, item_id, funded, raised, needed, fundText) VALUES (?, ?, ?, ?, ?, ?)";
    const itemsVariables = [
      ++this.tableLength,
      _request.title,
      _request.location,
      _request.imgUrl,
      _request.description,
    ];
    const detailsVariables = [
      this.tableLength,
      this.tableLength,
      this.tableLength,
      this.tableLength,
      this.tableLength,
      "FUND MY " + _request.title,
    ];
    return db
      .execute(itemQuery, itemsVariables)
      .then((data) => {
        // Then execute detailsQuery
        db.execute(detailsQuery, detailsVariables);
        return data;
      })
      .then((data) => {
        console.log("Data inserted successfully");
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = new ItemClass();
