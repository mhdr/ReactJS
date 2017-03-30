import * as React from 'react'
import "./CustomButton.css"

export interface CustomButtonProps { number: number
}

export class CustomButton extends React.Component<CustomButtonProps,undefined> {

    private number: number;

    constructor(props:CustomButtonProps) {
        super();
        this.number = props.number;
    }

    public increaseNumber()
    {
        this.number +=1;
        console.log(this.number);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary bold" onClick={this.increaseNumber.bind(this)}>Increase Number</button>
            </div>
        );
    }
}