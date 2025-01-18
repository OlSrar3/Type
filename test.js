var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, location) {
        this.name = name;
        this.location = location;
        this._uid = '123-123-123';
    }
    /**
     * getUserName
     */
    User.prototype.getUserName = function () {
        return this.name;
    };
    /**
     * setUserName
    name:string */
    User.prototype.setUserName = function (name) {
        this.name = name;
    };
    Object.defineProperty(User.prototype, "uid", {
        get: function () {
            return this._uid;
        },
        set: function (name) {
            this._uid = name;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var UserVip = /** @class */ (function (_super) {
    __extends(UserVip, _super);
    function UserVip(name, location, cardNumber) {
        var _this = _super.call(this, name, location) || this;
        _this.cardNumber = cardNumber;
        _this;
        name = "123";
        return _this;
    }
    UserVip.prototype.setCardNumber = function (cardNumber) {
        this.cardNumber = cardNumber;
    };
    UserVip.prototype.getCardNumber = function () {
        return this.cardNumber;
    };
    return UserVip;
}(User));
var UserVipObj = new UserVip("Alex", "Russia");
UserVipObj.setCardNumber(12123);
console.log(UserVipObj.getCardNumber());
console.log(UserVipObj);
