module.exports = function(app){

  app.get('/pagamentos/pagamento', function(req, res){
    var connection = app.infra.connectionFactory();
    var PagamentoDAO = new app.infra.PagamentoDAO(connection);

    PagamentoDAO.list(function(err, pagamentos){
      if(!err){
        res.status(200).json(pagamentos);
      }
    });
  });

  app.put('/pagamentos/pagamento/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    var pagamento = {};
    pagamento.id = id;
    pagamento.status = "CONFIRMADO";

    var connection = app.infra.connectionFactory();
    var PagamentoDAO = new app.infra.PagamentoDAO(connection);
    PagamentoDAO.update(pagamento, function(err, result){
      if(!err){
        console.log(result);
      }else{
        console.log(err); 
      }
    });

  });

  app.delete('/pagamentos/pagamento/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    var pagamento = {};
    pagamento.id = id;
    pagamento.status = "CANCELADO";

    var connection = app.infra.connectionFactory();
    var PagamentoDAO = new app.infra.PagamentoDAO(connection);
    PagamentoDAO.update(pagamento, function(err, result){
      if(!err){
        console.log(result);
      }else{
        console.log(err);
      }
    });

  });

  app.post('/pagamentos/pagamento', function(req, res){
      var pagamento = req.body;
      pagamento.status = "CRIADO";
      pagamento.data = new Date;

      console.log(pagamento);

      var connection = app.infra.connectionFactory();
      var PagamentoDAO = new app.infra.PagamentoDAO(connection);

      PagamentoDAO.save(pagamento, function(err, result){
        if(!err){
          console.log('Pagamento criado');
          res.location('/pagamento/pagamentos/' + result.insertId);
          res.status(200).json(pagamento);
        }else{
          console.log(err);
        }
      })
  });

  return app;
}
