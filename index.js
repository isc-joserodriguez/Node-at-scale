/* // index.js
const debugHttpIncoming = require('debug')('http:incoming')
const debugHttpOutgoing = require('debug')('http:outgoing')

let outgoingRequest = {
  url: 'https://risingstack.com'
}

// sending some request
debugHttpOutgoing('sending request to %s', outgoingRequest.url)

let incomingRequest = {
  body: '{"status": "ok"}'
}

// serving some request
debugHttpOutgoing('got JSON body %s', incomingRequest.body) */

/* const pino = require('pino')()
 
pino.info('hello pino')
pino.info('the answer is %d', 42)
pino.error(new Error('an error')) */

//index.js
require('node-report')

function myListener(request, response) {
  switch (request.url) {
  case '/exception':
    throw new Error('*** exception.js: uncaught exception thrown from function myListener()');
  }
}