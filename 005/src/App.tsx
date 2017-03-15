import * as React from "react"

export interface AppProps { compiler: string; framework: string;
}

class App extends React.Component<AppProps,undefined> {

    render() {
        return (
            <div>
                Hello
            </div>
        );
    }

}

export default App;