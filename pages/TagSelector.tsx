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
    "style-guide",
    "flexbox",
    "optimization",
    "security",
  ];
  const tagDisplay = tagList.map((tag: string) => {
    return (
      <Tag tag={tag} key={tag} filter={filter} toggleFilter={toggleFilter} />
    );
  });

  return (
    <div id="tags" className="w-full flex justify-center text-center py-8">
      <div className="max-w-xl">
        <p className="pb-2">Select a filter:</p>
        {tagDisplay}
      </div>
    </div>
  );
}

export default TagSelector;
