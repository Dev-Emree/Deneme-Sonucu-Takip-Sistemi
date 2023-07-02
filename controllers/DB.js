let mongoose = require('mongoose'),
    { DBoptions } = require('../config/config');

const DBConnection = function (options=DBoptions) {
    let err = false;
    
    mongoose.connect(process.env.DB_PATH, options);

    if (process.env.NODE_ENV !== 'production') mongoose.set('debug', true);
    
    var db = mongoose.connection;

    if (process.env.NODE_ENV === 'production')
        db.on("error", () => err = true);
    
    if (err) return;
    
    return db;
}

module.exports = DBConnection;