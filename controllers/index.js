module.exports = {
  getHomePage: (req, res) => {
    let query = "SELECT * FROM people ORDER BY id ASC";
    db.query(query, (err, result) => {
      if (err) {
        res.send(err);
      }
      res.render("index", { people: result });
    });
  },
};
