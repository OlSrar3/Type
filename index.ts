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
import {usersArr} from "./users";
import {usersInfoArr} from "./userInfo";
interface Ichoice {
    name: string,
    position: string,
    age: number,
    gender: string
}
function getUsersJobPositions():Ichoice[]{
const usersInfoMap:Map <string, any> = new Map(usersInfoArr.map(user=>[user.userid,user]));
            return usersArr.map(user=>{
                const usersInfo2=usersInfoMap.get(user.userid);
                return {
                name: usersInfo2.name,
                position: usersInfo2.organization.position,
                age: usersInfo2.age,
                gender: user.gender,
            };
        });
           
        }
        
const usersPositions=getUsersJobPositions();
      
console.log(usersPositions);
