const API_KEY =
  'dc7dd2e8d864f3b529b646e86fa82809e7af14049a602ec553b04cdbc00e3199';
const BASE_URL = '/api/search.json';

/** 
Function obtaining the hotels information
@param {*} searchParameters
@returns
*/

export async function fetchHotels(searchParameters) {
  // Default values
  const {
    engine = 'google_hotels',
    query = 'Amsterdam',
    currency = 'EUR',
    check_in_date = '2024-08-01',
    check_out_date = '2024-08-03',
  } = searchParameters;

  // Search mandatory URL parameters
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
  const data = await response.json();
  return data.properties;
}
