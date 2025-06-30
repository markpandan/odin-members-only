CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ) NOT NULL,
    email VARCHAR ( 255 ) NOT NULL,
    password VARCHAR ( 255 ) NOT NULL,

    UNIQUE(username, email)
);

CREATE TABLE IF NOT EXISTS posts (
    user_id INT,
    title VARCHAR ( 255 ) NOT NULL,
    description VARCHAR ( 255 ) NOT NULL,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);