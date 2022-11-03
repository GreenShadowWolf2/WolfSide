import Nodemailer from 'nodemailer'

export default async function handler(req, res) {
    const body = JSON.parse(req.body)
    console.log(body);
    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp-relay.sendinblue.com",
      auth: {
        user: 'wolfsorganisation@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    })
    const email = body.email
    const correctanrede = () => {
      switch(body.gender) {
        case "Man": return "Herr"; break
        case "Other": return body.firstname; break
        case "Women": return "Frau"; break
      }
    }
    const anrede =  correctanrede()
    console.log(email);
    const mailData = {
      from: 'wolfsorganisation@gmail.com',
      to: email,
      subject: `Vielen Dank für die Registrierung ${body.firstname} ${body.secondname}`,
      text: `Guten Tag ${anrede} ${body.secondname}
      
      Sie haben sich erfolgreich bei uns registriert.
      
      Wir werden Ihnen jetzt monatlich einen Spendeaufruf auf diese Adresse schicken: ${body.adress}
      
      Freundliche Grüsse
      Ihr WolfsOrganisation Team`,

     }
     console.log(mailData);

     transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })

    res.status(200)
    }