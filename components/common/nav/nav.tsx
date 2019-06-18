import * as S from "./nav.styles";

interface IProps {
  value: string;
  onChange: () => void;
}

function Nav({ value, onChange }: IProps) {
  return (
    <S.Nav>
      <ul>
        <li>
          <button
            className={value === "blogs" ? "active" : "inactive"}
            onClick={onChange}
          >
            Blogs
          </button>
        </li>
        <li>
          <button
            className={value === "about" ? "active" : "inactive"}
            onClick={onChange}
          >
            About
          </button>
        </li>
      </ul>
    </S.Nav>
  );
}

export default Nav;
