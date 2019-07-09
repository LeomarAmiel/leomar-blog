import Link from "next/link";
import * as S from "./work.styles";

export default function Work() {
  return (
    <S.Section>
      <div>
        <h4>Aurity</h4>
        <S.BulletList>
          <li>
            Part of team to Launch Playbook App. Playbook is the first
            marketplace where our favorite trainers, influencers, and athletes
            share their latest programs and coach you. (
            <Link href="https://play.google.com/store/apps/details?id=io.playbookapp.android">
              <a target="_blank" rel="noopener noreferrer">
                Android
              </a>
            </Link>
            )
          </li>
          <li>
            Maintain and improve yulife app. yulife is a lifestyle insurance
            company that brings together life insurance, wellbeing, and rewards
            in one simple app. (
            <Link href="https://apps.apple.com/gb/app/yulife/id1348287598">
              <a target="_blank" rel="noopener noreferrer">
                iOS
              </a>
            </Link>{" "}
            |{" "}
            <Link href="https://play.google.com/store/apps/details?id=com.yulife.app">
              <a target="_blank" rel="noopener noreferrer">
                Android
              </a>
            </Link>
            )
          </li>
          <li>
            Part of team improving accessibility of Yulife. Using handlebars and
            really into those HTML5 semantics! For the sign up parts, we're
            using Next! (
            <Link href="https://yulife.com">
              <a target="_blank" rel="noopener noreferrer">
                web
              </a>
            </Link>
            )
          </li>
        </S.BulletList>

        <h4>Project Assistant</h4>

        <S.BulletList>
          <li>
            Maintain and improve Flyspaces website. FlySpaces is Southeast
            Asia's Leading Digital Platform With Over 4000 Spaces For Serviced
            Office, Coworking, Meeting Room & Event Space Solutions. (
            <Link href="https://play.google.com/store/apps/details?id=com.yulife.app">
              <a target="_blank" rel="noopener noreferrer">
                web
              </a>
            </Link>
            )
          </li>
        </S.BulletList>
        <h4>PDAX</h4>

        <S.BulletList>
          <li>
            Create first Exchange Beta in the Philippines. Unfortunately didn't
            launch. Recreated the same project but worked as a Full-Stack &
            prototyped a User Service with AWS Lambda, API Gateway, RDS, S3 &
            Sequelize
          </li>
        </S.BulletList>
      </div>
      <div>
        <h4>Accenture</h4>

        <S.BulletList>
          <li>
            Worked first with mail migrations. Mainly worked as a support for an
            inhouse web application. Was tasked with L2 Support & first had
            experience at work doing programming using Excel Macros! Oh Yea! 🤘
          </li>
        </S.BulletList>
      </div>
    </S.Section>
  );
}