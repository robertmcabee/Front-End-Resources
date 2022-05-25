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
    <div>
      <Head>
        <title>Front End Resources</title>
        <meta
          name="description"
          content="A curated collection of resources for front end developers, covering everything from design to deployment."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Header />
      <TagSelector filter={filter} toggleFilter={toggleFilter} />
      <ResourceContainer filter={filter} toggleFilter={toggleFilter} />
      <Footer />
    </div>
  );
};

export default Home;
