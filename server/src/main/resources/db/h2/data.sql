INSERT INTO subject (subject_name) VALUES ('국어');
INSERT INTO subject (subject_name) VALUES ('수학');
INSERT INTO subject (subject_name) VALUES ('영어');
INSERT INTO subject (subject_name) VALUES ('한국사');
INSERT INTO subject (subject_name) VALUES ('생활과윤리');
INSERT INTO subject (subject_name) VALUES ('지리');
INSERT INTO subject (subject_name) VALUES ('세계사');
INSERT INTO subject (subject_name) VALUES ('물리');
INSERT INTO subject (subject_name) VALUES ('화학');
INSERT INTO subject (subject_name) VALUES ('생명과학');
INSERT INTO subject (subject_name) VALUES ('지구과학');
INSERT INTO subject (subject_name) VALUES ('제2외국어');

INSERT INTO region (region_name) VALUES ('강남구');
INSERT INTO region (region_name) VALUES ('강동구');
INSERT INTO region (region_name) VALUES ('강북구');
INSERT INTO region (region_name) VALUES ('강서구');
INSERT INTO region (region_name) VALUES ('관악구');
INSERT INTO region (region_name) VALUES ('광진구');
INSERT INTO region (region_name) VALUES ('구로구');
INSERT INTO region (region_name) VALUES ('금천구');
INSERT INTO region (region_name) VALUES ('노원구');
INSERT INTO region (region_name) VALUES ('도봉구');
INSERT INTO region (region_name) VALUES ('동대문구');
INSERT INTO region (region_name) VALUES ('동작구');
INSERT INTO region (region_name) VALUES ('마포구');
INSERT INTO region (region_name) VALUES ('서대문구');
INSERT INTO region (region_name) VALUES ('서초구');
INSERT INTO region (region_name) VALUES ('성동구');
INSERT INTO region (region_name) VALUES ('성북구');
INSERT INTO region (region_name) VALUES ('송파구');
INSERT INTO region (region_name) VALUES ('양천구');
INSERT INTO region (region_name) VALUES ('영등포구');
INSERT INTO region (region_name) VALUES ('용산구');
INSERT INTO region (region_name) VALUES ('은평구');
INSERT INTO region (region_name) VALUES ('종로구');
INSERT INTO region (region_name) VALUES ('중구');
INSERT INTO region (region_name) VALUES ('중랑구');

INSERT INTO teacher (created_at, address, career, email, introduction, last_login_at, last_modified_at, lecture_fee, name, is_oauth, off_line, on_line, option, password, phone, profile_img, status) VALUES ('2023-09-15 17:29:11.481138',	null,	null,	'teacher@gmail.com',	null,	null,	'2023-09-15 17:29:11.45939',	null,	'홍길동',	FALSE,	FALSE,	FALSE,	null,	'{bcrypt}$2a$10$JUfnVYxPWCgPhU/wHiP2Seuq15FDlPyLs9H.Rhw27E975Xbju8BQm',	null,	null,	0);
INSERT INTO teacher (created_at, address, career, email, introduction, last_login_at, last_modified_at, lecture_fee, name, is_oauth, off_line, on_line, option, password, phone, profile_img, status) VALUES ('2023-09-15 17:39:15.426081',	null,	null,	'teacher2@gmail.com',	null,	null,	'2023-09-15 17:39:15.40705',	null,	'임꺽정',	FALSE,	FALSE,	FALSE,	null,	'{bcrypt}$2a$10$NbG3mr4Qu8nTV5QOx55ycumkRJeGi0iagK9IqZToTPXE0F.ryCisG',	null,	null,	0);
INSERT INTO teacher_roles (teacher_id, roles) VALUES(1L, 'TEACHER');
INSERT INTO teacher_roles (teacher_id, roles) VALUES(2L, 'TEACHER');
-- INSERT INTO student(created_at, email, introduction, is_oauth, last_login_at, name, option, password, phone, profile_img, status) VALUES('2023-09-18 09:46:47.795288', 'student@gmail.com', null, false, null, '임꺽정', null, '{bcrypt}$2a$10$lkH/OXs0oDbbvKKfH51Nceh/1q.VrLDY1KykeKXODWAg9AkntZAEa', null, null, 'ACTIVE' );
-- INSERT INTO student_roles (student_id, roles) VALUES(1L, 'STUDENT');