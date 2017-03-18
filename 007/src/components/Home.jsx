var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this) || this;
        _this.state = {
            number: props.number
        };
        return _this;
    }
    Home.prototype.increaseNumber = function () {
        var newNumber;
        newNumber = this.state.number + 1;
        this.setState({
            number: newNumber
        });
    };
    Home.prototype.render = function () {
        var _this = this;
        return (<div>
                <p>Count : {this.state.number}</p>
                <button className="btn btn-primary" onClick={function () { _this.increaseNumber(); }}>Increase Number</button>
            </div>);
    };
    return Home;
}(React.Component));
Home.defaultProps = {
    number: 0
};
exports.Home = Home;
//# sourceMappingURL=Home.jsx.map