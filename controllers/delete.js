module.exports = {
    deleteProfile: (req, res) => {
      const id = req.params.id;
  
      let query = "DELETE FROM people WHERE id = '" + id + "';";
  
      db.query(query, (err, result) => {
        //console.log(result);
        if (err) {
          res.send(err);
        }
        res.redirect("/");
      });
    },
  };