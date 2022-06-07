import Tag from "./Tag";
interface data {
  id: number;
  name: string;
  url: string;
  description: string;
  tags: string[];
  starred: boolean;
}

function Resource({
  data,
  filter,
  toggleFilter,
}: {
  data: data;
  filter: string[];
  toggleFilter: (tag: string) => void;
}) {
  let cardClasses =
    "card z-0 shadow-xl group animate-fadein transition-all m-1";
  if (data.starred) {
    cardClasses += " bg-gradient-to-tl from-lime-300 via-teal-300 to-blue-400";
  } else {
    cardClasses += " unstarred";
  }

  return (
    <div className={cardClasses}>
      <div
        style={data.starred ? { position: "absolute" } : { display: "none" }}
        className=" z-20 bg-gradient-to-b from-base-300 to-transparent opacity-85 h-full w-full group-hover:translate-y-[-30%] translate-x-[-0.5rem] transition-all duration-[500ms]"
      ></div>

      <div className="card-body z-20">
        <a target="_blank" href={data.url} rel="noreferrer">
          <h2 className="hover:opacity-50 pb-4 transition-all link card-title">
            {data.name}
          </h2>
          <p className="transition-colors">{data.description}</p>
        </a>
        <div className="h-full"></div>
        <div className="flex flex-wrap">
          {data.tags.sort().map((tag: string) => {
            return (
              <Tag
                tag={tag}
                emphasis={false}
                key={tag}
                filter={filter}
                toggleFilter={toggleFilter}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Resource;

//-----------------data example:------------------------------------------
//  {
//   id: 0,
//   name: "htmlreference.io",
//   url: "https://htmlreference.io/",
//   description: "A free guide to all HTML elements and attributes.",
//   imageURL: "https://htmlreference.io/images/html-reference-icon.png",
//   tags: ["html"],
//   starred: false,
// },
//--------------------------------------------------------------------------
