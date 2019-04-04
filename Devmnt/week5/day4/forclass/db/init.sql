drop table if exists students;
drop table if exists campus_data;

create table campus_data (
    campus_id serial primary key,
    campus text not null,
    program varchar(64),
    campus_phone text not null
);

insert into campus_data(campus, program, campus_phone)
values ('phoenix', 'web', '867-5309'), ('provo', 'web', '666-6666'), ('dallas', 'ios', '555-5555');

create table students (
    student_id serial primary key,
    cohort integer not null,
    name varchar(64) not null,
    campus integer references campus_data(campus_id)
);

insert into students (name, cohort, campus)
values ('Ayyyye', 1, 1),('rebecca', 3,1)
,('ryan', 7,1)
,('gary', 7,1)
,('gina', 4,1)
,('john', 3, 2)
,('sarah', 5, 3)
,('sam', 5, 3);