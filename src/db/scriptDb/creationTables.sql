-- Crear la tabla Usuario
CREATE TABLE Users (
    user_Id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    username VARCHAR(255) NOT NULL,
	mail varchar(255),
	role varchar(40),
    password VARCHAR(255) NOT NULL
);

-- Crear la tabla Tableros
CREATE TABLE Boards (
    board_Id SERIAL PRIMARY KEY,
	board_name VARCHAR(250) NOT NULL,
	board_color VARCHAR(250) NOT NULL,
    user_Id INT REFERENCES Users(user_Id)
);

ALTER TABLE BOARDS ADD COLUMN createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

CREATE TABLE LISTS (
	list_Id SERIAL PRIMARY KEY,
    list_name VARCHAR(40) NOT NULL,
	board_id  INT REFERENCES Boards(board_Id),    
	orderList SERIAL
)

-- Crear la tabla Cards
CREATE TABLE Cards (
    card_Id SERIAL PRIMARY KEY,
    card_title VARCHAR(255),
    list_Id INT REFERENCES LISTS(list_Id)
);

DROP TABLE Users
DROP TABLE Boards
DROP TABLE LISTS
DROP TABLE Cards

Select* from Boards where user_id = 7

-- Datos de prueba para la tabla Users
INSERT INTO Users (name, username, password,rol) VALUES
('John Doe', 'john_doe', 'password123','admin'),
('Jane Smith', 'jane_smith', 'password456','user');

select * from users

-- Datos de prueba para la tabla Boards
INSERT INTO Boards (board_name, board_color, user_Id) VALUES
('Proyecto A', 'Azul', 7),
('Tareas Pendientes', 'Verde', 7);

select* from Boards

-- Datos de prueba para la tabla LISTS
INSERT INTO LISTS (list_name,board_id) VALUES
('Completed', 3);

Select * from lists
Select * from lists where list_Id = 1

-- Datos de prueba para la tabla Cards
INSERT INTO Cards (card_title, list_Id) VALUES
('Tarea 1', 1),
('Tarea 2', 1),
('Tarea 3', 2),
('Tarea 4', 3),
('Tarea 5', 4),
('Tarea 6', 5);

select* from cards where list_id = 1

Select* From users where user_id = 2


Select* from Boards where user_id = 6

update users set role = 'admin'
where user_id = 6

UPDATE lists
    SET list_name = 'daskjdbnk',
        orderList = 1
    WHERE list_Id = 14
    RETURNING *;

