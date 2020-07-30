CREATE TABLE section(
	section_id SERIAL NOT NULL,
	section_title VARCHAR(50),
	PRIMARY KEY(section_id)
);

CREATE TABLE question(
	question_id SERIAL NOT NULL,
	section_id INTEGER REFERENCES section(section_id),
	PRIMARY KEY(question_id)
);

CREATE TABLE answer(
	answer_id SERIAL NOT NULL,
	question_id INTEGER REFERENCES question(question_id),
	PRIMARY KEY(answer_id)
);

INSERT INTO quiz (quiz_title)
VALUES ('quiz 1');

INSERT INTO quiz (quiz_title)
VALUES ('quiz 2');

INSERT INTO quiz (quiz_title)
VALUES ('quiz 3');

INSERT INTO section (section_title, quiz_id)
VALUES ('part 1', 1);

INSERT INTO section (section_title, quiz_id)
VALUES ('part 2', 1);

INSERT INTO section (section_title, quiz_id)
VALUES ('part 3', 1);

INSERT INTO question (section_id, question)
VALUES (1, 'What is the capital of Spain?');

INSERT INTO question (section_id, question)
VALUES (1, 'What is the capital of England?');

INSERT INTO question (section_id, question)
VALUES (1, 'Who is the fattest little cat in the world?');

INSERT INTO answer (question_id, answer)
VALUES (1, 'Madrid');

INSERT INTO answer (question_id, answer)
VALUES (2, 'London');

INSERT INTO answer (question_id, answer)
VALUES (3, 'Fluffy');
