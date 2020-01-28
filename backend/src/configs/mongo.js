const mongoose = require('mongoose');

class Mongo {
  constructor() {
    this.server = process.env.DATABASE_URI; //'localhost';
    this.port = '27017';
    this.database = 'Challenge';
    this.connect();
  }

  connect() {
    mongoose
      .connect(`mongodb://${this.server}:${this.port}/${this.database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch(err => {
        console.log(err);
        console.log('Database connection error');
      });
  }
}

module.exports = new Mongo();
