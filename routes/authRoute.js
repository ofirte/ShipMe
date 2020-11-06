const requireLogin = require("../middlewares/requireLogin");
const User = require("../modules/User");
const bcrypt = require("bcryptjs");
const Company = require("../modules/Company");
module.exports = (app) => {
  app.post("/api/signup", (req, res) => {
    const user = new User(req.body);
    user
      .save()
      .then(() => {
        user.generateAuthToken().then((token) => {
          if (user.userType === 1) {
            const comp = {
              name: `${req.body.firstName} ${req.body.lastName}`,
              managerId: user._id,
            };
            const company = new Company(comp);
            company.save();
            res.send({});
          }
          else 
          res.send({userId:user._id});
        });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });

  app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    User.findByCredentials(email, password)
      .then((user) => {
        user.generateAuthToken().then((token) => {
          Company.find({ managerId: user._id })
            .select({ name: true })
            .then((companies) => {
              res.send({ user, token, companies });
            });
        });
      })
      .catch((error) => {
        res.status(401).send({ error: "Wrong user name" });
      });
  });
  app.get("/api/curr_user", requireLogin, async (req, res) => {
    // View logged in user profile
    res.send(req.user);
  });
  app.post("/api/curr_user", requireLogin, async (req, res) => {
    if (req.body.userUpdate.newPassword)
      req.body.userUpdate.password = await bcrypt.hash(
        req.body.userUpdate.newPassword,
        8
      );
    User.updateOne(
      { _id: req.body.userId },
      { $set: req.body.userUpdate }
    ).exec();
    res.send({});
  });

  app.post("/api/logout", requireLogin, async (req, res) => {
    // Log user out of all devices
    try {
      req.user.tokens.splice(0, req.user.tokens.length);
      await req.user.save();
      res.send();
    } catch (error) {
      res.status(500).send(error);
    }
  });
};
