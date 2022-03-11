import { Container } from "@nextui-org/react";

import { AuxProps } from "../../types";

const Layout = ({ children }: AuxProps): JSX.Element => <Container fluid>{children}</Container>;

export default Layout;
