use test;
-- Create table for employee
create table Employee(
Employee_Id int,
First_Name text,
Last_Name text,
Salary int,
Joining_Date datetime,
Department text
);

select * from Employee;

-- Create Table for incentive
create table Incentive(
Employee_ref_id int,
Incentive_date text,
Incentive_Amount int
);

select * from Incentive;

-- insert values for employee
insert into Employee values
(1,"john","abraham","100000","13-01-01 12:00:00","banking"),
(2,"michael","clarke","800000","13-01-01 12:00:00","insurance"),
(3,"roy","thomas","700000","13-02-01 12:00:00","banking"),
(4,"tom","jose","600000","13-02-03 12:00:00","insurance"),
(5,"jerry","pinto","6500000","13-02-01 12:00:00","insurance"),
(6,"philip","mathew","7500000","13-02-01 12:00:00","service"),
(7,"testname1","123","6500000","13-01-01 12:00:00","service"),
(8,"testname2","lname%","600000","13-02-01 12:00:00","insurance");

-- insert value for incentive
insert into Incentive values
(1,"01-feb-13","5000"),
(2,"01-feb-13","3000"),
(3,"01-feb-13","4000"),
(1,"01-jan-13","4500"),
(2,"01-jan-13","1500");


-- a). Get First_Name from employee table using Tom name “Employee Name”.
select * from employee
where First_Name="tom";


-- b). Get FIRST_NAME, Joining Date, and Salary from employee table.
  select First_Name, Salary, Joining_Date from Employee;


-- c). Get all employee details from the employee table order by First_Name Ascending and Salary descending?
select *
from Employee
order by First_Name asc, Salary desc;


--  d). Get employee details from employee table whose first name contains ‘J’.
select * from employee
where First_Name like "J%";

-- e). Get department wise maximum salary from employee table order by salary ascending
select Department,max(Salary) as max_Salary from Employee
group by Department order by max_Salary; 

-- f). Select first_name, incentive amount from employee and incentives table for those employees who have incentives and 
-- incentive amount greater than 3000
select E.First_Name , I.Incentive_Amount from Employee E 
inner join Incentive I on E.Employee_Id = I.Employee_ref_id 
where I.Incentive_Amount > 3000;


-- g). Create After Insert trigger on Employee table which insert records in view table
create view Employee_view as
select Employee_Id, First_Name, Last_Name, Salary, Joining_Date, Department
from Employee;

create trigger copy_data
after insert on Employee
for each row
insert into Employee_view values (new.Employee_Id, new.First_Name, new.Last_Name, new.Salary, new.Joining_Date, new.Department);

select * from Employee_view;

