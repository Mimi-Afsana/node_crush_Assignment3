const { createApplyService } = require("../services/apply.service");

const apllyPost = async (req, res) => {
  try {
    const result = await createApplyService(req.body);

    res.status(200).json({
      status: "success",
      message: "apply post successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      error: error.message,
    });
  }
};

module.exports = {
  apllyPost,
};
