function Header() {
  return (
    <header className="hero pt-12 pb-4 bg-gradient-to-b from-base-100 to-base-300">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <div className="animate-fadein mockup-code text-left mb-10">
            <p className="pl-4 opacity-40 font-mono">&lt;h1&gt;</p>
            <h1 className="text-center dark:text-white text-5xl font-bold text-teal-100">
              Front-End <br /> Resources
            </h1>
            <p className="pl-4 opacity-40 font-mono">&lt;/h1&gt;</p>
            <p className="pl-4 opacity-40 font-mono">&lt;p&gt;</p>
            <p className="px-4 sm:px-36 text-center ">
              A curated collection of free resources from across the web for
              front-end developers, covering everything from design to
              deployment.
            </p>
            <p className="pl-4 opacity-40 font-mono">&lt;/p&gt;</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
