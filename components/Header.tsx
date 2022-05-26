function Header() {
  return (
    <header className="hero bg-base-200 pt-12 pb-4">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <div className="animate-fadein mockup-code text-left mb-10">
            <p className="pl-4 opacity-40 font-mono">&lt;h1&gt;</p>
            <h1 className="text-center dark:text-white text-5xl font-bold">
              Front-End <br /> Resources
            </h1>
            <p className="pl-4 opacity-40 font-mono">&lt;/h1&gt;</p>
            <p className="pl-4 opacity-40 font-mono">&lt;p&gt;</p>
            <p className="px-4 sm:px-36 text-center">
              A curated collection of free resources from across the web for
              front-end developers, covering everything from design to
              deployment.
            </p>
            <p className="pl-4 opacity-40 font-mono">&lt;/p&gt;</p>
          </div>
          <div className="animate-fadein">
            <a
              target="_blank"
              href="https://twitter.com/intent/tweet?text=Check%20out%20this%20collection%20of%20resources%20for%20front-end%20developers:&url=https%3A%2F%2Fwebdevhelp.netlify.app"
              rel="noreferrer"
            >
              <button className="btn rounded-full mx-2 mb-4">
                Tweet{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
              </button>
            </a>
            <a
              target="_blank"
              href="https://github.com/robertmcabee/Front-End-Resources"
              rel="noreferrer"
            >
              <button className="btn rounded-full mx-2 mb-4">
                Repo{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </button>
            </a>
            <br className="sm:hidden" />
            <button className="btn rounded-full mx-2 w-40 p-4 text-md btn-primary shadow-md shadow-primary">
              <a href="#tags">
                Get Started{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-4 inline"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="#fff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="18" y1="13" x2="12" y2="19" />
                  <line x1="6" y1="13" x2="12" y2="19" />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
