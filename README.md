# Online-Shop_Full-Stack
Full Stack E-Commerce Application 

## Stack Used 
- HTML5, CSS, Javascript for FrontEnd. 
- NodeJs, Express for Backend.
- MongoDB NoSQL database. 

## Design Pattern Used
- Model View Controller (MVC). 

## Initialization 
- Run npm install to install all the dependencies.
- Run npm start to start the application on localhost: 3000 

## Overview 

This project builds an online shop named as "Web Developer Essentials" (WDE). The shop showcases several computing devices such as keyboards, monitors etc that are used in a software developing environment.

The online shop is divided into two aspects. One is the customer facing side, where users can browse through different products and add products to cart and make purchases of the products. In order to buy products, the customer must create an account on the website. To facilitate this, a signup functioning for the user has been provided. 

The other aspect of the shop is the admin side. Here the administrator of the shop can manage products (add, edit or remove products) manage orders( set status of the orders). 


Sessions and cookies have been used and implemented to improve user experience. Sessions and cookies store data about customers cart. These sessions ensure users can navigate, browse and add products to cart without logging in. However, in order to purchase the products the users must login. 

Authentication and Authorization has been implemented through sessions and cookies to restrict access to different areas of the web application for different users. 

Front-end and back-end validation has been added. CSRF protection in the form of CSRF tokens has been implemented in components where user input is expected e.g. Form submissions (login form, signup form etc.)

AJAX requests from front end have been used in certain places to implement partial changing of the html views. 


## Important Components 
- Responsive design. 
- Session and cookie usage for authentication and authorization. 
- Front-end and back-end validation. 
- Custom Error handing for different HTTP errors (500, 404, 401, etc.) 
- AJAX request from front-end. 


