const mongoose= require("mongoose")
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/LoginSignUp")
.then(()=>{
    console.log("mongodb connected");

})
.catch(()=>{
    console.log("failed to connect");
})

const LoginSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
var candidateSchema = new mongoose.Schema({
    Name: {
    type: String,
    required: 'This field is required!'
    },
    DateOfBirth: {
    type: String
    },
    Email: {
    type: String
    },
    Result: {
    type: String
    }
    });
     
  const collection2=new  mongoose.model('Candidate', candidateSchema);

const collection = new mongoose.model("Collection1",LoginSchema)
module.exports=collection
module.exports=collection2
