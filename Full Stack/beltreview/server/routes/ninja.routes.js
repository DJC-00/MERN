const NinjaCtrl = require('../controllers/ninja.controller')



module.exports = (app)=>{
    // Get
    app.get("/api/hello", NinjaCtrl.sayHello);
    app.get("/api/ninjas", NinjaCtrl.findAllNinjas);
    app.get("/api/ninjas/:id", NinjaCtrl.findOneNinja);

    // Post
    app.post("/api/ninjas", NinjaCtrl.createNinja);
    
    // Put
    app.put("/api/ninjas/:id", NinjaCtrl.updateNinja);

    // Delete
    app.delete("/api/ninjas/:id", NinjaCtrl.deleteNinja);

}