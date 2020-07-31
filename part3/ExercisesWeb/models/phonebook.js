const mongoose=require('mongoose')

const url=process.env.MONGODB_URI

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(result=>{
    console.log('connect to mongodb',url)
}).catch(error=>{
    console.log('error connection to mongodb ',error.message)
})

const personSchema=new  mongoose.Schema({
    name:String,
    number:String
})


personSchema.set('toJSON',{transform:(document,returnObject)=>{
    returnObject.id=returnObject._id.toString()
    delete returnObject._id
    delete returnObject.__v
}})

module.exports=mongoose.model('Person',personSchema)