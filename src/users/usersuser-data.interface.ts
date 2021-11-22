import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
     firstName: {type:String, required:true },
     lastName: {type:String, required:false },
     address: {type:String, required:false },
     phone: {type:String, required:false },
     pid: {type:String, required:false },

});



export interface UsersData  {
   id:string;
   firstName:string;
   lastName:string;
   address:string;
   phone:string;
   pid:string;

}
