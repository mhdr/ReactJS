import * as React from "react";
export interface AppProps {
    compiler: string;
    framework: string;
}
declare class App extends React.Component<AppProps, undefined> {
    render(): any;
}
export default App;
