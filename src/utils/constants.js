export const coordinates = {
  latitude: 40.80734,
  longitude: -72.647987,
};

export const APIkey = "b6f49acf1fbf879860ff1492a4954b55";

export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.buffalocrow.justlearning.net"
    : "http://localhost:3001";
