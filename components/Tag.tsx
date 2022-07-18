function Tag({
  tag,
  emphasis,
  filter,
  setFilter,
}: {
  tag: string;
  emphasis: boolean;
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  let tagClass = "m-1 p-3 badge hover:opacity-50";
  if (filter.includes(tag)) tagClass += " font-bold text-teal-300";
  if (emphasis) tagClass += " px-8 border-2 border-teal-300";

  function toggleFilter(tag: string): void {
    if (filter.includes(tag)) {
      setFilter(filter.filter((item) => item !== tag));
    } else {
      setFilter([...filter, tag]);
    }
  }

  return (
    <button onClick={() => toggleFilter(tag)} className={tagClass}>
      {tag}
    </button>
  );
}

export default Tag;
