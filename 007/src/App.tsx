import * as React from 'react'
import {Home} from "./components/Home"

export interface AppProps { }


class App extends React.Component<AppProps,undefined> {
    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}

export default App;