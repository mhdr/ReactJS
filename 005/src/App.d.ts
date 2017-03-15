/// <reference types="react" />
import * as React from "react";
export interface AppProps {
    compiler: string;
    framework: string;
}
declare class App extends React.Component<AppProps, undefined> {
    render(): JSX.Element;
}
export default App;
