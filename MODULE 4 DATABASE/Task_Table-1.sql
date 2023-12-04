use test;
create table student(
roll_no int ,
name varchar(10));
alter table student
modify roll_no int primary key;
alter table student
add branch text;

select * from student;

create table Exams(
roll_no int,
s_code text,
mark int,
p_code text,
foreign key(roll_no)  references student(roll_no)
);

select * from Exams;

insert into student (roll_no,name,branch) values
(1,'Jay','Computer-Science'),
(2,'Suhani','Electronic and Com'),
(3,'kriti','Electronic and Com');

insert into Exams (roll_no, s_code, mark, p_code) values
(1,"CS11",50,"CS"),
(1,"CS12",60,"CS"),
(2,"EC101",66,"EC"),
(2,"EC102",70,"EC"),
(3,"EC101",45,"EC"),
(3,"EC102",50,"EC");