import { useState } from "react";
import Header from "../components/Header";
import TagSelector from "../components/TagSelector";
import ResourceContainer from "../components/ResourceContainer";
import Footer from "../components/Footer";

const App: React.FC = () => {
  const [filter, setFilter] = useState<string[]>([]);

  return (
    <>
      <div className="min-h-[90vh]">
        <Header />
        <TagSelector filter={filter} setFilter={setFilter} />
        <ResourceContainer filter={filter} setFilter={setFilter} />
      </div>
      <Footer />
    </>
  );
};

export default App;
