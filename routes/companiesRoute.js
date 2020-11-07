const requireLogin = require("../middlewares/requireLogin");
const Company = require("../modules/Company");
const fetchCompanies = require("../middlewares/fetchCompanies");
module.exports = (app) => {
  app.get(
    "/api/curr_user/companies",
    requireLogin,
    fetchCompanies,
    (req, res) => {
      return res.send(req.companies);
    }
  );
  app.get(
    "/api/curr_user/companies/:id",
    requireLogin,
    fetchCompanies,
    (req, res) => {
      Company.find({ _id: req.header("companyId") }).then((company) => {
        return res.send(company);
      }).catch((err)=>{});
    }
  );
  app.post("/api/curr_user/companies/:id", (req, res) => {
    const company = Company.updateOne(
      {
        _id: req.body.companyId,
      },
      {
        $set: req.body.company,
      }
    ).exec();
    res.send(company);
  });

  app.post("/api/company/adduser", requireLogin, (req, res) => {
    Company.findOne({ _id: req.body.companyId }).then((company) => {
      company.users = company.users.concat(req.body.userId);
      company.save();
      res.send([company]);
    });
  });
  app.get("/api/company/users", requireLogin, (req, res) => {
    Company.findOne({ _id: req.headers.companyid }).then((company) => {
      const user={userId:company.managerId,manager:true}
      res.send([user,...company.users]);
    });
  });

  app.post("/api/company/addcompany", requireLogin, (req, res) => {
    const company = new Company(req.body.newCompany);
    company.managerId = req.user._id;
    company.save();
    res.send(company);
  });

  app.get("/api/company/all", requireLogin, (req, res) => {
    Company.find({})
      .select({
        name: true,
        address:true,
        email: true,
        website: true,
        contactName:true,
        contactNumber: true,
        contactJobTitle:true,
      })
      .then((companies) => {
        res.send(companies);
      });
  });

app.delete('/api/company/delete',requireLogin,(req,res)=>{
  Company.deleteOne({_id:req.headers.companyid}).then((del)=>res.send({}))
  })
};
