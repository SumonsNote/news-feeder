import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AllNews from "./components/news/AllNews";
import NewsProvider from "./provider/NewsProvider";

export default function App() {
  return (
    <NewsProvider>
      <Header />
      <AllNews />
      <Footer />
    </NewsProvider>
  );
}
