# Notes
SQl Allows combination of statements

[client] http(= JSON =) [API] proprietary protocol (= SQL =) [DBMS Server]
A **Query Builder** translates between the API language (JS for Node.js) and SQL
[API] == Knex == Database Driver == [RDMS]

## Menu

- Introduction  to RDBMS
=== SQL ===
Structure Query Languages
** Each DBMS has the options to add additional features which could result into some differences. **

=== RDBMS ===
Relational DataBase Management System.

Relational
** A Relation is similar to a spreadsheet. **
Contains rolls and column.
** A relation can also be referred as a table **

DataBase
A database can be defied as a collection of data that is organized in a way that makes it easy to retrieve the and manipulate it later.
The Data on a relational database is stored on a table.

- SOL
- Knex ++
- CRUD operations persisting data

Popular DB Management systems.
- Oracle
- MySQL
- PostgreSQL
- MS SQL Server
- SQLite3 (file-base RDBMS)
- MongoDB (NO==[Not Only] SQL database)
- MariaDB

SQL Statement:
```sql
-- List of all our customers 
SELECT * from customer;
SELECT FirstName, LastName from customer;

-- List of all the artists
SELECT * from artist;

-- List of all the artist names organized alphabetically
SELECT Name from artist order by Name; -- Or orderby Name desc;

-- List the first 10 artists organized by name ascending by name;
SELECT * from artist order by Name limit 10;

-- FILTERING ROWS
-- List all customers that live in
SELECT * from customer
where city = 'Prague'; --Always use single qoutes for strings and date

-- List of all invoices 
SELECT * from invoice;

-- List of all invoices greater or equal to '2009-03-01'
SELECT * from invoice where InvoiceDate >= '2009-03-01' order by InvoiceDate;

-- Show a list of invoices without billing state
SELECT * from invoice where billingState is null; -- or is not null

-- ADDING DATA
-- List of all Genra from 

-- Add a new genra for Merengue
INSERT into Genre (Name) values ('Salsa');

SELECT * from artist order by name;
INSERT into Artist (Name) values ('Roy');

-- WildCard Search
SELECT * from Artist where Name like 'Lui%' order by Name;

-- Update Data
select * from Artist
update Artist set Name = 'Roie'
where ArtistId = 276;

-- remove data
select * from Artist

-- delete from Artist
where ArtistId = 278;

```