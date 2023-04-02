import logoXs from "/logo/logoXs.png";
import logoSm from "/logo/logoSm.png";
import logoMd from "/logo/logoMd.png";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container mx-auto centerItem px-4">
      <div className="text-center">
        <picture>
          <source media="(min-width:640px)" srcSet={logoSm} />
          <source srcSet={logoMd} media="(min-width:768px)" />
          <img
            src={logoXs}
            alt="L'Originale logo"
            className="mx-auto"
            loading="lazy"
          />
        </picture>
        <div className="mt-8">
          <h1 className="text-3xl md:text-4xl">Ooops... Not Found page</h1>
          <p className="mt-3 text-lg md:text-xl">
            Go to{" "}
            <Link className="hover:underline hover:underline-offset-2 " to="/">
              Log in page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
