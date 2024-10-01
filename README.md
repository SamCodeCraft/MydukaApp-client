# MyDuka API

MyDuka API is an advanced inventory management system designed to simplify stock-taking, transaction tracking, and reporting for retail businesses. This RESTful API provides robust features for managing inventory, generating detailed sales reports, and optimizing store operations. Built with Flask on the backend, MyDuka API is highly scalable, secure, and designed to integrate easily with various frontend applications, providing a seamless user experience.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [API Documentation](#api-documentation)
  - [Authentication](#authentication)
  - [Products](#products)
  - [Transactions](#transactions)
  - [Reporting](#reporting)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The MyDuka API aims to revolutionize inventory and sales management for small to medium-sized businesses. With this API, store managers can keep track of stock levels, visualize sales data, generate custom reports, and automate daily processes, making store management both efficient and scalable.

This project was built with the focus of providing a backend service that can be integrated with different client-facing interfaces, whether web or mobile applications.

## Features

- **Inventory Management:** Manage product listings, including stock levels, pricing, and categorization.
- **Sales Tracking:** Record sales transactions and generate detailed sales reports.
- **Real-Time Stock Updates:** Automatically update inventory levels as transactions occur.
- **Comprehensive Reporting:** Generate daily, weekly, monthly, and yearly sales and inventory reports.
- **User Authentication:** Secure user authentication for store managers and clerks with role-based access control.
- **Multi-store Support:** Manage inventory across multiple store locations.
- **Customizable Reports:** Generate CSV or JSON format reports for accounting or analytics purposes.
- **RESTful Design:** Fully RESTful API that allows for easy integration with any frontend platform.

## Technologies

**Backend:**

- **Flask:** Python web framework used to build the RESTful API.
- **Flask-RESTful:** Extension for creating RESTful routes.
- **PostgreSQL:** Relational database for managing product and transaction data.
- **SQLAlchemy:** ORM for database interaction.
- **Flask-JWT-Extended:** For secure authentication using JSON Web Tokens (JWT).
- **Marshmallow:** For data serialization and validation.

**Tools & Libraries:**

- **Docker:** Containerization for ease of deployment.
- **Swagger:** API documentation and testing.
- **PyTest:** Unit testing for API endpoints.
- **GitHub Actions:** Continuous Integration and testing pipelines.

## API Documentation

The MyDuka API provides various endpoints to manage products, sales, and reporting.  For more detailed API documentation, please visit the Swagger UI available at `/api/docs`.

### Authentication

| Method | Endpoint        | Description                     
| :----- | :-------------- | :------------------------------ 
| POST   | /auth/login     | Login to the system using JWT  
| POST   | /auth/register  | Register a new user            

### Products

| Method | Endpoint        | Description                               
| :----- | :-------------- | :---------------------------------------- 
| GET    | /products       | Retrieve a list of all products           
| POST   | /products       | Add a new product                        
| GET    | /products/<id>  | Get product details by ID                 
| PUT    | /products/<id>  | Update product details                    
| DELETE | /products/<id>  | Delete a product                         

### Transactions

| Method | Endpoint           | Description                                     
| :----- | :---------------- | :---------------------------------------------- 
| POST   | /transactions      | Record a new sales transaction                 
| GET    | /transactions      | Get all sales transactions                     
| GET    | /transactions/<id> | Get details of a specific transaction          

### Reporting

| Method | Endpoint            | Description                         
| :----- | :------------------ | :---------------------------------- 
| GET    | /reports/daily      | Get daily sales report              
| GET    | /reports/monthly    | Get monthly sales report             
| GET    | /reports/annual     | Get annual sales report              

## Installation

### Prerequisites

Before you begin, ensure that you have the following installed:

- Python 3.8+
- PostgreSQL
- Docker (Optional for containerized environments)


## Contributing

We welcome contributions to improve MyDuka API! Here's how you can get involved:

1. **Fork the repository:** Start by creating your own copy of the repository.
2. **Create a new branch:** Create a new branch for your feature or bug fix. (e.g., `git checkout -b feature-my-new-feature` or `git checkout -b bugfix-issue-123`)
3. **Make your changes:** Implement your improvements, adding tests where appropriate.
4. **Commit your changes:** Commit your changes with clear and descriptive commit messages.
5. **Push to your branch:** Push your changes to your forked repository.
6. **Open a pull request:** Submit a pull request to the main repository, explaining your changes in detail.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Contact

Have questions, need support, or want to provide feedback? Feel free to reach out:

- **Email:** siyajalis@gmail.com
- **LinkedIn:** [Samuel Siyajari](https://linkedin.com/in/samuel-siyajari-970365167) 
- **GitHub:** [Your GitHub Profile](https://github.com/SamCodeCraft/MydukaApp-client) 




