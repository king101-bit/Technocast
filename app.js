console.log("hello technocast")
let loggedInUser = {};
const renderUserProfile = function(){
    db.collection("users").get().then(data =>{
        console.log(data)
    })
}

renderUserProfile()