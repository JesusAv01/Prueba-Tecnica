
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1/test').then(() => {

    console.log('Se conecto a la DB')
}).catch( (e) => {
    console.error('Error al conetarse a a db', e)

});


module.exports = mongoose