let address=[
{
    city:"SPB",
    location:[{
        x:20.333,
        y:90.333
    }],
    region:"SPB",
    isActive: true,
    id: 282812
}]
function setAddress(address){
    console.log(address);
}
setAddress(address);
function getAddress(){
    return address;
}
let myAddress = getAddress;