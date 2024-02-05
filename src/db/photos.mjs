export const statement = `
  INSERT INTO photos
    (album_id, user_id, url, title)
  VALUES
    (?, ?, ?, ?)
`;

export const entries = [
  [1, 1, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/118.jpg", "Some Photo"],
  [1, 1, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_1126.jpg", "Some Photo"],
  [1, 1, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_1183.jpg", "Some Photo"],
  [1, 1, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_20181219_145820.jpg", "Some Photo"],
  [1, 1, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_20181219_202758.jpg", "Some Photo"],
  [2, 1, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/118.jpg", "Some Photo"],
  [2, 1, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_1126.jpg", "Some Photo"],
  [2, 1, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_1183.jpg", "Some Photo"],
  [2, 1, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_20181219_145820.jpg", "Some Photo"],
  [2, 1, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_20181219_202758.jpg", "Some Photo"],
  [3, 2, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/118.jpg", "Some Photo"],
  [3, 2, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_1126.jpg", "Some Photo"],
  [3, 2, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_1183.jpg", "Some Photo"],
  [3, 2, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_20181219_145820.jpg", "Some Photo"],
  [3, 2, "https://francisbourgouin.nyc3.digitaloceanspaces.com/photos/IMG_20181219_202758.jpg", "Some Photo"],
]