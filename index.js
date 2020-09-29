const testHTML = `
<!DOCTYPE html>
<html>
<head>
</head>
<body>
	<input type="text" id="fiptest">
</body>
</html>
`;
const { JSDOM } = require( 'jsdom' );
const jsdom = new JSDOM( testHTML );

// Set window and document from jsdom
const { window } = jsdom;
const { document } = window;
// Also set global window and document before requiring jQuery
global.window = window;
global.document = document;

const $ = global.jQuery = require( 'jquery' );

console.log( `jQuery ${jQuery.fn.jquery} working! Yay!!!` );
const inputElement = $( '#fiptest' );
console.log( inputElement.length );


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

var primerValor = process.argv;
console.log(primerValor[3]);

connection.query(primerValor[3],[
    req.body.dob,
    req.body.account_number
   ],function(error, results){});

// Execute prepared statement with parameterized user inputs
var query = 'SELECT * FROM accounts WHERE username=? AND password=?';
connection.query(query, [username, passwordHash],
  function (err, rows, fields) {
 console.log("Results = " + JSON.stringify(rows));
});
