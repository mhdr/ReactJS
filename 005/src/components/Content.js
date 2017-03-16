import React, {Component} from 'react';
import "./Content.css"

export class Content extends Component {

    render() {

        var classNames = "";

        if (this.props.size === "small") {
            classNames += " small";
        }
        else if (this.props.size === "medium") {
            classNames += " medium";
        }
        else if (this.props.size === "large") {
            classNames += " large";
        }

        return (
            <div className={classNames}>
                {this.props.children}
            </div>
        );
    }
}

Content.propTypes = {
    size: React.PropTypes.string,
    children: React.PropTypes.array
};