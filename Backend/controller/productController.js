import { instance } from "../Server.js";
import crypto from 'crypto';
export const processPayment = async (req, res) => {
    const options = {
        amount: Number(req.body.amount* 100),
        currency: "INR",
    }
    const order = await instance.orders.create(options);
     res.status(200).json({
        success: true,
        order
    });
}

export const getKey = async (req, res) => {
    res.status(200).json({
        success: true,
        key: process.env.RAZORPAY_API_KEY,
    });
}

export const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest('hex');

    if (razorpay_signature === expectedSignature) {
       return res.redirect(`http://localhost:5173/paymentSuccess?reference=${razorpay_payment_id}`);
    } else {
        res.status(400).json({
            success: false,
        });
    }
}