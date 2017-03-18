import * as React from 'react'
export interface HomeProps {
    number?: number
}

export interface HomeState {
    number: number
}

export class Home extends React.Component<HomeProps,HomeState> {

    constructor(props: HomeProps) {
        super();
        this.state = {
            number: props.number
        };
    }

    public static defaultProps: Partial<HomeProps> = {
        number: 0
    };

    increaseNumber() {
        let newNumber: number;
        newNumber = this.state.number + 1;

        this.setState({
            number: newNumber
        });
    }

    render(): JSX.Element {
        return (
            <div>
                <p>Count : {this.state.number}</p>
                <button className="btn btn-primary" onClick={()=>{this.increaseNumber()}}>Increase Number</button>
            </div>
        );
    }
}
