var PagamentoDAO = function(connection){
  this._connection = connection;
}

PagamentoDAO.prototype.list = function(callback){
  this._connection.query("SELECT * FROM pagamentos", callback);
}

PagamentoDAO.prototype.save = function(pagamento, callback){
  this._connection.query("INSERT INTO pagamentos SET ?", pagamento, callback);
}

PagamentoDAO.prototype.update = function(pagamento ,callback){
  this._connection.query("UPDATE pagamentos SET status = ? WHERE id = ? ", [pagamento.status, pagamento.id ], callback);
}

PagamentoDAO.prototype.findById = function(id, callback){
  this._connection.query("SELECT * FROM pagamentos WHERE id = ? ", id, callback);
}

module.exports = function(){
  return PagamentoDAO;
}
