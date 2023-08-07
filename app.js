// SETUP
/* -- ----- ----- ----- */

// packages
var express=require('express');
var path=require('path');

// APPLICATION
/* -- ----- ----- ----- */

// app
var app=express();

// public
app.use(express.static(path.join(__dirname, 'public')));

// listen
app.listen(3000, function(){
	console.log('app:3000');
});

/* -- ----- ----- ----- */
