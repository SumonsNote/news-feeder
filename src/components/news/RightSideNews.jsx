import SingleRightSideNews from "./SingleRightSideNews";

export default function RightSideNews({ children, newItems = [] }) {
  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        {children}

        {newItems.map((news, i) => (
          <SingleRightSideNews key={i} newsInfo={news} />
        ))}
      </div>
    </div>
  );
}
