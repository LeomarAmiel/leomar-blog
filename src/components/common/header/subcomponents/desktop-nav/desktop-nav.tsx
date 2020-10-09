import { THEME_TYPE } from "@context/themeProvider";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { Button, NavLink, Wrapper } from "./desktop-nav.styles";

interface IProps {
  iconColor: string;
  theme: THEME_TYPE;
  setTheme: () => void;
}

const links = [
  {
    href: "/",
    label: "About me",
  },
  {
    href: "/work",
    label: "Work",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

const DesktopNav: FC<IProps> = ({ theme, setTheme, iconColor }) => {
  const router = useRouter();
  return (
    <Wrapper>
      <nav>
        {links.map(({ href, label }, index) => (
          <Link href={href} key={href}>
            <NavLink tabIndex={index + 1} isSelected={router.pathname === href}>
              {label}
            </NavLink>
          </Link>
        ))}
      </nav>
      <Button tabIndex={links.length + 1} onClick={() => setTheme()}>
        {theme === "light" ? (
          <FontAwesomeIcon fixedWidth color={iconColor} icon={faMoon} />
        ) : (
          <FontAwesomeIcon fixedWidth color={iconColor} icon={faSun} />
        )}
      </Button>
    </Wrapper>
  );
};

export default DesktopNav;
