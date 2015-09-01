'use strict';

var path = require('path');
var spawn = require('norman-build-helper').spawn;

if (process.argv.length < 3) {
    console.error('Usage: node run.js <script> [options]');
    process.exit(1);
}

var script = path.resolve(__dirname, process.argv[2]);

console.log('Executing script ' + script);

var command = process.execPath;
var args = [script];
if (process.argv.length > 3) {
    args = args.concat(process.argv.slice(3));
}

spawn(command, args, {cwd: __dirname, stdio: 'inherit'}).then(function (result) {
    // console.log(result.stdout);
    console.log('Script completed');
}, function (err) {
    // console.log(result.stdout);
    // console.error(result.stderr);
    console.error('Script failed: § + err.message');
    console.log(err.toString());
});
