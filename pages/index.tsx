import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import TagSelector from "../components/TagSelector";
import ResourceContainer from "../components/ResourceContainer";
import Footer from "../components/Footer";

const Home: any = () => {
  const [filter, setFilter] = useState<string[]>([]);

  function toggleFilter(tag: string): void {
    if (filter.includes(tag)) {
      setFilter(filter.filter((item) => item !== tag));
    } else {
      setFilter([...filter, tag]);
    }
  }

  return (
    <>
      <div className="min-h-[90vh]">
        <Head>
          <title>Front End Resources</title>
        </Head>
        <Header />
        <TagSelector filter={filter} toggleFilter={toggleFilter} />
        <ResourceContainer filter={filter} toggleFilter={toggleFilter} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
