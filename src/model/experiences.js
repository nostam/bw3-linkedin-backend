const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const mongoose_csv = require("mongoose-csv");

const ExperienceSchema = new Schema(
  {
    role: {type:String,required:true},
    company: {type:String,required:true},
    startDate: {type:String,required:true},
    description: {type:String,required:true},
    area: {type:String,required:true},

    image: {type:String,default:"https://picsum.photos/x400"},
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "profiles",
    },
  },
  {
    timestamps: true,
  }
);
// ExperienceSchema.static("addUser", async function (user) {
//   console.log("is this my user", user);

//   await ExperienceSchema.findOneAndUpdate(
//     { _id: id },
//     {
//       $addToSet: { username: { user } },
//     }
//   );
// });

ExperienceSchema.plugin(mongoose_csv);

Experience_Schema = mongoose.model("experiences", ExperienceSchema);

module.exports = Experience_Schema;
