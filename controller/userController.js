import userdetails from "../model/userDetails.js";

export const create = async (req, res) => {
  try {
    const userData = new userdetails(req.body);
    if (!userData) {
      return res.status(404).json({ message: "User Data was not Found" });
    }
    const saveData = await userData.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getUsersData = async (req, res) => {
  try {
    const usersData = await userdetails.find({});
    if (!usersData) {
      return res.status(404).json({ message: "data was not found" });
    }

    res.status(200).json(usersData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
export const getOneUsersData = async (req, res) => {
  try {
    const id = req.params.id;
    const usersData = await userdetails.findById(id);
    if (!usersData) {
      return res.status(404).json({ message: "data was not found" });
    }

    res.status(200).json(usersData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserData = async (req, res) => {
  try {
    const id = req.params.id;
    const usersData = await userdetails.findById(id);
    if (!usersData) {
      return res.status(401).json({ message: "user was not found" });
    }
    const updatedUserData = await userdetails.findByIdAndUpdate(id, req.body, {
      new: true
    });

    res.status(200).json(updatedUserData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUserData = async (req, res) => {
  try {
    const id = req.params.id;
    const usersData = await userdetails.findByIdAndDelete(id);
    if (!usersData) {
      return res.status(404).json({ message: "user was not found" });
    }

    res.status(200).json(usersData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

*/
