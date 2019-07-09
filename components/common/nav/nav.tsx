import * as S from "./nav.styles";
import { TabType } from "@store/activeTab";

interface IProps {
  value: string;
  onChange: (tab: TabType) => () => void;
}

function Nav({ value, onChange }: IProps) {
  const onClickBlogs = onChange("blogs");
  const onClickAbout = onChange("about");
  const onClickWork = onChange("work");
  return (
    <S.Nav>
      <ul>
        <li>
          <button
            className={value === "blogs" ? "active" : "inactive"}
            onClick={onClickBlogs}
          >
            Blogs
          </button>
        </li>
        <li>
          <button
            className={value === "about" ? "active" : "inactive"}
            onClick={onClickAbout}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={value === "work" ? "active" : "inactive"}
            onClick={onClickWork}
          >
            Work
          </button>
        </li>
      </ul>
    </S.Nav>
  );
}

export default Nav;
