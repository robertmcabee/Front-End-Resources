import Tag from "./Tag";
function TagSelector({
  filter,
  setFilter,
}: {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}): any {
  const mainTags = ["resource", "reference"];
  const otherTags = [
    "accessibility",
    "advanced",
    "beginner-friendly",
    "css",
    "design",
    "documentation",
    "git",
    "html",
    "icons",
    "images",
    "javascript",
    "optimization",
    "react",
    "regex",
    "security",
    "seo",
    "style-guide",
    "svg",
    "typescript",
    "ui",
  ];
  const upperTags = mainTags.sort().map((tag: string) => {
    return (
      <Tag
        tag={tag}
        emphasis={true}
        key={tag}
        filter={filter}
        setFilter={setFilter}
      />
    );
  });
  const lowerTags = otherTags.sort().map((tag: string) => {
    return (
      <Tag
        tag={tag}
        emphasis={false}
        key={tag}
        filter={filter}
        setFilter={setFilter}
      />
    );
  });

  return (
    <div
      id="tags"
      className="animate-fadein bg-base-100 w-full flex justify-center text-center py-8"
    >
      <div className="max-w-2xl">
        <p className="pb-2">Select a filter:</p>
        <div className="pb-2">{upperTags}</div>
        {lowerTags}
      </div>
    </div>
  );
}

export default TagSelector;
