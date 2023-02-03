// index.js
const line = require('@line/bot-sdk');
var express = require('express');
const { replyMessage } = require('./lib/reply_message.js');
const reply_message = require('./lib/reply_message.js');

const config = {
  channelAccessToken: 'Wb+XxJcssEsuM5EJfXZKyrBCyUP+hPzMXfaCryCB0bk4hhL0uPuzBvcL5EqQOdTq5sKBeoAz8YJj+LICuDJAr4DAgTsf4sFSuz3jWGpa6Znko8qhoeB4R5PvlQKU/Kj7wvyux25UGt2FdIbcfPB5twdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'bf88b958cba613dae57e042ef49bea4b'
};
// create LINE SDK client
const client = new line.Client(config);
// create Express app
// about Express itself: <https://expressjs.com/>
const app = express();
// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/', line.middleware(config), (req, res) => {
	// console.log(req, res)
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
})
.get('/', (req, res) => {
    console.log('enter /');
});
// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }
  // reply message
  reply_message.replyMessage(event, config)

}
// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});