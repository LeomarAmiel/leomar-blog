import { FC } from "react";
import * as S from "./work.styles";

const Work: FC<unknown> = () => {
  return (
    <S.Section>
      <div>
        <h4>Aurity</h4>
        <S.BulletList>
          <li>
            Part of team to Launch Playbook App. Playbook is the first
            marketplace where our favorite trainers, influencers, and athletes
            share their latest programs and coach you. (
            <a
              href="https://play.google.com/store/apps/details?id=io.playbookapp.android"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android
            </a>
            )
          </li>
          <li>
            Maintain and improve yulife app. yulife is a lifestyle insurance
            company that brings together life insurance, wellbeing, and rewards
            in one simple app. (
            <a
              href="https://apps.apple.com/gb/app/yulife/id1348287598"
              target="_blank"
              rel="noopener noreferrer"
            >
              iOS
            </a>{" "}
            |{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.yulife.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android
            </a>
            )
          </li>
          <li>
            Part of team improving accessibility of Yulife. Using handlebars and
            really into those HTML5 semantics! For the sign up parts, we&apos;re
            using Next! (
            <a
              href="https://yulife.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              web
            </a>
            )
          </li>
        </S.BulletList>

        <h4>Project Assistant</h4>

        <S.BulletList>
          <li>
            Maintain and improve Flyspaces website. FlySpaces is Southeast
            Asia&apos;s Leading Digital Platform With Over 4000 Spaces For
            Serviced Office, Coworking, Meeting Room &#38; Event Space
            Solutions. (
            <a
              href="https://play.google.com/store/apps/details?id=com.yulife.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              web
            </a>
            )
          </li>
        </S.BulletList>
        <h4>PDAX</h4>

        <S.BulletList>
          <li>
            Create first Exchange Beta in the Philippines. Unfortunately
            didn&apos;t launch. Recreated the same project but worked as a
            Full-Stack &#38; prototyped a User Service with AWS Lambda, API
            Gateway, RDS, S3 &#38; Sequelize
          </li>
        </S.BulletList>
      </div>
      <div>
        <h4>Accenture</h4>

        <S.BulletList>
          <li>
            Worked first with mail migrations. Mainly worked as a support for an
            inhouse web application. Was tasked with L2 Support &#38; first had
            experience at work doing programming using Excel Macros! Oh Yea! 🤘
          </li>
        </S.BulletList>
      </div>
    </S.Section>
  );
};

export default Work;
