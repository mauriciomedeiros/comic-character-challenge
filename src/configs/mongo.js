const mongoose = require('mongoose');

class Mongo {
  constructor() {
    this.server = '172.17.0.2'; //this._connectionServer();
    this.port = '27017'; //process.env.DB_PORT;
    this.database = 'Challenge'; //process.env.DB_NAME;
    // this.user = process.env.DB_USER;
    // this.pass = process.env.DB_PASSWORD;
    this.connect();
  }

  connect() {
    mongoose
      .connect(
        `mongodb://${this.server}:${this.port}/${this.database}`,
        // { user: this.user, pass: this.pass, useNewUrlParser: true }
        { user: this.user, pass: this.pass, useNewUrlParser: true }
      )
      .then(() => {
        console.log('Database connection successful');
      })
      .catch(err => {
        console.log(err);
        console.log('Database connection error');
      });
  }

  // _connectionServer() {
  //   let server;
  //   if (process.env.DB_HOST2)
  //     return (server = [process.env.DB_HOST].concat([process.env.DB_HOST2]));
  //   return (server = process.env.DB_HOST);
  // }
}

module.exports = new Mongo();
