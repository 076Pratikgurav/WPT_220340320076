let dbparams={
	hsot: 'localhost',
	user: 'pratik',
	password: 'cdac',
	database: 'islampur',
	port: 3306
};

const mysql = require('mysql2');
const con =mysql.createConnection(dbparams);

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');
const { response } = require('express');






app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



//var result;

app.get("/getbookid",(req, resp)=> {
	
		let input=req.query.x;
		console.log(input);
		//console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
		let.output ={status:false,bookdetails:{bookid:00,bookname:'null',price:00}};
		con.query('select * from book where bookid=?',[input],(error,rows)=>
		{
			if(rows.length > 0)
			{
				output.length=true;
				output.bookdetails=rows[0];
			}
			resp.send(output);
		});
    	//var xyz ={ v1:37, v2:35};
        //res.send(xyz);
    });


app.get('/updateBook',(req,resp) => {
		let input ={
			bookid: req.query.bookid,
			bookname: req.query.bookname,
			price: req.query.price,
		};

		let output =false;

		cone.query('update book set bookname=?,price=? where bookid = ?',[input.bookname,input.price,input.bookid]),
		(error,rows)=>{
			console.log(rows);
			if(error){
				console.log(error);

			}
			else if(rows.affectedRows >0){
				output=true;
			}
			console.log(output);
			resp.send(output);
		}
	
        //console.log("reading input " + req.query.xyz);
		
    	//var xyz ={ v1:37, v2:35};

	


		});

	
app.listen(900, function () {
    console.log("server listening at port 900...");
});