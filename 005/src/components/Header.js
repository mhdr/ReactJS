import React, {Component} from 'react';
import "./Header.css"

export class Header extends Component {

    render() {

        var classNames = "";

        if (this.props.isBold) {
            classNames += " bold";
        }

        return (
            <div className={classNames}>
                App
            </div>
        );
    }
}

Header.propTypes = {
    isBold: React.PropTypes.bool
};