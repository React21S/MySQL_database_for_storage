drop database if exists mopeddb;
create database mopeddb;
use mopeddb;

create table moped(
    mopedId integer not null primary key,
    name varchar(12) not null,
    modelYear integer not null,
    rating varchar(5) not null,
    topspeed integer not null
);


insert into moped values(5, "Grampa 89", 2012, "*", 40);
insert into moped values(1, "MotoX 2000", 2017, "****", 10);
insert into moped values(3, "Muumy 10", 2011, "*****", 5);
insert into moped values(7, "Xross 3", 1990, "*", 25);

drop user if exists 'noah'@'localhost';
create user 'noah'@'localhost' identified by 'ROrVNuKq';
grant all privileges on mopeddb.* to 'noah'@'localhost';
