import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth : {
        user: "surve4407@gmail.com",
        pass : process.env.MAIL_PASS,
    }
});

router.post("/f1", async (req, res) => {
  const { name, email, message } = req.body;

  console.log(name, email);
  console.log(req.body.name);

  try {
    transporter.sendMail({
      to: "chinmayinbox8@gmail.com",
      from: "surve4407@gmail.com",
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
