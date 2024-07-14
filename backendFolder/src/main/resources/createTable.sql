CREATE TABLE events (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    project  VARCHAR(255) NOT NULL,
    author  VARCHAR(255) NOT NULL,
	hasNotification BOOLEAN
);

INSERT INTO events(name, date, description, project, author, hasNotification)
VALUES ('добавить тз', '03-07-2024', 'описание', 'Доработка смарт про', 'Иванов И.И', FALSE);

INSERT INTO events(name, date, description, project, author, hasNotification)
VALUES ('Встреча для обсуждения дел', '25-07-2024', 'описание', 'Доработка смарт про', 'Иванов И.И', TRUE);

INSERT INTO events(name, date, description, project, author, hasNotification)
VALUES ('Встреча для обсуждения дел 2', '25-07-2024', 'описание', 'Доработка смарт про', 'Иванов И.И', FALSE);