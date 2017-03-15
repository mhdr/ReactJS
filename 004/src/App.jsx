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
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var number2 = 17;
        var number3 = "";
        var n4 = 5;
        var n5 = 2;
        if (true) {
            number2 = 34 + 198;
            number2 = number2 / 2;
            number3 = <i>19</i>;
        }
        return (<div>
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
                    <b>Number 4 :</b> {n4 === n5 ? 18 : 19}
                </p>
            </div>);
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.jsx.map