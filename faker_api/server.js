const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const port = 8000

const createUser = () => {
    const fName = faker.name.firstName()
    const lName = faker.name.lastName()
    const newUser = {
        id : (Math.floor(Math.random() * 9999)),
        firstName : fName,
        lastName : lName,
        phone : faker.phone.phoneNumber(),
        email : faker.internet.email(fName, lName),
        password : faker.internet.password()
    }
    return newUser
}

const createCompany = () => {
    const state = faker.address.stateAbbr();
    const newUser = {
        id : (Math.floor(Math.random() * 9999)),
        name : faker.company.companyName(),
        address : {
            street : faker.address.streetName(),
            city : faker.address.city(),
            state : state,
            zip : faker.address.zipCodeByState(state),
            country : "United States"
        }
    }
    return newUser
}

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
    res.json({User : createUser(), Company : createCompany()})
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );