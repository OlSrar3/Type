/*import {usersArr} from "./users";
import {usersInfoArr} from "./userInfo";
interface Ichoice {
    name: string,
    position: string,
    age: number,
    gender: string
}
function getUsersJobPositions():Ichoice[]{
const isThreeOrFour = (element:any) => {
    return (element === 'name') || (element === 'position') || (element === 'age')
  }

  const isOneOrFour = (elem:any) => {
    return (elem === 'gender')
  }
    
  const resultWithFind = usersInfoArr.filter(isThreeOrFour(element));
  const resultWithFind1 = usersArr.filter(isOneOrFour(elem));

 
  console.log(resultWithFind);
  console.log(resultWithFind1);
}
const usersPositions=getUsersJobPositions();
console.log(usersPositions);
*/
import {usersArr, IusersArray} from "./users";
import {usersInfoArr, IusersInfoArray} from "./userInfo";
interface Ichoice {
    name: string,
    position: string,
    age: number,
    gender: string
}
function getUsersJobPositions(usersArr: IusersArray[]):Ichoice[]{
const usersInfoMap:Map <string, any> = new Map(usersInfoArr.map(user=>[user.userid,user]));
if (IusersInfoArray) {
            return usersArr.map(user=>{
                const IusersInfoArray=usersInfoMap.get(user.userid);
                return {
                name: IusersInfoArray.name,
                position: IusersInfoArray.organization.position,
                age: IusersInfoArray.age,
                gender: user.gender,
                
            };
        });
           
        }
        
const usersPositions=getUsersJobPositions();
      
console.log(usersPositions);
