// define Logic
const nodemailer = require("nodemailer");

module.exports.emailService = async (req, res) => {
res.status(200).send("e dey work oo")
//   try {
  
//     let transporter = await nodemailer.createTransport({
//        host: "smtp.mailtrap.io",
//         port: 2525,
//         auth: {
//         user: "54f00c3f83101a",
//         pass: "e4ffe895dcae3d"
//     }
//       });
      
      
//       let info = await transporter.sendMail({
//         // from: '2c515e982c-3f2b39+1@inbox.mailtrap.io',
//         from: ' 9671d8e9c2-f7af74+1@inbox.mailtrap.io',
//         to: ' 9671d8e9c2-f7af74+1@inbox.mailtrap.io',
//         subject: req.body.subject,
//         text: 'hello',
//         html: req.body.html
    
//     })
//     res.status(200).send("message sent successfully");

//     console.log("Message sent: %s", info.messageId);


//   } catch (err) {
//     res.status(400).send(err);
//   }
};
