import express from "express";
import {
   registerController,
   loginController,
   
   updateProfileController,
   forgotPasswordController,
   getOrdersController,
   getAllOrdersController,
   orderStatusController,
   getOrderById,
   placeOrder
} from "../controllers/authController.js";
 import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// //router object
const router = express.Router();

// //routing
// //REGISTER || METHOD POST
router.post("/register", registerController);

// //LOGIN || POST
router.post("/login", loginController);

// //Forgot Password || POST
 router.post("/forgot-password", forgotPasswordController);



;


// //protected User route auth
// router.get("/user-auth", requireSignIn, (req, res) => {
//   res.status(200).send({ ok: true });
// });
// //protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// //update profile
router.put("/profile", requireSignIn, updateProfileController);

// //orders
router.get("/orders", requireSignIn, getOrdersController);

// //all orders
 router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// // order status update// and get order by ID
router.put(
  "/order-status/:orderId",
  requireSignIn,
  //isAdmin,
  orderStatusController
);
router.get('/',
requireSignIn,
getOrderById
)
router.post("/place",
  requireSignIn,
  placeOrder
)

export default router;
