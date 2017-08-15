const request = require('request');
const getCoolSum = require('./getCoolSum');
const async = require('async');

const URL = 'http://dev.getethos.com/code';
const coolSum = getCoolSum(1000000);

let result;

const options = {
  headers: {
    'X-COOL-SUM': coolSum
  },
  method: 'POST'
};

const requestCb = (num, cb) => (error, response, body) => {
  if (error) console.log(err);

  if (response.statusCode === 200) {
    return cb(null, response.body)
  }

  return cb(null, null);
}

const tasks = [];

for (let i = 1; i <= 100; i++) {
  tasks.push(function (callback) {
    options.url = `${URL}${i}`;
    request(options, requestCb(i, callback))
  })
}

const getCode = (cb) => {
  async.parallel(tasks, function (err, res) {
    if (err) return console.log(err);

    cb(res.filter(el => !!el).join(''));
  })
}

module.exports = getCode;
