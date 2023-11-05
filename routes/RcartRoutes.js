import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { addProductToCart,
removeProductFromCart,
updateCartQuantity,
viewUserCart,
} from "../controllers/RcartController.js";
//import { removeProductFromCart } from '../controllers/cartController.js';

const router = express.Router();

//routes
//add Product
router.post(
  "/add-product",
  requireSignIn,
  addProductToCart
);
router.get(
  "/view-product/:id",
  requireSignIn, 
   viewUserCart,          
);

//update category
router.put(
  "/update-cart-quantity/:userId/:productId", // 
  updateCartQuantity // 
);

//delete category
router.delete(
  "/delete-product/:userId/:productId", // 
  requireSignIn,
  removeProductFromCart // 
);

export default router;
