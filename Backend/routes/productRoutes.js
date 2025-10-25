import express from 'express';
const router = express.Router();
import { getKey, processPayment, paymentVerification } from '../controller/productController.js';
router.route("/payment/process").post(processPayment);
router.route("/getKey").get(getKey);
router.route("/paymentVerification").post(paymentVerification);
export default router;