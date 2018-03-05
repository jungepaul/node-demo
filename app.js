const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.get('/', (req,res) =>res.send(process.env.APPSETTING_MyAppSettings + ' AND '+ process.env.CUSTOMCONNSTR_MyConnectionString));
app.listen (port, () => console.log('Server is running on port'+port));