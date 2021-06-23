const router = require("express").Router();
const mail = require('../../config/mail');
const { Weapon, Armor } = require("../../models");

router.post('/', async (req, res) => {

  let senderUsername = req.session.username
  let senderEmail = req.session.email
  let ownerUsername = req.body.username
  let ownerEmail = req.body.email

    const item = req.body.type === 'weapons'
        ? await Weapon.findByPk(req.body.id)
        : await Armor.findByPk(req.body.id)

  let info = await mail.sendMail({
    to: ownerEmail,
    subject: "Someone on Fallout 76 Central Market is interested in your item!",
    html: `Hello ${ownerUsername}, <br><br> Another user on Fallout 76 Central Market has expressed interest in buying your ${item.dataValues.mainEffect} ${item.dataValues.itemType} with ${item.dataValues.majorEffect} and ${item.dataValues.minorEffect} which you currently have listed for ${item.dataValues.capsValue} caps. You have had this item listed with us since ${item.dataValues.createdAt}. If you are interested in making a sale, you may contact ${senderUsername} at ${senderEmail}.`
  });

res.status(200).send()

})

module.exports = router;