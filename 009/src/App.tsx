import * as React from 'react'
import {Home} from "./components/Home";
export interface AppProps { compiler: string; framework: string; }

class App extends React.Component<AppProps,undefined> {

    onGreeting()
    {
        alert("Hello World");
    }

    render() {
        return (
            <div>
                <Home greet={this.onGreeting}/>
            </div>
        );
    }
}

export default App;