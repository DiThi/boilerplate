
var child_process = require('child_process');

// This makes a bundle to use in the browser
child_process.execSync('node node_modules/webpack/bin/webpack.js', {cwd: __dirname});

// This compiles all 'src' to 'lib' to be used as node module
// or as a dependency when using webpack/browserify in another repo
child_process.execSync('node node_modules/coffee-script/bin/coffee -cmo lib src', {cwd: __dirname});
