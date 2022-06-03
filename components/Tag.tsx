function Tag({
  tag,
  emphasis,
  filter,
  toggleFilter,
}: {
  tag: string;
  emphasis: boolean;
  filter: string[];
  toggleFilter: (tag: string) => void;
}) {
  let tagClass = "m-1 p-3 badge hover:opacity-50";
  if (filter.includes(tag)) tagClass += " font-bold text-teal-300";
  if (emphasis) tagClass += " px-8 border-2 border-teal-300";

  return (
    <button onClick={() => toggleFilter(tag)} className={tagClass}>
      {tag}
    </button>
  );
}

export default Tag;
