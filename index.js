import express from  "express"; //imorot express 


const app = express();

app.get("/",(req,res)=>{
    res. json({
        massage: "this is ged requwest"
    })
    console.log("this is a get requwest")
})

app.delete("/",()=>{
    console.log("this is delect requwest...")
})

app.post("/",(req,res)=>{
    console.log("this is post requwest...")
})

app.listen( 3000 ,()=>{
    console.log("server is runnig port 3000 he....")
})

