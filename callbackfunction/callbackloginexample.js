console.log("go to login page")
login(5000, openHomePage)

//callback
function openHomePage()
{
    console.log("redirect to Homepage")
}
//high order function
function login(duration, callback)
{
    console.log("user entering credentials")
    console.log("login button clicked")
    setTimeout( ()=>{
        console.log("user validated")
        callback()
    }, duration)
}