const mongoose=require('mongoose')

mongoose.set('useFindAndModify',false)

const noteSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        minlength:3        
    },
    date:{
        type:Date,
        required:true
    },
    importent:Boolean
})

noteSchema.set('toJSON',{
    transform:(document,returnObject)=>{
        returnObject.id=returnObject._id.toString()
        delete returnObject._id
        delete returnObject.__v
    }
})

module.exports=mongoose.model('Note',noteSchema)