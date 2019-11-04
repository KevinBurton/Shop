ng server# Shop
Angular shopping cart application

There are two main folders to this application. To run the application locally it will take two terminal windows to run. One terminal window should be in the 'backend' folder. The other terminal window should be in the 'client' folder. To start the backend go to the 'backend' terminal window and type 'node server.js'. This will start the backend process listening for requests. 

```
node server.js
Server is running on port: 5000
MongoDB database connection established successfully.
```

To start the client, go to the 'client' terminal and type 'ng serve'. 

```
ng serve
10% building 3/3 modules 0 activeℹ ｢wds｣: Project is running at http://localhost:4200/webpack-dev-server/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: 404s will fallback to //index.html

chunk {main} main.js, main.js.map (main) 116 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 264 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.15 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 1.12 MB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 5.07 MB [initial] [rendered]
Date: 2019-10-30T07:20:54.118Z - Hash: da95e24a107129a3a45e - Time: 8083ms
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
ℹ ｢wdm｣: Compiled successfully.
```

Now open up a browser to http://localhost:4200 to start the application.

## Running the application

The first thing one needs to do is login. Right now any username/password combination will work. Using the "special" username of "admin" gives one the ability to list the users in the database.

To start an order a "cart" will need to be filled up. Once logged in all the products in the system can be listed by selecting the "Products" item on the navigation bar at the top. All the products will be displayed. Selecting the "Add" button on the far right of the item row will place the item in the "cart".

Every time an item is added to the cart there is a numeric indicator on the upper right had corner that shows the number of items in the cart. When displaying the items in the "cart", various pieces of information about the item are displayed. At the bottom of the table is a display of the total cost of the items in the cart along with the total taxes for the items in the cart. At the bottom of the display is an "Order" button that will place an "order" for all the items in the cart.

Once the contents of the cart are ordered the cart is cleared. There is also a display of all the orders known to the system including the most recent one placed. 
