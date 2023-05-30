var express = require('express');
var router = express.Router();
var plantas = require('../controllers/plantas');

router.get('/plantas/:id', function(req, res) {
  plantas.getById(req.params.id)
    .then(dados => res.status(200).json(dados)).then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui obter a respetiva planta."}))  
})

router.get('/plantas/freguesias', function(req, res, next) {
  plantas.getFreguesias()
    .then(dados => res.status(200).json(dados)).then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de freguesias."}))  
})

router.get('/plantas/especies', function(req, res, next) {
  plantas.getEspecies()
    .then(dados => res.status(200).json(dados)).then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de freguesias."}))  
})

router.get('/plantas', function(req, res, next) {
  if (req.query.especie){
    plantas.getBySpecie(req.query.especie)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de registos."}))
  }
  else if (req.query.implant){
    plantas.getByImplant(req.query.implant)
      .then(dados => res.status(200).json(dados))
      .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de registos."}))
  }
  else {
    plantas.getList()
      .then(dados => res.status(200).json(dados))
      .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de registos."}))  
}});

//POST
router.post('/plantas', function(req, res, next) {
  plantas.addPlanta(req.body)
    .then(dados => {
      res.status(201).jsonp(dados)
    })  
    .catch(erro => {
      res.status(524).render('error', {error: erro, message: "Erro na inserção de uma planta"})
    })
})

//DELETE
router.delete('/plantas/:id', function(req, res, next) {
  plantas.deletePlanta(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não consegui remover a Planta."}))
})

module.exports = router;
