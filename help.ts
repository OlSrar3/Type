fetch('/users.ts').then ((data:Response)=>
    {
        return data.json() as Promise <{name:string}>
    }).then((res)=>{
        usersArray = res.name;
    })
    import {usersArray} from '/users.ts';
    fetch('/users.ts').then ((data:Response)=>
        {
            return data.json() as Promise <{name:string}>
        }).then((res)=>{
           let usersArray = res.name;
        })

        
fetch(url: 'users.ts').then ((data)=>
    {
        return data.json()
    }).then((res)=>{
        usersArray = res.name;
    })

function getUsersJobPositions(){
return 'usersArray';
}
getUsersJobPositions();