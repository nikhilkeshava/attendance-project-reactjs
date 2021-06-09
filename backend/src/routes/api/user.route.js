const express = require("express");
const router = new express.Router();
const userController = require("../../controller/user.controller");
const auth = require("../../middleware/auth");
const sgMail = require("@sendgrid/mail");
const User = require("../../models/user.model");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/create", userController.createUser);

router.post("/login", userController.login);

router.post("/users/logout", auth, userController.logout);

router.get("/get", userController.getUsers);
router.patch("/:id", userController.addUsers);

router.get("/get/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ nouserfound: "No user data" }));
});
router.get("/countuser", (req, res) => {
  User.countDocuments({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
});
// router.get('/contact',(req,res)=>{

//  res.render('contact');

// })

// router.post('/contact',async(req,res)=>{
//     const message={
//         to:req.body.email,
//         // from:'jayanth@cronj.com',
//         from:
//         {
//           name:'Jayanth G',
//           email:'jayanth@cronj.com'
//         },
//         subject:'Welcome Mail',
//         text:req.body.message,
//         html:req.body.message,

//       }

//       try {
//         await sgMail.send(msg);
//         req.flash('success', 'Thank you for your email, we will get back to you shortly.');
//         res.redirect('/contact');
//       } catch (error) {
//         console.error(error);
//         if (error.response) {
//           console.error(error.response.body)
//         }
//         req.flash('error', 'Sorry, something went wrong, please contact admin@website.com');
//         res.redirect('back');
//       }

// })

// router.patch('/users/me', auth, async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         updates.forEach((update) => req.user[update] = req.body[update])
//         await req.user.save()
//         res.send(req.user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.delete('/users/me', auth, async (req, res) => {
//     try {
//         await req.user.remove()
//         res.send(req.user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

module.exports = router;
