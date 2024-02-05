export const statement = `
  INSERT INTO albums
    (user_id, title)
  VALUES
    (?, ?)
`;

export const entries = [
  [1, "Holiday 2023"],
  [1, "Pic Dump from Camera"],
  [2, "Summer Trip"],
]