import * as S from "./nav.styles";
import { useState } from "react";

function Nav() {
  const [activeTab, setActiveTab] = useState("blogs");
  return (
    <S.Nav>
      <ul>
        <li>
          <button
            className={activeTab === "blogs" ? "active" : "inactive"}
            onClick={() => setActiveTab("blogs")}
          >
            Blogs
          </button>
        </li>
        <li>
          <button
            className={activeTab === "about" ? "active" : "inactive"}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
        </li>
      </ul>
    </S.Nav>
  );
}

export default Nav;
