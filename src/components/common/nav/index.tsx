import Router from "next/router";
import * as S from "./nav.styles";

interface IProps {
  value?: string;
}

function Nav({ value }: IProps) {
  return (
    <S.Nav>
      <ul>
        <li>
          <button
            className={value === "blogs" ? "active" : "inactive"}
            onClick={() => Router.push("/blog")}
          >
            Blogs
          </button>
        </li>
        <li>
          <button
            className={value === "about" ? "active" : "inactive"}
            onClick={() => Router.push("/")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={value === "work" ? "active" : "inactive"}
            onClick={() => Router.push("/work")}
          >
            Work
          </button>
        </li>
      </ul>
    </S.Nav>
  );
}

export default Nav;
