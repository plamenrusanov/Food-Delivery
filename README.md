# Food Delivery Website

This is a food delivery website where users can browse and order food from a list of available products. The website also includes a login and registration system, allowing users to create an account, save their delivery information, and view their order history.

## Features


### For non-logged in users

The non-logged in users can do the following:

#### List of available products

On the application's homepage, there is a list of products that users can browse.

#### Add products to cart

There is a 'Add To Cart' button on each product. When a user clicks on, a dialog box opens displaying the product and its price, along with an option to select the desired quantity for purchase. At the bottom of the dialog box, there are two buttons: 'Close' - which closes the dialog box without adding the product to the cart, and 'Add' - which adds the product to the cart and then closes the dialog box.

#### Shopping cart

It contains a list of the added products and their quantity, as well as the total price of all the products in the cart.

#### Login

Non-logged-in users have access to the login form, where they need to enter their email and password for successful login to the application.

#### Register

Non-logged in users have access to the registration form where they need to provide their name, email, and password for successful registration.



### For logged in users

Logged-in users can do everything that non-logged-in users can do, as well as the following functionalities:

#### Delivery address form

It can be accessed through the 'Delivery Details' button in the shopping cart. Non-logged-in users will be redirected to the login form to access the application. After successful login, they will be redirected back to the delivery details form.

#### Send order

After filling in the delivery form, the 'Send Order' button is pressed which sends the order. The user is redirected to the page with their orders.

#### Order history page

On the orders page, on the left, there is a list of the user's orders in the form of buttons with the date and time on them. Clicking on one of them will load the products of that order on the right.


### Login as administrator

The administrator user can do the following:

#### Add new products

The administrator can add new products to the product list. They need to fill in all the required fields for the product, such as name, description, price, and image. Upon successful addition of the product, it will appear in the product list on the website's home page.

#### Edit existing products

The administrator can edit existing products in the product list. They can change the name, description, price, and image of the product. Upon successful editing of the product, the changes will be reflected in the product list on the website's home page.

#### Delete existing products

The administrator can delete existing products from the product list. Upon successful deletion of the product, it will be removed from the product list on the website's home page.

## Technologies Used

#### React
#### HTML/CSS

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/plamenrusanov/food-delivery.git`
2. Install the dependencies: `npm install`
3. Start the backend server: `node server/server.js`
4. Start the frontend server: `npm start`
5. Open the website in your browser: `http://localhost:3000`

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue. If you'd like to contribute code, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License. The backend server is owned by "SoftUni". Here is a link to their <a href="https://github.com/softuni-practice-server/softuni-practice-server/blob/master/LICENSE" target="_blank">LICENSE</a>.
