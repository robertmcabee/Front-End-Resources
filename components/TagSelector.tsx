import Tag from "./Tag";
function TagSelector({
  filter,
  toggleFilter,
}: {
  filter: string[];
  toggleFilter: (tag: string) => void;
}): any {
  const mainTags = ["resource", "reference"];
  const otherTags = [
    "accessibility",
    "advanced",
    "css",
    "design",
    "documentation",
    "flexbox",
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
    "ui",
  ];
  const upperTags = mainTags.sort().map((tag: string) => {
    return (
      <Tag
        tag={tag}
        emphasis={true}
        key={tag}
        filter={filter}
        toggleFilter={toggleFilter}
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
        toggleFilter={toggleFilter}
      />
    );
  });

  return (
    <div
      id="tags"
      className="animate-fadein w-full flex justify-center text-center py-8"
    >
      <div className="max-w-xl">
        <p className="pb-2">Select a filter:</p>
        <div className="pb-2">{upperTags}</div>
        {lowerTags}
      </div>
    </div>
  );
}

export default TagSelector;
