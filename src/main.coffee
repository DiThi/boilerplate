
hello = ->
    console.log 'Hello world!'

if window? and document?
    console.log "I'm in a browser!"

if module.hot
    module.hot.accept()


module.exports = {hello}
