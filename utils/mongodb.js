const mongoose = require('mongoose');

function mongoConnection() {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb+srv://xhabbirhsn:aH9opR0ptffYzJ0Q@cluster0.hyehntq.mongodb.net/MoviesDesk?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => {
            resolve('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
            reject(err);
        });
    });
}

module.exports = mongoConnection;
