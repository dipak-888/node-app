'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//movie schema definition
var MovieSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  writer: { type: String, required: true },
  year: { type: Number, required: true },
  time: { type: Number, required: true, min: 1 },
  createdAt: { type: Date, default: Date.now }
}, {
  versionKey: false
});

// Sets the createdAt parameter equal to the current time
MovieSchema.pre('save', function (next) {
  var now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

//Exports the MovieSchema for use elsewhere.
module.exports = mongoose.model('movie', MovieSchema);
//# sourceMappingURL=movie.js.map