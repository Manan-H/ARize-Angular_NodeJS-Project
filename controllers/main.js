const Main = require("../json/main.json");

module.exports.getData = (req, res) => {

  try {
    res.status(200).json(Main);
  } catch (e) {

    res.status(500).json({
      success: false,
      Message: e
    })
  }
}