import * as React from "react";
export interface HeaderProps {
    compiler: string;
    framework: string;
    isBold: boolean;
}
declare class Header extends React.Component<HeaderProps, undefined> {
    render(): any;
}
export default Header;
