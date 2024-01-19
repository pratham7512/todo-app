const expres =require("express")
const app=express()
const {createTodo}=require("./types");
const {updateTodo}=require("./types");

app.use(express.json())

app.post('/todo',(req,res)=>{
    const createPayload=req.body
    const parsedPayload=createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send the worng inputs"
        })
        return;
    }
    //put it in mongodb

})
app.get('/todos',(req,res)=>{

})
app.post('/completed',(req,res)=>{
    const updateTodo=req.body
    const pasedPayload=createTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send the worng inputs"
        })
        return;
    }
    //put it in mongodb
    
})


app.listen(3000,"Server is listening on port 3000")