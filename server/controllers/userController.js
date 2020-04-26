const crypt = require("../helpers/crypt");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../helpers/db");
const { ROLES } = require("../constants/contants");
const {
  getFailureResponse,
  getSuccessResponse
} = require("../helpers/response");

module.exports.login = function (req, res, next) {
  const { username, password} = req.body;
  try {
    db.executeQuery(
      `select * from login where username = ? and password = ?`,
      [mobile_no, password]
    )
      .then(rows => {
        // TODO own code for login
        if (rows.length > 0) {      
		console.log('login successfully')
		}
  } catch (ex) {
    console.log("Error in UserController at authenticate function :" + ex);
    res.status(200).json(getFailureResponse());
  }
};
