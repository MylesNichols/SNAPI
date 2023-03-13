const { Schema, model } = require('mongoose');
const thoughtSchema = require('./thought');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

userSchema.virtual('thoughtCount').get(function() {
  return this.thoughts.length;
});

const User = model('User', userSchema);

module.exports = User;