var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'devapp'
});

connection.connect((err) => {
    console.log("DB Conectada!")
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

exports.getAllLinks = () => {
    return new Promise((resolve, reject) => {
        const queryText = `SELECT * FROM links`
        connection.query(queryText, (err, results) => {
            if (err) {
                console.log(err)
                return reject(err);
            };
            resolve(results);
        });
    })
}

exports.createLinkDb = data => {
    return new Promise((resolve, reject) => {
        const columns = ["technology", "author", "link"].sort()
        const values = columns.map(column => data[column]);
        const queryText = `INSERT INTO links (??) VALUES (?)`
        connection.query(queryText, [columns, values], (err, result) => {
            if (err) {
                console.log(err)
                return reject(err);
            }
            resolve(result);
        });
    })
}

exports.deleteLinkDb = id => {
    return new Promise((resolve, reject) => {
        const queryText = `DELETE FROM links WHERE id = ${id}`;
        connection.query(queryText, (err, result) => {
            if (err){
                console.log(err)
                return reject(err);
            }
            resolve(result);
        });
    })
}

exports.updateLinkDb = (id, newLink) => {
    return new Promise ((resolve, reject) => {
        const queryText = `UPDATE links SET link = '${newLink}' WHERE id = ${id}`;
        connection.query(queryText, (error, results) => {
            if (error) {
                console.log(error)
                return reject(error);
            };
            resolve(results);
          });
    })
}