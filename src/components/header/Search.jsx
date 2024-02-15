import { useEffect, useState } from "react";
import { baseUrl, search } from "../../constant/newsService";
import { useDebounce } from "../../hooks/useDebounce";
import { useNewsContext } from "../../hooks/useNewsContext";

export default function Search() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const debounceValue = useDebounce(query, 500);
  const { setNewsData } = useNewsContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlToFetch = debounceValue ? search + debounceValue : baseUrl;
        const res = await fetch(urlToFetch);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const json = await res.json();
        setNewsData({ articles: json?.result });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [debounceValue, setNewsData]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative flex items-center w-300 overflow-hidden rounded-md border border-gray-300 bg-white transition duration-200 ease-in-out focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-opacity-50 hover:w-500">
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Search..."
        className="px-3 py-2 text-base focus:outline-none placeholder-opacity-50 hover:placeholder-opacity-100 dark:text-gray-700 dark:focus:text-gray-700 transition-all w-60"
      />
      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:opacity-100 dark:text-gray-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
      {error && (
        <p className="text-center p-6 bg-red-700 text-white text-2xl">
          {error}
        </p>
      )}
    </div>
  );
}
