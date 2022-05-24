import { resources } from "../data/resources";
import Resource from "./Resource";

function ResourceContainer({
  filter,
  toggleFilter,
}: {
  filter: string[];
  toggleFilter: (tag: string) => void;
}): any {
  return (
    <main className="flex space-x-4 space-y-4 flex-wrap justify-center">
      {resources.map((resource) => {
        //filter out resources by tags
        let render = false;
        resource.tags.forEach((tag) => {
          //renders if filter includes tag or if filter is empty
          if (filter.includes(tag) || filter.length === 0) render = true;
        });
        if (render)
          return (
            <Resource
              key={resource.id}
              data={resource}
              filter={filter}
              toggleFilter={toggleFilter}
            />
          );
      })}
    </main>
  );
}

export default ResourceContainer;
