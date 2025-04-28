import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
export default DashboardLayout;
