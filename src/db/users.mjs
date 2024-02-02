export const statement = `
  INSERT INTO users
    (first_name, last_name, email)
  VALUES
    (?, ?, ?)
`;

export const entries = [
  ["Steve", "Willsmore", "scwillsmore@gmail.com"],
  ["fake", "user", "fake@email.com"],
]