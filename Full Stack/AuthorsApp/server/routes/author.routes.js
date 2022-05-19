// thing.router.js
const AuthorCtrl= require('../controllers/author.controller');

module.exports = (app)=>{
    // Get
    app.get("/api/hello", AuthorCtrl.sayHello);
    app.get("/api/authors", AuthorCtrl.findAllAuthors);
    app.get("/api/authors/:id", AuthorCtrl.findOneAuthor);

    // Post
    app.post("/api/authors", AuthorCtrl.createAuthor);
    
    // Put
    app.put("/api/authors/:id", AuthorCtrl.updateAuthor);

    // Delete
    app.delete("/api/authors/:id", AuthorCtrl.deleteAuthor);
}