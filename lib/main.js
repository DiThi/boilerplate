// Generated by CoffeeScript 1.9.1
(function() {
  var hello;

  hello = function() {
    return console.log('Hello world!');
  };

  if ((typeof window !== "undefined" && window !== null) && (typeof document !== "undefined" && document !== null)) {
    console.log("I'm in a browser!");
  }

  if (module.hot) {
    module.hot.accept();
  }

  module.exports = {
    hello: hello
  };

}).call(this);

//# sourceMappingURL=main.js.map