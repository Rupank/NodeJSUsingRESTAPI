const mongoose=require('mongoose');
const Schema = mongoose.Schema;

//create user Schema and model
const UserSchema=new Schema({
  name: {
    type: String,
    required:[true,'Name Field is required']
  },
  _id: {
    type:String,
    required:[true,'Mail ID is required']
  }
});

const User = mongoose.model('user',UserSchema);

module.exports=User;
