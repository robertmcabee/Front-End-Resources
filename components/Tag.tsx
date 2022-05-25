function Tag({
  tag,
  filter,
  toggleFilter,
}: {
  tag: string;
  filter: string[];
  toggleFilter: (tag: string) => void;
}) {
  let tagClass = "m-1 p-3 badge hover:opacity-50";
  if (filter.includes(tag)) tagClass += " badge-primary";

  return (
    <button onClick={() => toggleFilter(tag)} className={tagClass}>
      {tag}
    </button>
  );
}

export default Tag;
