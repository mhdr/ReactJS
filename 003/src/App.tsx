import * as React from 'react'
export interface AppProps { compiler: string; framework: string; }

class App extends React.Component<AppProps,undefined> {
    render() {
        return (
            <div>
                Hello World 2
            </div>
        );
    }
}

export default App;
