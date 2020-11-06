const requireLogin = require("../middlewares/requireLogin");
const Company = require("../modules/Company");
const User = require("../modules/User");
module.exports = (app) => {
  app.get("/api/users/user/info", requireLogin, (req, res) => {
    User.findOne({ _id: req.headers.userid }).select({
      firstName: true,
      lastName: true,
      jobTitle: true,
      email: true,
      imageUrl:true
    }).then((user)=>res.send(user));
  });
app.get("/api/users/user/edit", requireLogin, (req, res) => {
    User.findOne({ _id: req.headers.userid }).then((user)=>res.send(user));
  });

app.post("/api/users/user/edit", requireLogin, (req, res) => {
    User.updateOne(
        { _id: req.body.userId },
        { $set: req.body.userUpdate }
      ).exec();
      res.send({});
    });

app.delete('/api/users/user/edit',requireLogin,(req,res)=>{
    Company.findOne({_id:req.headers.companyid}).then((company)=>{
        company.users=company.users.filter((user)=>user.userId!==req.headers.userid)
        company.save().then(()=>User.deleteOne({_id:req.headers.userid}).then((del)=>res.send({})))
    })
    
})
};