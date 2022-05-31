const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { v4:uuidv4 } = require("uuid");

router.post("/payment-intents", async(req, res) => {

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'inr',
      payment_method: 'pm_card_visa',
      confirmation_method: 'manual',
      confirm: true
    });
    res.status(200).json(paymentIntent);
      
  } catch (error) {
    res.status(500).json(error);
  }
 
});

module.exports = router;