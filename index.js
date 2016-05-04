var Benchmark = require('benchmark');
var Immutable = require('immutable');

var create = function (num) {
	var data = {};
	for (var i = 0; i < num; i++) {
	  data['key' + i] = i;
	}
  return data;
}

var lens = [1, 1]
var map = {};
for (var i = 0; i < lens[0]; i++) {
  map['key' + i] = create(lens[1])
}

immutableObj = Immutable.fromJS(map)


var suite = new Benchmark.Suite;

suite.add('fromJS', function() {
  Immutable.fromJS(map)
})
.add('toJS', function() {
  immutableObj.toJS()
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
// run async
.run({ 'async': false });
