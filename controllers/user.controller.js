const {
  getAllUsers,
  signUp,
  findUserByEmail,
} = require("../services/user.service");
const { generateToken } = require("../Utils/tokens");

const signupUser = async (req, res) => {
  const userInfo = req.body;
  try {
    const result = signUp(userInfo);
    res.status(200).json({
      status: "success",
      message: "signup is successfull",
    });
  } catch (error) {
    res.status(500).json({ status: "Failed", error: error.message });
  }
};

// login a user

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "Failed",
        error: "Please provide yvalid password and email",
      });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(400).json({
        status: "Failed",
        error: "user not found",
      });
    }
    const correctPass = user.comparePassword(password);

    if (!correctPass) {
      return res.status(403).json({
        status: "Fail",
        error: "Email Or Password both is incorrect",
      });
    }

    if (user.status != "active") {
      return res.status(403).json({
        status: "Fail",
        error: "account not active yet",
      });
    }

    const token = await generateToken(user);

    const { password: pass, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "Successfully looged in",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      error: error.message,
    });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await findUserByEmail(req.user?.email);
    const { password: pass, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "user varified",
      data: {
        user: others,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
};

const getAllUsersData = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({
      status: "success",
      users,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error.message,
    });
  }
};

module.exports = {
  signupUser,
  login,
  getMe,
  getAllUsersData,
};
