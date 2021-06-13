const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true // este elimina los espacios en blanco, esto lo hace mongo
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true // esto hace que se abra una unica cuenta con este email
    },
    password: {
        type: String,
        required: true,
        trim: true
    }, 
    creado: { // automaticamente agrega la fecha de este usuario
        type: Date,
        default: Date.now() 
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);