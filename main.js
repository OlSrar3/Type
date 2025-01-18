"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userInfo_1 = require("./userInfo");
function getUsersJobPositions(usersArr) {
    var usersInfoMap = new Map(userInfo_1.usersInfoArr.map(function (user) { return [user.userid, user]; }));
    if (userInfo_1.IusersInfoArray) {
        return usersArr.map(function (user) {
            var IusersInfoArray = usersInfoMap.get(user.userid);
            return {
                name: IusersInfoArray.name,
                position: IusersInfoArray.organization.position,
                age: IusersInfoArray.age,
                gender: user.gender,
            };
        });
    }
    var usersPositions = getUsersJobPositions();
    console.log(usersPositions);
}
