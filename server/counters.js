var _ = require("lodash");
var __Counters = {
  "kc9ktwfr":{
  "id":"kc9ktwfr",
  "title":"Default counter",
  "count":0
}}
module.exports = {
  all    : getAll,
  create : create,
  inc    : applyTo("count", inc),
  dec    : applyTo("count", dec),
  delete : del
};

function genId() {
  return (+new Date() + ~~(Math.random * 999999)).toString(36);
}

function getAll() { return _.map(__Counters, _.identity); }

function create(title) {
  var id = genId();
  __Counters[id] = {id: id, title: title, count: 0};
  return __Counters[id];
}

function del(id) {
  delete __Counters[id];
  return id;
}

function applyTo(key, fn) {
  return function(id) {
    __Counters[id][key] = fn(__Counters[id][key]);
    return __Counters[id];
  }
}

function inc(n) { return n + 1; }
function dec(n) { return n - 1; }
