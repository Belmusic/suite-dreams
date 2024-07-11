export async function load() {
  const apiKey = 'import.meta.env.VITE_GOOGLE_API_KEY';
  const location = 'Amsterdam'; // Example location
  const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+Amsterdam&key=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  if (data.status === 'OK') {
    return data.results.map((result) => ({
      name: result.name,
      city: result.formatted_address.split(',')[1].trim(),
      rating: result.rating || 0,
      price: result.price_level,
      imageUrl: result.photos,
    }));
  } else {
    throw new Error('Failed to fetch hotel data');
  }
}
