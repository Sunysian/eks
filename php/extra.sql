mysql -u root

show databases;
create database mydb;
use mydb;
show tables;
create table users (
    username varchar(40),
    password varchar(40)
);

desc users;