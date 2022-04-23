# Online-Shop_Full-Stack
Full Stack E-Commerce Application 

## Demo Video Link 

https://youtu.be/XsZ6PrRnoCc

## Stack Used 
- HTML5, CSS, Javascript for FrontEnd. 
- NodeJs, Express for Backend.
- MongoDB NoSQL database.
- Stripe payment module.  

## Design Pattern Used
- Model View Controller (MVC). 

## Initialization 
- Run _npm install_ to install all the dependencies.
- Run _npm start_ to start the application on localhost: 3000 

## Database setup 
MongoDB database must be setup for running this application 
- Database name: online-shop 
- Collections: 
  1. orders (for storing customer orders)
  2. products (for storing different products) 
  3. sessions (for stroing session data)
  4. users (for storing customer information)  

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
- Stripe payment solution has been integrated to allow payment function to customers buying products.


# Implementation Images 

## Customer side


![Login-page](https://user-images.githubusercontent.com/72380768/163576216-276920a8-503b-48bc-9a06-0d5a73a276a5.png)

![Main-page](https://user-images.githubusercontent.com/72380768/163575269-9d66aded-1bef-4dd0-88e2-2fd0920c1beb.png)

![product-detail](https://user-images.githubusercontent.com/72380768/163575285-8d7381e4-baf0-491b-ad6d-9b3b8b39125c.png)

![signup](https://user-images.githubusercontent.com/72380768/163575286-15877e0a-0ac9-47af-9bbc-8222fe7958d1.png)

![Cart-page](https://user-images.githubusercontent.com/72380768/163575288-9090ee2f-a30b-4100-ae2c-ea404b65cffd.png)


## Admin side 

![manage-products](https://user-images.githubusercontent.com/72380768/163575620-9e358e36-931d-4174-b966-b67b5afef1ff.png)

![Add-new-product](https://user-images.githubusercontent.com/72380768/163575607-80bfcf73-d214-4105-a6b3-fc0a37bdc82a.png)

![Manage-orders](https://user-images.githubusercontent.com/72380768/163575615-ca7d1e66-f1dd-4ac5-be3e-65284a33d46e.png)







