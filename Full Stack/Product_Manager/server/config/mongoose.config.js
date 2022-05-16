const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ProjManagerDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection to the database succesful"))
    .catch(error => console.log('Connection Failed...', error))