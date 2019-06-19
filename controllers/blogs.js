const blogs = require("../json/blogs.json");

module.exports.getData = (req, res) => {
  try {
    res.status(200).json(blogs);
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e
    })
  }
}