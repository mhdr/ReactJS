/// <reference types="react" />
import * as React from "react";
export interface HeaderProps {
    compiler: string;
    framework: string;
    isBold: boolean;
}
declare class Header extends React.Component<HeaderProps, undefined> {
    render(): JSX.Element;
}
export default Header;
