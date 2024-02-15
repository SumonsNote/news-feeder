import { url } from "../constant/newsService";
import { NewsContext } from "../context";
import { useFetchData } from "../hooks";

export default function NewsProvider({ children }) {
  const { newsData, setNewsData } = useFetchData(url.home);

  return (
    <NewsContext.Provider value={{ newsData, setNewsData }}>
      {children}
    </NewsContext.Provider>
  );
}
