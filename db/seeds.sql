-- Insert sample users
INSERT INTO `Users` (`username`, `email`, `password`) VALUES
  ('user1', 'user1@example.com', 'hashed_password_1'),
  ('user2', 'user2@example.com', 'hashed_password_2');

-- Insert sample posts
INSERT INTO `Posts` (`title`, `content`, `UserId`) VALUES
  ('Post 1', 'Content of Post 1', 1),
  ('Post 2', 'Content of Post 2', 1),
  ('Post 3', 'Content of Post 3', 2);

-- Insert sample comments
INSERT INTO `Comments` (`text`, `PostId`, `UserId`) VALUES
  ('Comment 1 for Post 1', 1, 2),
  ('Comment 2 for Post 1', 1, 1),
  ('Comment 1 for Post 2', 2, 1);
