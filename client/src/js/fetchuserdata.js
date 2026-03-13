export default async function getUserData() {
  const apiKey = import.meta.env.VITE_IPINFO_KEY;
  const url = `https://ipinfo.io/json?token=${apiKey}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem("info", data.city?.toString() || "Unknown");

      return data;
    } else {
      console.error("Failed to fetch city data", error);
    }
  } catch (error) {
    console.error("Error retriving a city", error);
    throw error;
  }
}
