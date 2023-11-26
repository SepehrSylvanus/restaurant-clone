import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async(req)=>{
  try {
const price = req.body
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price,
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: false,
      },
    });
    return new NextResponse(JSON.stringify({clientSecret: paymentIntent.client_secret}), {status: 200})
    
  } catch (error) {
    return new NextResponse(JSON.stringify({mssg: 'an error occured'}), {status: 500})
  }
}