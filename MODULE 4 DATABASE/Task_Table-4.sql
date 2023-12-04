use test;

create table salesperson(
SNo int primary key,
SNAME varchar(15) not null,
CITY text,
COMM decimal(4,2)
);

select * from salesperson;

insert into salesperson values
(1001,'Peel','London',0.12),
(1002,'Serres','San Jose',0.13),
(1004,'Motika','London',0.11),
(1007,'Rafkin','Barcelona',0.15),
(1003,'Axelord','New York',0.1);


create table Customer(
CNM int primary key,
CName varchar(10) not null,
CITY varchar(10),
RATING int,
SNo int,
foreign key (SNo) references salesperson(SNo)
);

select* from Customer;

insert into Customer values
(201,"hoffman","london",100,1001),
(202,"giovanne","roe",200,1003),
(203,"liu","san jose",300,1002),
(204,"grass","barcelona",100,1002),
(206,"clemens","london",300,1007),
(207,"pereira","roe",100,1004);


-- b) Names and cities of all salespeople in London with commission above 0.12
select SName, CITY
from salesperson
where CITY = 'london' AND COMM > 0.12;


-- c) All salespeople either in Barcelona or in London
select *
from salesperson
where CITY in ('barcelona', 'london');


-- d) All salespeople with commission between 0.10 and 0.12. (Boundary values should be excluded).
select *
from salesperson
where COMM > 0.10 and COMM < 0.12;


-- e) All customers excluding those with rating <= 100 unless they are located in Roe
select *
from customer
where (RATING>100 or CITY='roe');

