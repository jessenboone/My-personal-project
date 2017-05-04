select * from images
join cars on images.car_id = cars.id
where cars.model = $1
