console.log("server", import.meta.env.SERVER_URL);
export default async function fetchNews(endpoint, query) {
  try {
    const backendUrl = import.meta.env.VITE_SERVER_URL;
    const newsApiResponse = await fetch(
      `${backendUrl}/api/news?query=${encodeURIComponent(query)}&endpoint=${endpoint}`,
    );

    if (newsApiResponse.ok) {
      const data = await newsApiResponse.json();
      return data;
    } else {
      console.error("Data not available");
    }
  } catch (error) {
    console.error("Error retrieving news headlines", error);
    throw error;
  }
}
