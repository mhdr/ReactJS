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
require("./CustomButton.css");
var CustomButton = (function (_super) {
    __extends(CustomButton, _super);
    function CustomButton(props) {
        var _this = _super.call(this) || this;
        _this.number = props.number;
        return _this;
    }
    CustomButton.prototype.increaseNumber = function () {
        this.number += 1;
        console.log(this.number);
    };
    CustomButton.prototype.render = function () {
        return (<div>
                <button className="btn btn-primary bold" onClick={this.increaseNumber.bind(this)}>Increase Number</button>
            </div>);
    };
    return CustomButton;
}(React.Component));
exports.CustomButton = CustomButton;
//# sourceMappingURL=CustomButton.jsx.map