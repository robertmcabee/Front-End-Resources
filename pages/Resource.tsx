import Tag from "./Tag";
interface data {
  id: number;
  name: string;
  url: string;
  description: string;
  imageURL: string;
  tags: string[];
  starred: boolean;
}

function Resource({ data }: { data: data }) {
  return (
    <a href={data.url}>
      <div className="bg-white cursor-pointer">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        {data.tags.map((tag: string) => {
          return <Tag tag={tag} key={tag} />;
        })}
      </div>
    </a>
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
