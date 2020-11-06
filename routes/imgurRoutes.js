const requireLogin = require("../middlewares/requireLogin");
const Company = require("../modules/Company");
const User = require("../modules/User");
const axios = require("axios");
module.exports = (app) => {
  app.post("/api/imgur/setphoto", requireLogin, (req, res) => {
    if (req.body.from === "company") {
      Company.updateOne(
        {
          _id: req.body.companyId,
        },
        {
          $set: { imageUrl: req.body.link },
        }
      ).exec();
      res.send({});
    }
    if (req.body.from === "profile") {
      req.user.imageUrl = req.body.link;
      req.user.save();
      res.send({});
    }
  });

  app.post("/api/imgur/setphoto/otheruser", requireLogin, (req, res) => {
    User.updateOne(
      {
        _id: req.body.userId,
      },
      {
        $set: { imageUrl: req.body.link },
      }
    ).exec();
    res.send({});
  });
};
