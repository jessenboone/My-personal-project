create table if not exists images(
  id serial primary key,
  car_id integer references cars(id),
  color text,
  image_url text
)
