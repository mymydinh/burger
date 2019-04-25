var connection = require('./connection.js');

var orm = {
    selectAll: function (tableIn, cb) {
        connection.query("SELECT * FROM " + tableIn + ";", function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (tableIn, vals, cb) {
        connection.query("INSERT INTO " + tableIn + " (burger_name) VALUES ('" +vals+ "');", function(err, result) {
            if (err) throw err;
            cb(result)
        });
    },
    updateOne: function (tableIn, condition, cb) {
        connection.query("UPDATE " + tableIn + " SET devoured=true WHERE id=" + condition + ";", function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
}

module.exports = orm;