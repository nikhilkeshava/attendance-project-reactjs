
const express = require('express')
const router = new express.Router();
const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport');


const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{
        api_key:'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'
    }
}))

router.post('/send', (req, res) => {
    const { name, email, message, subject } = req.body
    transporter.sendMail({
        to:'jayanth@cronj.com',
        from: email,
        subject:subject,
        html:`<h3>${name}</h3>
        <p>${message}</p>`
    }).then(resp => {
        res.json({resp})
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router

// app.listen(PORT,()=>{
//     console.log("server is running on",PORT)
// })