import { useState } from "react";
import img from "../../Desgin For Tailwind Tutorial/images/logo.svg";
function Header() {
  // eslint-disable-next-line no-unused-vars
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);
  return (
    <header className="bg flex justify-between p-2">
      <a href="/">
        <img src={img} alt="logo-img" />
      </a>
      <nav className="flex justify-between items-center space-x-4">
        <ul className="flex ">
          {links.map((link) => (
            <li key={link}>
              <a
                className="m-2 text-white opacity-[0.9] hover:opacity-[1] hover:underline "
                href={`/${link.toLowerCase()}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
