import * as React from "react"

export interface HeaderProps {
    compiler: string;
    framework: string;
    isBold:boolean;
}

class Header extends React.Component<HeaderProps,undefined> {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Header;