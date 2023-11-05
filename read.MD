Initialize the Project:

Open your terminal and navigate to your project directory.
Run the following command to install all the required packages using npm:
npm install


Starting the Server:

Once the packages are installed, you can start your server using one of the following commands:

If your server file is named server.js, use this command:
node server.js
OR
npm run server


API Endpoints:

User Details (authController.js):

register: This endpoint is used to create a new user.
login: Used for user authentication and login.
updateProfile: Allows users to update their profile information.
forgotPassword: Used for password recovery.


Orders (authController.js):

getOrders: Retrieves a list of orders for a user.
getAllOrders: Retrieves all orders (possibly for an admin).
orderStatus: Updates the status of an order.
getOrderById: Retrieves a specific order by its ID.
placeOrder: Allows users to place an order.

Category Details (categoryController.js):

category: Retrieves a list of categories.
createCategory: Creates a new category.
deleteCategory: Deletes a category.
singleCategory: Retrieves details of a specific category.
updateCategory: Updates information of a category.

Product Details (productController.js):

createProduct: Creates a new product.
deleteProduct: Deletes a product.
getProduct: Retrieves a list of products.
getSingleProduct: Retrieves details of a specific product.
productCategory: Retrieves products of a specific category.
productCount: Retrieves the count of products.
productFilters: Retrieves products based on specific filters.
productList: Retrieves a list of products.
productPhoto: Retrieves product photos.
relatedProduct: Retrieves related products.
searchProduct: Searches for products.
updateProduct: Updates information of a product.

Cart (RcartController.js):

addProductToCart: Adds a product to the user's cart.
removeProductFromCart: Removes a product from the user's cart.
updateCartQuantity: Updates the quantity of products in the user's cart.
viewUserCart: Retrieves the user's cart contents.
