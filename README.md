# ecommerce_apirest
Simply API REST with NodeJS, Express and MongoDB

Database collections:
-categories
-products
-users
-sales

You can use it with client side rendering.
Field "code" in products must be unique.
Each product has a category id

User must be logged in to update products collection. It need a JSON Web Token (JWT) in the header of the request.
There are 2 test views, in server side rendering:
- /show : list of 5 products
- /show/sales: list of all sales
