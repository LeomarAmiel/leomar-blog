import Link from "next/link";
import * as S from "./about.styles";

export default function About() {
  return (
    <S.Section>
      <div>
        <p>
          I'm a developer! Born & raised in the Philippines. Studied for most of
          my childhood in Marist School Marikina. Botched 1 year of high school
          in Marikina Science because I wasn't studying at all. Continued
          studying in Marist to finish high school. I graduated with a
          Bachelor's Degree in Computer Science in University of Santo Tomas.
        </p>
      </div>
      <div>
        <p>
          First work was with Accenture where I was tasked with doing mail
          migrations. While I was with Accenture, I started doing{" "}
          <Link href="https://www.freecodecamp.org/">
            <a target="_blank" rel="noopener noreferrer">
              FreeCodeCamp
            </a>
          </Link>
          . I also started hosting some of my code in{" "}
          <Link href="https://codepen.io/LeomarAmiel/">
            <a target="_blank" rel="noopener noreferrer">
              CodePen
            </a>
          </Link>
          . I know that my code was shitty back then. But hey, I was learning.
        </p>
      </div>
      <div>
        <p>
          After my stint with Accenture, I took time off working to continue
          learning JavaScript & started coding with React. Had a good friend of
          mine mentor me for a few months. And started my first job with{" "}
          <Link href="https://www.pdax.ph/">
            <a target="_blank" rel="noopener noreferrer">
              PDAX
            </a>
          </Link>{" "}
          where we built an Exchange.
        </p>
      </div>
      <div>
        <p>
          I am now working with Aurity full time as a remote React Native
          developer. I help create & maintain applications for different
          clients.
        </p>
      </div>
    </S.Section>
  );
}
