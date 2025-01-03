import { newsDateFormat } from "../../utils/news-date-util";

export default function SingleLeftSideNews({ newsInfo }) {
  const { content, description, publishedAt, title, url } = newsInfo || {};

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      <div className="col-span-12 md:col-span-4">
        <a href={url}>
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
        </a>
        <p className="text-base text-[#292219]">{description || content}</p>
        <p className="mt-5 text-base text-[#94908C]">
          {publishedAt && newsDateFormat(publishedAt)}
        </p>
      </div>
    </div>
  );
}
