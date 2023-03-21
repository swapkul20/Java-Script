class user
{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

function printName(user)
{
    console.log(user.name);
}
function printAge(user)
{
    console.log(user.age);
}

export default user;
export {printName,printAge};