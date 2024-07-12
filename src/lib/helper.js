export function extractHotelData(data) {
  return data.hotels_results.map((hotel) => ({
    name: hotel.name,
    description: hotel.description,
    stars: hotel.rating.stars,
    reviews: hotel.rating.count,
    price: hotel.price.rate_per_night.lowest,
    image: hotel.images.original_image,
    city: hotel.city,
  }));
}
