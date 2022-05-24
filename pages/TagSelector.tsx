import Tag from "./Tag";
function TagSelector({
  filter,
  toggleFilter,
}: {
  filter: string[];
  toggleFilter: (tag: string) => void;
}): any {
  const tags = ["html", "css", "javascript"];

  return tags.map((tag: string) => {
    return (
      <Tag tag={tag} key={tag} filter={filter} toggleFilter={toggleFilter} />
    );
  });
}

export default TagSelector;
