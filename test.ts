interface IUser{
    uid:string;
    getUserName():string;
    setUserName(name:string):void;
}
interface IDocType{
    docType:string;
}
interface IUserVip{
    setCardNumber(cardNumber):number;
    getCardNumber():number;

}
class User implements IUser, IDocType{
    
    private _uid:string='123-123-123';

constructor (protected name:any, protected location:any) {
      }
/**
 * getUserName
 */
public getUserName():any {
    return this.name;
    
}

/**
 * setUserName
name:string */
public setUserName(name:any):void {
this.name = name;
}
public get uid(){
    return this._uid;
}
public set uid(name:string){
    this._uid=name;
}
}
class UserVip extends User implements IUserVip{
    constructor(name:any, location:string, private cardNumber:number){
     super(name, location);
     this name="123"
    }
    
    public setCardNumber(cardNumber):void{
        this.cardNumber=cardNumber;
    }
    public getCardNumber():number{
    return this.cardNumber;
    }
}
const UserVipObj = new UserVip("Alex", "Russia");
UserVipObj.setCardNumber(12123);
console.log(UserVipObj.getCardNumber())

console.log(UserVipObj)