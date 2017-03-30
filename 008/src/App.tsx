import * as React from 'react'
import {Home} from "./components/Home";
export interface AppProps { compiler: string; framework: string; }

class App extends React.Component<AppProps,undefined> {
    render() {
        return (
            <div>
                Hello World

                <Home Link="Home"/>
            </div>
        );
    }
}

export default App;