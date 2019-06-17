import { ReactNode } from "react";
import Page from "@components/common/page/page";
import { useTheme } from "@store/theme";

interface IProps {
  children: ReactNode;
}

export default function PageContainer({ children }: IProps) {
  const theme = useTheme("light");

  return (
    <Page theme={theme.value} onSetTheme={theme.onChange}>
      {children}
    </Page>
  );
}
