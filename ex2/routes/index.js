var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res) {
  var data = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:15030/plantas')
    .then(dados => {
      res.status(200).render('index', { clist : dados.data , d: data})
    })
    .catch(erro => {
      res.status(520).render('error', {error: erro, message: "Erro na obtenção da lista de exames"})
    })
});

router.get('/:id', function(req, res){
  var data = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:15030/plantas/'+req.params.id)
    .then(dados => {
      res.status(200).render('planta', { c : dados.data , d: data})
    })
    .catch(erro => {
      res.status(520).render('error', {error: erro, message: "Erro na obtenção da especie " + req.params.id })
    })
})

router.get('/especies/:id', function(req, res) {
  var data = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:15030/especies?'+req.params.id)
    .then(dados => {
      if (dados.data.length > 0) {
        var nomeEspecie = dados.data[0].Espécie;
      }
      res.status(200).render('especie', { name : nomeEspecie, DESIGN : req.params.Espécie,  clist : dados.data , d: data})
    })
    .catch(erro => {
      res.status(520).render('error', {error: erro, message: "Erro na obtenção da lista de exames"})
    })
});

module.exports = router;
