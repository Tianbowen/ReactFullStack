const mongoose=require('mongoose')

const url=process.env.MONGODB_URI

console.log('connecting to ',url)

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{
    console.log('connected to Mongodb')
})
.catch(error=>{
    console.log('error connection to Mongodb',error.message)
})

const noteSchema=new mongoose.Schema({
    content:String,
    date:Date,
    importent:Boolean
})

noteSchema.set('toJSON',{transform:(docuemnt,returnObject)=>{
    returnObject.id=returnObject._id.toString()
    delete returnObject._id
    delete returnObject.__v
}})

module.exports=mongoose.model('Note',noteSchema)


