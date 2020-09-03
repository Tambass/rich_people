module.exports = {
  showPeople: (req, res) => {
    const id = req.params.id;

    let query = "SELECT * FROM people WHERE id = '" + id + "';";

    db.query(query, (err, result) => {
      if (err) {
        res.send(err);
      }
      res.render("show", { people: result[0] });
    });
  },
};
