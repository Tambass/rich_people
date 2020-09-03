module.exports = {
  getEditPage: (req, res) => {
    const id = req.params.id;
    console.log(id);
    let query = "SELECT * FROM people WHERE id = '" + id + "';";
    db.query(query, (err, result) => {
      //console.log(result);
      if (err) {
        res.send(err);
      }
      res.render("editPage", { people: result[0] });
    });
  },
  editProfile: (req, res) => {
    const classement = req.body.classement;
    const lastname = req.body.lastname;
    const firstname = req.body.firstname;
    const age = req.body.age;
    const nationnality = req.body.nationnality;
    const wealth = req.body.wealth;
    const factory = req.body.factory;
    const business = req.body.business;
    const status = req.body.status;
    const image = req.body.image;

    let query =
      "UPDATE `people` SET classement = '" +
      classement +
      "', lastname = '" +
      lastname +
      "', firstname = '" +
      firstname +
      "', age = '" +
      age +
      "', nationnality = '" +
      nationnality +
      "', wealth = '" +
      wealth +
      "', factory = '" +
      factory +
      "', business = '" +
      business +
      "', status = '" +
      status +
      "', image = '" +
      image +
      "' WHERE id = '" +
      id +
      "'";
    db.query(query, (err, result) => {
      if (err) {
        return res.send(err);
      }
      res.redirect("/");
    });
  },
};
