export const statement = `
  INSERT INTO albums
    (user_id, title, cover_id)
  VALUES
    (?, ?, ?)
`;

export const entries = [
  [1, "Holiday 2023", 1],
  [1, "Pic Dump from Camera", 2],
  [2, "Summer Trip", 1],
]