const mongoose = require('mongoose');
let connectionString =`mongodb+srv://simomordi:${process.env.MONGO_PASS}@cluster0.fafsdfc.mongodb.net/bootcampApp?retryWrites=true&w=majority`
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// log when connected
mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE');
});







