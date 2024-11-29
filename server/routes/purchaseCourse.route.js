const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated");
const {
  createCheckoutSession,
  stripeWebhook,
} = require("../controller/purchaseCourse.controller");

const router = express.Router();
router
  .route("/checkout/create-checkout-session")
  .post(isAuthenticated, createCheckoutSession);

router
  .route("/webhook")
  .post(express.raw({ type: "application/json" }), stripeWebhook);
router.route("/course/:courseId/detail-with-status").get();

// router.route("/").get(getAllPurchaseCourses);

module.exports = router;
