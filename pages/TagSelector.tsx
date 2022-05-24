import Tag from "./Tag";
function TagSelector({
  filter,
  toggleFilter,
}: {
  filter: string[];
  toggleFilter: (tag: string) => void;
}): any {
  const tagList = [
    "html",
    "css",
    "javascript",
    "icons",
    "svg",
    "regex",
    "advanced",
    "ui",
    "design",
    "react",
    "components",
    "git",
    "documentation",
    "cheatsheet",
  ];
  const tagDisplay = tagList.map((tag: string) => {
    return (
      <Tag tag={tag} key={tag} filter={filter} toggleFilter={toggleFilter} />
    );
  });

  return (
    <div className="w-full flex justify-center text-center">
      <div className="max-w-xl">
        <p id="tags">Select a filter:</p>
        {tagDisplay}
      </div>
    </div>
  );
}

export default TagSelector;
