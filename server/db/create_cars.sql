create table if not exists cars(
  id serial primary key,
  model text,
  package text,
  detail_1 text,
  detail_2 text,
  detail_3 text,
  detail_4 text,
  msrp text,
  mpg text,
  horsepower text,
  seating integer,
  Total_Driving_Range_Miles text,
  Total_Electric_Driving_Range_Miles text
)
