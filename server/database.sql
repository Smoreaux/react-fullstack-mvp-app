/*This file is just to hold your sql for what you copy pasted into the psql terminal! Nothing more*/
CREATE DATABASE perngoals;

CREATE TABLE userprofile(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    goals TEXT
);