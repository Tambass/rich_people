module.exports = {
  getAddPage: (req, res) => {
    res.render("addPage");
  },
  addPeople: (req, res) => {
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
      "INSERT INTO `people` (classement, lastname, firstname, age, nationnality, wealth, factory, business, status, image) VALUES ('" +
      classement +
      "', '" +
      lastname +
      "', '" +
      firstname +
      "', '" +
      age +
      "', '" +
      nationnality +
      "', '" +
      wealth +
      "', '" +
      factory +
      "', '" +
      business +
      "', '" +
      status +
      "', '" +
      image +
      "')";

    db.query(query, (err, result) => {
      if (err) {
        res.send(err);
      }
      res.redirect("/");
    });
  },
};
