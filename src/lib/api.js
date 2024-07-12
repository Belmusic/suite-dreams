const API_KEY =
  'dc7dd2e8d864f3b529b646e86fa82809e7af14049a602ec553b04cdbc00e3199';
const BASE_URL = '/api/search.json';

/**
 * Fetch hotels information based on search parameters.
 * @param {*} searchParameters - Required parameters from API (based on documentation).
 * @returns {Promise<Array>} - Array of transformed hotel objects.
 */
export async function fetchHotels(searchParameters) {
  try {
    // Default values
    const {
      engine = 'google_hotels',
      query = 'Amsterdam',
      currency = 'EUR',
      check_in_date = '2024-08-01',
      check_out_date = '2024-08-03',
    } = searchParameters;

    // Search parameters for URL
    const params = new URLSearchParams({
      engine,
      q: query,
      currency,
      check_in_date,
      check_out_date,
      api_key: API_KEY,
    });

    // REST API call
    const response = await fetch(`${BASE_URL}?${params.toString()}`);
    if (!response.ok) {
      throw new Error('Failed to fetch hotels');
    }

    const data = await response.json();

    // Transform data
    const hotels = data.properties.map((hotel) => {
      let imageUrl = 'https://fakeimg.pl/785x500/?text=No image available';

      if (hotel.images && hotel.images.length > 0) {
        for (const image of hotel.images) {
          if (
            image.original_image.endsWith('.jpeg') ||
            image.original_image.endsWith('.jpg') ||
            image.original_image.endsWith('.png')
          ) {
            imageUrl = image.original_image;
            break;
          }
        }
      }

      return {
        imageUrl,
        city: searchParameters.query,
        name: hotel.name || '',
        description: hotel.description || '',
        rating: hotel.overall_rating || 0,
        reviews: hotel.reviews || 0,
        price:
          hotel.rate_per_night && hotel.rate_per_night.extracted_lowest
            ? hotel.rate_per_night.extracted_lowest
            : 0,
      };
    });

    return hotels;
  } catch (error) {
    console.error('Error fetching hotels:', error.message);
    return [];
  }
}
