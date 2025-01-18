let address:{city:string,location:{x:number, y:number}, region:string, isActive: boolean, id: number}=
{
    city:"SPB",
    location:{
        x:20.333,
        y:90.333
    },
    region:"SPB",
    isActive: true,
    id: 282812
}
function setAddress(addr:{city:string,location:{x:number, y:number}, region?:string, isActive: boolean, id: number}):void{
    console.log(addr.location);
}
setAddress(address);
function getAddress():{city:string,location:{x:number, y:number}, region?:string, isActive: boolean, id: number}{
    return address;
}
let myAddress = getAddress;