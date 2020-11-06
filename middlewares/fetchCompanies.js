const Company = require("../modules/Company");
module.exports = async (req, res, next) => {
  if (req.user.userType === 1)
    Company.find({ managerId: req.user._id })
      .select({ name: true })
      .then((companies) => {
        req.companies = companies;
        next();
      })
      .catch(() =>
        res
          .status(401)
          .send({ error: "Not authorized to access this resource" })
      );
  else {
    Company.find({ users: { $elemMatch: { userId: req.user._id } } })
      .select({ users: true, name: true })
      .then((companies) => {
        req.companies = companies;
        next();
      })
      .catch(() =>
        res
          .status(401)
          .send({ error: "Not authorized to access this resource" })
      );
  }
};
