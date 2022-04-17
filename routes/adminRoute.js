const express = require("express");
const router = express.Router();
const Admin = require("../models/adminModel")

router.post("/adminlogin", async(req, res) => {

      const {username , password} = req.body

      try {
          const admin = await Admin.findOne({username , password})
          if(admin) {
              res.send(admin)
          }
          else{
              return res.status(400).json(error);
          }
      } catch (error) {
        return res.status(400).json(error);
      }
  
});

module.exports = router