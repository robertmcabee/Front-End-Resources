function Tag({
  tag,
  filter,
  toggleFilter,
}: {
  tag: string;
  filter: string[];
  toggleFilter: (tag: string) => void;
}) {
  let tagClass = "p-2 m-1 cursor-pointer";
  if (filter.includes(tag)) tagClass += " bg-green-200";

  return (
    <button onClick={() => toggleFilter(tag)} className={tagClass}>
      {tag}
    </button>
  );
}

export default Tag;
