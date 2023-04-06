export const Footer = () => {
  return (
    <footer className="py-4 text-center dark:text-gray">
      <div className="container mx-auto">
        <p className="text-lg md:text-xl ">
          A project by:{" "}
          <a
            className="hover:font-bold hover:text-red"
            href="https://thawan.netlify.app"
          >
            Thawan Silva
          </a>
        </p>

        <a
          href="https://github.com/thawansilva/loriginale"
          className="text-xl hover:text-red"
        >
          Git Repo
          <i className="fa-brands fa-github text-2xl ml-2"></i>
        </a>
      </div>
    </footer>
  );
};
