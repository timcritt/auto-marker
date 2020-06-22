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

