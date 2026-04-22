import axios from "axios";

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

export const fetchPhotos = async (query, page = 1, per_page = 12) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query,
        page,
        per_page,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};