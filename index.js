"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*interface  IusersArray{
     userid: any,
     name: string,
     gender: string
}

interface Iorganization {
  name: string,
  position: string
}
interface IusersInfoArray{
    userid: any,
    name: string,
    birthdate: string,
    age:number,
    organization: Iorganization
}
*/
var users_1 = require("./users");
var userInfo_1 = require("./userInfo");
function getUsersJobPositions() {
    var usersInfoMap = new Map(userInfo_1.usersInfoArr.map(function (user) { return [user.userid, user]; }));
    return users_1.usersArr.map(function (user) {
        var usersInfo2 = usersInfoMap.get(user.userid);
        return {
            name: usersInfo2.name,
            position: usersInfo2.organization.position,
            age: usersInfo2.age,
            gender: user.gender,
        };
    });
}
var usersPositions = getUsersJobPositions();
console.log(usersPositions);
