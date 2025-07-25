CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ) NOT NULL,
    email VARCHAR ( 255 ) NOT NULL,
    password VARCHAR ( 255 ) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    is_member BOOLEAN DEFAULT FALSE,

    UNIQUE(username, email)
);

CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id INT,
    title VARCHAR ( 255 ) NOT NULL,
    description TEXT NOT NULL,
    posting_date DATE NOT NULL DEFAULT CURRENT_DATE,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX IF NOT EXISTS "IDX_session_expire" ON "session" ("expire");