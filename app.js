const express = require('express');
const app = express();


app.listen('3000', () => {
	console.log('Server on Port 3000');
});


app.get('/', (req, res)=>{

	res.send('recibido jeje');

});

app.get('/random/:min_num/:max_num', (req,res) =>{

	const min = parseInt(req.params.min_num);

	const max = parseInt(req.params.max_num);

	const result = Math.floor(Math.random() * (max-min) + min);

	if(isNaN(min) || isNaN(max)){
		res.status('404');
		res.json({"Error 404" : "INT not found"});

		return; //break function
	}

	console.log(result);

	res.json({"random":result});


});

