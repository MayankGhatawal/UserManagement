import User from "../model/User.js";

// Create User
export const createUser = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    if (!name || !email || !mobile)
      return res.status(400).json({ message: "All fields are required" });

    const user = await User.create({ name, email, mobile });
    res.status(201).json(user);
  } catch (err) {
    if (err.code === 11000)
      return res.status(400).json({ message: "Email or Mobile already exists" });
    res.status(500).json({ message: err.message });
  }
};

// Get all Users
export const getUsers = async (_, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get User by ID
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch {
    res.status(400).json({ message: "Invalid User ID" });
  }
};

// Update User by ID
export const updateUser = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, mobile },
      { new: true, runValidators: true }
    );
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    if (err.code === 11000)
      return res.status(400).json({ message: "Email or Mobile already exists" });
    res.status(400).json({ message: err.message });
  }
};

// Delete User by ID
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch {
    res.status(400).json({ message: "Invalid User ID" });
  }
};
