const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://prathamesh:rajendra1969@cluster0.f2oopnc.mongodb.net/todo?retryWrites=true&w=majority")

const todoSchema=mongoose.Schema({
    title :String,
    description:String,
    Completed: Boolean
})

const todo=mongoose.model("todos",todoSchema)

module.exports={
    todo
}