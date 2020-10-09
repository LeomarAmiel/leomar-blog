import { Paragraph } from "@components/common";
import { Section } from "./blog.styles";

function BlogScreen() {
  return (
    <Section>
      <Paragraph>This is taking some time... 🕐</Paragraph>
      <Paragraph>
        Give me a few days while I hash out the process of creating my blog. I
        will be using MDX for this baby.
      </Paragraph>
    </Section>
  );
}

export default BlogScreen;
