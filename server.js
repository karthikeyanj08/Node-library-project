 let express = require('express');
let app = express();
app.use(express.json());
let crypt = require('bcrypt');
let mongoose = require('mongoose');
let play= require('./serverschema');

app.listen('9000' ,()=> console.log("server connected"))

mongoose.connect('mongodb+srv://karthikeyanj:Karthick%4008@cluster0.lticywd.mongodb.net/Library')

.then(console.log("connected to Mongo db"))
.catch((error)=>{console.log(error);})
app.get('/user',async(request,response)=>{
    try{
    let hi =await play.find({});
    response.json(hi); 
    }
    catch(error){
        response.sendStatus(400).send(error);
    }

 })
 app.get('/userdetails',async(request,response)=>{
    try{
    let hi =await play.find({});
    response.json(hi); 
    }
    catch(error){
        response.sendStatus(400).send(error);
    }

 })
 app.post('/adduser', async(req, res)=>{
    try{
        let key = await crypt.genSalt(); 

        let changedPassword= await crypt.hash(req.body.password, key); 
        let register  = await play.findOne({userid:req.body.userid})
        if(register){
            res.json({err:"user is already registerd"})

        }
    
        let newuser =   new play({userid: req.body.userid, password:changedPassword,Bookno:req.body.Bookno,Bookname:req.body.Bookname,usersighn:req.body.usersighn});
       newuser.save();
        res.json({messege:"registered done"});
    
    }
    catch(error){
        res.json({err:"register failed"})
    } }) 
   app.get('/signinuser', async(req, res)=>{
        try{
    
            let checkuser =await play.findOne({userid:req.body.userid,});
            
            if(checkuser){
                res.json("Log in success")


            }
            else{
                res.json("user not found")
            }

        }
        catch(error){
            res.send("error")
        }

    })
     app.get('/signinuser', async (req, res) => {
        try {
          const { userid } = req.body;
      
          const user = await play.findOne({ userid });
          if (user) {
            res.json({
              message: "Log in success",
              password: user.password
            });
            console.log("Success");
          } else {
            res.json("User not found");
            console.log("User not found");
          }
        } catch (error) {
          res.status(500).json(error);
          console.log("Error:", error);
        }
      });
     app.patch('/updateuser/:id', async(req,res)=>{
        try{
            let upd = await play.findByIdAndUpdate(req.params.id,req.body);
            if(upd){
               // res.json(upd);
               res.send("Data updated sucessfully");
            }
            else{
               res.send("notfound");
            }
         }
            catch(error){
               res.send("errror")
      
            }
            
            
/*             app.delete("/deleteuser/:id", async (req, res) => {
               try {
                 let deleteuser= await play.findByIdAndDelete(req.params.id);
                 if (deleteuser) {
                   res.json(deleteuser);
                 } else {
                   res.send("user deleted");
                 }
               } catch (error) {
                 res.status(500).json({ message: error.message });
               }
             });     
 */               
            });
                         
              
            
         
    

 