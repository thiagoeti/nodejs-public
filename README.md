# NodeJS - Public

Script simple for data access.

### Install

```bash
npm i express
```

### Script

```js
var express=require('express');
var path=require('path');

var app=express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
	console.log('app:3000');
});
```
