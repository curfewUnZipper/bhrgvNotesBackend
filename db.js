const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://BhargavPattanayak:bhargav00007@cluster0.npaegrt.mongodb.net/test"

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB", error);
    });
};

module.exports = connectToMongo;
