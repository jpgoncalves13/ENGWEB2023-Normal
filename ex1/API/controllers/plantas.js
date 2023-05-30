const plantas = require('../models/plantas')

// Plants List
module.exports.getList = () => {
    return plantas
            .find({})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getById = (id) => {
    return plantas
           .findOne({_id:id})
           .then(resposta => {
                return resposta
            })
           .catch(erro => {
                return erro
            })
}


module.exports.getBySpecie = (specie) => {
    return plantas
          .find({Espécie:specie})
          .then(resposta => {
                return resposta
            })
          .catch(erro => {
                return erro
            })
}

module.exports.getByImplant = (implant) => {
    return plantas
         .find({Implantação:implant})
         .then(resposta => {
                return resposta
            })
         .catch(erro => {
                return erro
            })
}

module.exports.getFreguesias = () => {
    return plantas
        .distinct("Freguesia").sort()
        .then(resposta => {
                return resposta
            })
        .catch(erro => {
                return erro
            })
}

module.exports.getEspecies = () => {
    return plantas
        .distinct("Espécie").sort()
        .then(resposta => {
                return resposta
            })
        .catch(erro => {
                return erro
            })
}

module.exports.addPlanta = e => {
    return plantas
          .create(e)
          .then(resposta => {
                return resposta
            })
          .catch(erro => {
                return erro
            })
}

module.exports.deletePlanta = (id) => {
    return plantas
             .deleteOne({_id:id})
             .then(resposta => {
                    return resposta
                })
             .catch(erro => {
                    return erro
                })
}