import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });


const transport = nodemailer.createTransport({
    host: "in-v3.mailjet.com",
    port: 587,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

router.post("/f1", async (req, res) => {
  const { name, email, message } = req.body;

  console.log(name, email);
  console.log(req.body.name);

  try {
    transporter.sendMail({
      to: "chinmayinbox8@gmail.com",
      from: process.env.EMAIL,
      subject: `new portfolio contact`,
      html: `
        <h1>new portfolio contact</h1>
        <h3>${name}</h3>
        <h3>${email}</h3>
        <h3>${message}</h3>
        `,
    });

    res.status(200).json({ message: req.body.name });
  } catch (err) {
    res.status(401).json({ message: err });
  }
});

export const routerMail = router;

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth : {
//         user: "surve4407@gmail.com",
//         pass : process.env.MAIL_PASS,
//     }
// });



    // transport.sendMail({
    //   to: user.email,
    //   from: process.env.EMAIL,
    //   subject: `Signup Successful`,
    //   html: `
    //   <h1>Welcome, ${user.name} ${user.surname} To Dark Services</h1>
    //   <h5>Click on <a href="https://url-shortner-server-1.herokuapp.com/api/url/verify?token=${token}">Link</a> , To Activate Account.</h5>
    //   <p>Doing The Above Step Help US :)</p>
    //   `,
    // });