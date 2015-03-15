
exports.hello = ->
    # Try me, modify me, then click again without reloading the page!
    alert 'Hello world!'

init = ->
    if window? and document?
        console.log "I'm in a browser!"
        window.addEventListener 'click', exports.hello

require('hot-mutate')(module)
init()
