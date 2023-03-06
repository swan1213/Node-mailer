const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

router.post("/mail", (req, res) => {
  const { name, email, subject, content } = req.body;
  const output = `${name}-${email}-${subject}-${content}`;

  var transport = nodemailer.createTransport(
    smtpTransport({
      service: "Gmail",
      auth: {
        user: "hunternelson2811@gmail.com",
        pass: "svulzeqsdwaikdic",
      },
    })
  );

  // setup e-mail data with unicode symbols
  var mailOptions = {
    // from: `${email}`, // sender address
    from: `tokenbigapple@gmail.com`, // sender address
    to: `${email}`, // list of receivers
    subject: "Hey, die, josei japtae", // Subject line
    text: "", // plaintext body
    html: output, // html body
  };
  // send mail with defined transport object
  transport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      // console.log("Message sent: " + response.message);
      res.status(200).json({ msg: "success" });
    }
  });
});

module.exports = router;
