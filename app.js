const getCode = require('./getCode');

getCode()
  .then(res => console.log(res))
  .catch(err => console.log(err));