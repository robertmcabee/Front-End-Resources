function Footer() {
  return (
    <footer className="fixed bottom-0 h-8 sm:right-0 w-full sm:w-min">
      <div className="bg-neutral-content h-full w-full sm:w-[20rem] sm:rounded-tl-2xl">
        <p className="pt-1.5 text-center dark:text-base-300">
          Built and curated by{" "}
          <a
            className="link link-hover"
            href="https://twitter.com/RobertTheMcAbee"
          >
            @RobertTheMcAbee
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
