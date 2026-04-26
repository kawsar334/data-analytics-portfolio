

---------------- 1. Retrieve the total number of orders placed.
SELECT count(order_id) as totat_num_of_orders from orders
-----------------2. Calculate the total revenue generated from pizza sales.
SELECT sum(order_details.quantity * pizza.price) as totalSale from order_details join pizza 
on pizza.pizza_id=order_details.pizza_id --==== rounded select  round(sum(order_details.quantity * pizza.price) )as total from order_details join pizza on pizza.pizza_id= order_details.pizza_id =====--

-----------------3.Identify the HIGHEST PRICE PIZZA.
select   pizza_types.name , pizza.price 
from pizza_types 
JOIN pizza 
ON pizza_types.pizza_type_id = pizza.pizza_type_id
ORDER BY pizza.price DESC LIMIT 5
--====4. IDENTIFY THE MOST COMMON PIZZA SIZE ORDERED.
select pizza.size, count(order_details.order_details_id) 
from pizza 
join order_details 
on pizza.pizza_id = order_details.pizza_id
GROUP BY pizza.size ;
-----------------5.List the top 5 most ordered pizza types along with their quantities.

SELECT pizza_types.name, SUM(order_details.quantity) AS qty
FROM pizza_types
JOIN pizza 
ON pizza_types.pizza_type_id = pizza.pizza_type_id
JOIN order_details 
ON order_details.pizza_id = pizza.pizza_id
GROUP BY pizza_types.name
ORDER BY qty DESC
LIMIT 5;


-----------------Intermediate:
-----------------.6..Join the necessary tables to find the total quantity of each pizza category ordered.
SELECT pizza_types.category, 
       SUM(order_details.quantity) AS quantity
FROM pizza_types 
JOIN pizza 
ON pizza_types.pizza_type_id = pizza.pizza_type_id 
JOIN order_details 
ON order_details.pizza_id = pizza.pizza_id  
GROUP BY pizza_types.category 
ORDER BY quantity DESC;
-----------------7.Determine the distribution of orders by hour of the day.
SELECT EXTRACT(HOUR FROM time::TIME) AS order_hour,
       COUNT(order_id) AS total_orders
FROM orders
GROUP BY EXTRACT(HOUR FROM time::TIME)
ORDER BY order_hour;
-----------------8.Join relevant tables to find the category-wise distribution of pizzas.
select category , count(name)  from pizza_types 
group by(category)

-----------------9.Group the orders by date and calculate the average number of pizzas ordered per day.
-----------------10.Determine the top 3 most ordered pizza types based on revenue.

-----------------Advanced:
-----------------11.Calculate the percentage contribution of each pizza type to total revenue.
-----------------12.Analyze the cumulative revenue generated over time.
-----------------13.Determine the top 3 most ordered pizza types based on revenue for each pizza category.