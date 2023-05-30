const mongoose = require('mongoose')

var plantasSchema = new mongoose.Schema({
    _id: String,
    NumRegisto: Number,
    CodRua: Number,
    Rua: String,
    Local: String,
    Freguesia: String,
    Espécie: String,
    NomCientifico: String,
    Origem: String,
    DataPlantação: String,
    Estado: String,
    Caldeira: String,
    Tutor: String,
    Implantação: String,
    Gestor: String,
    DataAtualização: String,
    NumIntervenções: Number
});

module.exports = mongoose.model('plantas', plantasSchema)