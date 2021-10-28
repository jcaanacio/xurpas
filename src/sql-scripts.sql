
/*
    Question 1 -
    Create an SQL query that shows the TOP 3 authors who sold the most books in
    total!
*/

SELECT author.author_name, SUM(book.sold_copies) AS total_sold_copies
FROM authors as author
JOIN books as book
ON book.book_name = author.book_name
GROUP BY author.author_name
ORDER BY sold_sum DESC
LIMIT 3;

/*
    Question 2 -
    Write an SQL query to find out how many users inserted more than 1000 but less
    than 2000 images in their presentations!
*/


SELECT COUNT(*) FROM
    (
      SELECT user_id, COUNT(event_date_time) AS img_pr_user FROM event_log ROUP BY user_id
    ) AS img_pr_user
WHERE img_pr_user < 2000 AND img_pr_user > 1000;


/*
    Question 2 -
    Print every department where the average salary per employee is lower than $500!
*/

SELECT department_name, AVG(salary.salary) AS avg_salaries
FROM employees as employee
JOIN salaries as salary
ON employee.employee_id = salary.employee_id
GROUP BY department_name
HAVING AVG(salary.salary) < 500;
