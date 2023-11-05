import User from '../models/userModel.js';
import Product from '../models/productModel.js';
//import { removeProductFromCart } from '../controllers/cartController.js';

export const addProductToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
      
    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user || !product) {
      return res.status(404).json({ success: false, error: 'User or product not found' });
    }

    const existingCartItem = user.cart.find((item) => item.product.equals(product._id));
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      user.cart.push({ product: product._id, quantity });
    }

    await user.save(); // Save the user instance, not the model

    res.status(200).json({ success: true, message: 'Product added to the cart' });
  } catch (error) {
    res.status(500).json({ success: false, error, message: 'An error occurred' });
  }
};

export const viewUserCart = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).populate('cart.product');

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    const cartItems = user.cart;

    res.status(200).json({ success: true, cart: cartItems });
  } catch (error) {
    res.status(500).json({ success: false, error, message: 'An error occurred' });
  }
};

export const updateCartQuantity = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    const cartItem = User.cart.find((item) => item.product.equals(productId));

    if (cartItem) {
      cartItem.quantity = quantity;
      await user.save();
      res.status(200).json({ success: true, message: 'Cart updated successfully' });
    } else {
      res.status(404).json({ success: false, error: 'Cart item not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error, message: 'An error occurred' });
  }
};

export const removeProductFromCart = async (req, res) => {
    try {
      const { userId, productId } = req.params; // Get userId and productId from URL parameters
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
      }
  
      // Use filter to remove the cart item where the product ID matches the specified productId
      user.cart = User.cart.filter((item) => !item.product.equals(productId));
  
      await user.save();
  
      res.status(200).json({ success: true, message: 'Product removed from the cart' });
    } catch (error) {
      res.status(500).json({ success: false, error, message: 'An error occurred' });
    }
  };
  
