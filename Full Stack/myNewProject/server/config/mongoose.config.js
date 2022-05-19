const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

    .then(() => console.log("Successfully connected to the database"))
    .catch(error => console.log("Connnection Unsuccessful", error));
