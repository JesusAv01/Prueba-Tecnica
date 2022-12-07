const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const db = require('./db')
const app = express()
app.set('port',process.env.PORT || 3000 )
app.set('appName','pruebastecnicas')
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'))
})

app.use('/api', require('./rutas/api'))


//Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(app.get('appName'))
    console.log("Server corriendo", app.get('port'))

})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())
