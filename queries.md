# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
  SELECT p.productName, c.categoryName
  FROM products as p
  JOIN categories as c
  ON p.categoryId = c.categoryId;

  [Shows 77?]

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
  SELECT o.orderId, s.ShipperName, o.orderDate
  FROM Orders as o
  JOIN Shippers as s
  ON o.shipperId = s.shipperId
  WHERE o.orderDate < '1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
  SELECT p.productName, o.quantity
  FROM OrderDetails as o
  JOIN Products as p
  ON o.productId = p.productId
  WHERE o.orderId = '10251';

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
  SELECT o.orderId, c.CustomerName, e.LastName as EmployeeLastName
  FROM Orders as o
  JOIN Employees as e
  ON o.employeeId = e.employeeId
  JOIN Customers as c
  ON o.customerId = c.customerId;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
  SELECT c.categoryName, COUNT(c.categoryName) as Count
  FROM Categories as c
  JOIN Products as p
  ON p.categoryId = c.categoryId
  GROUP BY CategoryName;

  [Shows 8?]

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
  SELECT o.orderId, SUM(o.quantity) as ItemCount
  FROM OrderDetails as o
  GROUP BY OrderId;