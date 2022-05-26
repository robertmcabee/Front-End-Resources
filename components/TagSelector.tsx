import Tag from "./Tag";
function TagSelector({
  filter,
  toggleFilter,
}: {
  filter: string[];
  toggleFilter: (tag: string) => void;
}): any {
  const tagList = [
    "accessibility",
    "advanced",
    "cheatsheet",
    "css",
    "design",
    "documentation",
    "flexbox",
    "git",
    "html",
    "icons",
    "javascript",
    "optimization",
    "react",
    "regex",
    "security",
    "seo",
    "style-guide",
    "svg",
    "ui",
  ];
  const tagDisplay = tagList.sort().map((tag: string) => {
    return (
      <Tag tag={tag} key={tag} filter={filter} toggleFilter={toggleFilter} />
    );
  });

  return (
    <div
      id="tags"
      className="animate-fadein w-full flex justify-center text-center py-8"
    >
      <div className="max-w-xl">
        <p className="pb-2">Select a filter:</p>
        {tagDisplay}
      </div>
    </div>
  );
}

export default TagSelector;
