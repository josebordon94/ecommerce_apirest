# ecommerce_apirest
Simply API REST with NodeJS, Express and MongoDB

Database collections:
Las colecciones se llaman:
-categories
-products
-users
-sales

Field "code" in products must be unique.
Each product has a category id

User must be logged in to update products collection.
There are 2 test views:
- /show : list of 5 products
- /show/sales: list of all sales
