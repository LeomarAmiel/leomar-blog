import Link from "next/link";
import * as S from "./about.styles";

export default function About() {
  return (
    <S.Section>
      <div>
        I'm a developer! Born & raised in the Philippines. I graduated with a
        Bachelor's Degree in Computer Science in University of Santo Tomas.
        First work was with Accenture where I was tasked with doing mail
        migrations. While I was with Accenture, I started doing
        <Link href="https://www.freecodecamp.org/">
          <a> FreeCodeCamp</a>
        </Link>
        . I also started hosting some of my code in
        <Link href="https://codepen.io/LeomarAmiel/">
          <a> CodePen</a>
        </Link>
        . I know that my code was shitty back then. But hey, I was learning.
      </div>
      <br />
      <div>
        After my stint with Accenture, I took time off working to continue
        learning JavaScrip & started coding with React. Had a good friend of
        mine mentor me for a few months. And started my first job with
        <Link href="https://www.pdax.ph/">
          <a> PDAX </a>
        </Link>
        where we built an Exchange.
      </div>
      <br />
      <div>
        I am now working with Aurity full time as a remote React Native
        developer. I help create & maintain applications for different clients.
      </div>
    </S.Section>
  );
}
