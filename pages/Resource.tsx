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
  return (
    <div className="card max-w-md bg-base-200 shadow-xl">
      <div className="card-body">
        <a href={data.url}>
          <h2 className="link card-title">{data.name}</h2>
        </a>
        <p>{data.description}</p>
        <div className="card-actions">
          {data.tags.map((tag: string) => {
            return (
              <Tag
                tag={tag}
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
