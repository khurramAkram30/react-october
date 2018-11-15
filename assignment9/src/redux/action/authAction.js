const updateUser =(user)=>{
    console.log("abc",user);
    return {
        type:"Update_User",
        user
    }
}

const removeUser =()=>{
    return {
        type:"Remove_User",
        
    }
}

export {

    updateUser,
    removeUser


}