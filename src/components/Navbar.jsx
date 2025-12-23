import dayjs from "dayjs";

import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      {/* left side */}
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Anand's Portfolio</p>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id} onClick={() => openWindow(item.type)}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* right side */}
      <div>
        <ul>
          {navIcons.map((icon) => (
            <li key={icon.id}>
              <img
                src={icon.img}
                className="icon-hover"
                alt={`icon-${icon.id}`}
              />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
