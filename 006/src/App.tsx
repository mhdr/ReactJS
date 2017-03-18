import * as React from 'react'
export interface AppProps { }
import {CustomButton} from "./components/CustomButton"

export default class App extends React.Component<AppProps,undefined> {
    render() {
        return (
            <div>
                <CustomButton number={10} />
            </div>
        );
    }
}