import { resources } from "../data/resources";
import Resource from "./Resource";

function ResourceContainer(): any {
  return (
    resources
      // .filter((resource) => resource)
      .map((resource) => {
        return <Resource key={resource.id} data={resource} />;
      })
  );
}

export default ResourceContainer;
