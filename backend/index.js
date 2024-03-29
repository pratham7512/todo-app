const express =require("express")
const app = express()
const {createTodo}=require("./type");
const {updateTodo}=require("./type");
const {todo}=require("./db")
const cors=require("cors")

app.use(express.json())
app.use(cors())

app.post('/todo',async (req,res)=>{
    const createPayload=req.body
    const parsedPayload=createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send the worng inputs"
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        Completed:false
    })
    res.json({
        msg:"Todo created"
    })
})
app.get('/todos',async (req,res)=>{
    const todos=await todo.find({});
    res.json({
        todos
    })
})
app.post('/completed',async(req,res)=>{
    const updatePayload=req.body
    const parsedPayload=updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You send the worng inputs"
        })
        return;
    }
    //put it in mongodb
    await todo.updateOne({_id:req.body.id},{Completed: true})
    res.json({
        msg:"todo is marked as completed"
    })
})


app.listen(3000)