const mongoose = require('mongoose');

const ClientesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    rut: {
        type: Number,
        required: true,
        trim: true
    },  
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    telefono: {
        type: String,
        trim: true
    },
    creado: {
        type: Date,
        default: Date.now() 
    }, 
    vendedor: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'Usuario'
    }

});

module.exports = mongoose.model('Cliente', ClientesSchema);