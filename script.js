const express=require("express")
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('views'))

const emailDB="alita@gmail.com"
const passwordDB="123"



app.post("/login",(req,res)=>{
 const{ email,password }=req.body

 if(email===emailDB && password===passwordDB)
 {res.send("login successful")}
 else{
    res.send("login failed")
 }
})


const PORT=process.env.PORT || 3001
app.listen(PORT,()=>console.log("connected"))
