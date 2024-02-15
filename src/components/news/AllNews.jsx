import { useNewsContext } from "../../hooks/useNewsContext";
import LeftSideNews from "./LeftSideNews";
import LeftSideNewsWithImg from "./LeftSideNewsWithImg";
import RightSideNews from "./RightSideNews";
import TopLeftSideNews from "./TopLeftSideNews";
import TopRightSideNews from "./TopRightSideNews";

export default function AllNews() {
  const { newsData } = useNewsContext();

  if (!newsData || !newsData.articles) {
    return (
      <p className="text-center p-6 bg-sky-600 text-white text-2xl">
        Not Found
      </p>
    );
  }

  const [topLeftSideNewsData, leftSideNewsWithImgData, ...remainingNews] =
    newsData.articles;

  const extra = Math.round(remainingNews.length / 3);

  const leftSingleNewsItems = remainingNews.slice(0, extra * 2);
  const rightSingleNewsItems = remainingNews.slice(extra * 2);

  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <LeftSideNews newsItems={leftSingleNewsItems}>
          <TopLeftSideNews newsInfo={topLeftSideNewsData} />
          <LeftSideNewsWithImg newsInfo={leftSideNewsWithImgData} />
        </LeftSideNews>

        <RightSideNews newItems={rightSingleNewsItems}>
          <TopRightSideNews newsInfo={remainingNews[extra * 2]} />
        </RightSideNews>
      </div>
    </main>
  );
}
