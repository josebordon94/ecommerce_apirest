# ecommerce_apirest
<h2>Simply API REST with NodeJS, Express and MongoDB</h2>
<h3>Description</h3>
<p>You can use this APIREST with client side rendering. It includes a full product and user CRUD. </p>
<h3>Installation</h3>
<p>Clone the repository and run <i>npm install</i> to get all the required modules.</p>
<p>Install MongoDB, and set a valid connection configuration in file bin/mongodb.js</p>
<h3>Data and functionality considerations</h3>
<p>Field "code" in products must be unique.</p>
<p>Each product has a category id.</p>
<b>Database collections:</b>
<ul>
  <li>categories</li>
  <li>products</li>
  <li>users</li>
  <li>sales</li>
</ul>

<p>User must be logged in to update products collection. It need a JSON Web Token (JWT) in the header of the request.</p>
<p>There are 2 test views, in server side rendering:</p>
<ul>
  <li>/show : list of 5 products</li>
  <li>/show/sales: list of all sales</li>
</ul>
