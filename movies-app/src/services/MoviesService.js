import axios from "axios";

export async function getPost( // прокидываем через useEffect
  search = "",
  page = 1,
  type = null,
  year = null,
  id
) {
  try {
    const { data, status } = await axios.get(
      `https://www.omdbapi.com/?apikey=9be02b9c&s=${search}${page ? `&page=${page}` : ""}${
        type ? `&type=${type}` : ""
      }${year ? `&y=${year}` : ""}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log("response status is:", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error occurred";
    }
  }
}

export async function getSinglePost(id) { // конкретный фильм по id
  try {
    const { data, status } = await axios.get(`https://www.omdbapi.com/?apikey=9be02b9c&i=${id}`, {
      headers: {
        Accept: "application/json",
      },
    });
    console.log("response status is:", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error occurred";
    }
  }
}
