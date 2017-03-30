import * as React from 'react'
export interface HomeProps { greet?:any }

export class Home extends React.Component<HomeProps,undefined> {

    render() {
        return (
            <div>
                Hello World

                <div>
                    <button onClick={this.props.greet}>Say Hello</button>
                </div>
            </div>
        );
    }
}
