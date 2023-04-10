import { MediaResponse, TimeWindowTypes } from "./FetchApiType";


const ENDPOINT=import.meta.env.VITE_MOVIEDB_API_KEY
const API_KEY=  import.meta.env.ITE_MOVIEDB_WEB


const http = async (url: string): Promise<MediaResponse> => {
  try {
    const response = await fetch(ENDPOINT + url);
    if (!response.ok) {
      return {
        success: false,
        results: [],
        error: "Something went wrong!",
      };
    }
    const data = await response.json();

    return {
      success: true,
      results: data,
    };
  } catch (error) {
    return {
      success: false,
      results: [],
      error: "Something went wrong!",
    };
  }
};

const fetchMedia = (
  mediaType: string,
  offset: number = 1,
  keyword?: string
) => {
  let params = "";
  if ( keyword !== "") {
    params += `search/${mediaType}?api_key=${API_KEY}&query=${keyword};`;
  } else {
    params += `${mediaType}/?api_key=${API_KEY}`;
  }

  const url = `${params}&language=en-US&page=${offset}`;
  return http(url);
};


const fetchTrending = (mediaType: string, offset: number = 1) => {
  const timeWindow: TimeWindowTypes = TimeWindowTypes.week;
  let url = `trending/${mediaType}/${timeWindow}?api_key=${API_KEY}&language=en-US&page=${offset}`;
  return http(url);
};


const fetchDetails = (mediaType: string, id: number) => {
  let url = `${mediaType}/${id}?api_key=${API_KEY}&language=en-US`;
  return http(url);
};





export { fetchMedia, fetchTrending, fetchDetails };