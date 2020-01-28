const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const Router = require('./routes');

require('./configs/mongo');

module.exports = {
  bootstrap() {
    this.port = process.env.PORT || 5000;
    app.use(bodyParser.json());
    app.use(cors());
    app.use(Router.initialize());
  },

  run() {
    app
      .listen(this.port, () => {
        console.log(`Listenning at http://localhost: ${this.port}`);
      })
      .on('error', err => {
        console.log(`Err: Error listen server: ${err}`);
      });
  },
};
