#!/usr/bin/env node
'use strict';

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _ansiRainbow = require('ansi-rainbow');

var _ansiRainbow2 = _interopRequireDefault(_ansiRainbow);

var _randomEmoji = require('random-emoji');

var _randomEmoji2 = _interopRequireDefault(_randomEmoji);

var _mdns2 = require('./mdns');

var _mdns3 = _interopRequireDefault(_mdns2);

var _http_api = require('./http_api');

var _http_api2 = _interopRequireDefault(_http_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = (0, _minimist2.default)(process.argv.slice(2), {
  default: {
    'api-port': 8901,
    tag: [],
    engine: []
  }
});
if (typeof args.tag == 'string') args.tag = [args.tag];
if (typeof args.engine == 'string') args.engine = [args.engine];

var _mdns = (0, _mdns3.default)(args);
var _http = (0, _http_api2.default)(args);

console.log(_ansiRainbow2.default.r("Zombie Swarm Node!") + '\n\n  ' + _chalk2.default.green("mdns-discovery:") + '\n    - address: ' + _chalk2.default.bold(_mdns.address) + '\n  ' + _chalk2.default.cyan("http-api:") + '\n    - host: ' + _chalk2.default.bold(_http.host) + '\n    - port: ' + _chalk2.default.bold(args['api-port']) + '\n    - meta:\n      - tags: ' + args.tag + '\n      - engines: ' + args.engine + '\n');

_http.server.on('listening', function () {
  var emojiline = _randomEmoji2.default.random({ count: 3 }).map(function (e) {
    return e.character;
  }).join(' - ');
  console.log(emojiline);
});