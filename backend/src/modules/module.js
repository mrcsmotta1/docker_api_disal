module.exports = function (data) {
  let qr;
  data.forEach(function (valor, indice) {
    qr = `id: ${valor._id}\n\nos: ${valor.os}\n\nnome: ${valor.nome}\n\ndescricao: ${valor.descricao}\n\npeso: ${valor.peso}\n\ndatafabricacao: ${valor.datafabricacao}\n\ncreated_at: ${valor.created_at}`;
  });
  return qr;
};
