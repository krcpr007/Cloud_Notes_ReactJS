const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017/inote?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"; 
const connectToMongo= ()=>{
    mongoose.connect(mongoURI , ()=>{
         console.log("connected to mongo succesfully"); 
    })
}
module.exports=connectToMongo ;
// mongoose.connect('mongodb://localhost:27017/test');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));