var bookshelf = require('../config/bookshelf');
var User = require('./User');

var Eleitor = bookshelf.Model.extend({
  tableName: 'eleitores',
  hasTimestamps: true,
  userId: () => this.belongsTo(User)
});

module.exports = Eleitor;
