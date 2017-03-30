import * as React from 'react'
export interface AppProps { compiler: string; framework: string;
}

class App extends React.Component<AppProps,undefined> {
    render() {

        let number2 = 17;
        let number3: any = "";
        let n4 = 5;
        let n5 = 2;

        if (true) {
            number2 = 34 + 198;
            number2 = number2 / 2;

            number3 =<i>19</i>
        }

        return (
            <div>
                <p>
                    <b>Number :</b> {2 + 4}
                </p>

                <p>
                    <b>Number 2 :</b> {number2}
                </p>

                <p>
                    <b>Number 3 :</b> {number3}
                </p>

                <p>
                    <b>Number 4 :</b> { n4 === n5 ? 18 : 19}
                </p>
            </div>
        );
    }
}

export default App;
