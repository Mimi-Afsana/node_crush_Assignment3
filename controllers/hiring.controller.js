const { createManagerService } = require("../services/hiring.service");

// create hiring manager
const hiringManager = async (req, res) => {
  try {
    const output = await createManagerService(req.body);
    res.status(200).json({
      status: "success",
      message: "hiring manager create successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      error: error.message,
    });
  }
};
