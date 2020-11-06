const express = require("express");
const auth=require('./routes/authRoute')
const companies=require('./routes/companiesRoute')
const imgur=require('./routes/imgurRoutes')
const users=require('./routes/usersRoute')

const multer = require('multer');
const upload = multer();
const bodyParser=require('body-parser')
const fileParser = require('express-multipart-file-parser')
require('./db/db')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(upload.array()); 
app.use(express.static('public'));
auth(app)
companies(app)
imgur(app)
users(app)
app.get("/api/posts", (req, res) => {
  res.json(posts);
});
//production ajuestments
if(process.env.NODE_ENV==="production"){
  //route to build fiels
  app.use(express.static('client/build'))

  //toute to index.html
  const path=require('path')
  app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}
const PORT=process.env.PORT||5000
app.listen(PORT);
