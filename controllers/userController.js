const { User, Thought } = require('../models');

// Define the methods for CRUD operations on User model
const UserController = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
  },

  // Get a user by id
  async getSingleUser(req, res) {
    try {
      const user = await User.findById(req.params.id).select('-__v');
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to retrieve user' });
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  // Update a user by id
  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to update user' });
    }
  },

  // Delete a user by id
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User and associated thoughts deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }
};

module.exports = UserController;