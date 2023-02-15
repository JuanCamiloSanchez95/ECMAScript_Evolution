//obtener un filtro sobre una cadena con expresiones logicas
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const match = regex.exec('2002-01-23');
console.table(match);