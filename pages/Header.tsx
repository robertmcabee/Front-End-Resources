function Header() {
  return (
    <div className="hero bg-base-200 py-12">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className=" dark:text-white text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn p-4 text-md btn-primary shadow-md shadow-primary">
            <a href="#tags">
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-4 inline"
                width="10"
                height="10"
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
  );
}

export default Header;
