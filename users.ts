export interface  IusersArray{
     userid: string,
     name: string,
     gender: string  
}
export let usersArr:  IusersArray []= [
   {userid: '127e4567-e89b-12d3-a458-426614174000',
    name: 'John',
    gender: 'man'},
    {
    userid: '127e4567-e89a-12f3-a458-327395154000',
    name: 'Anna',
    gender: 'woman'
    } 
];
    console.log(usersArr);
