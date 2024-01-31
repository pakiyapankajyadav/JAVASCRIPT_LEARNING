
console.log("serve bread")
prepareOmlette(5000, serveOmlette)
console.log("serve coffe")

//example:-call back function
function serveOmlette()
{
    console.log("serveOmlette")
}

//high-order function


function prepareOmlette(duration, serveOmlettecallback)
{
    console.log("omlette preparation started")
    setTimeout( () =>{
        console.log("Omlette preparation completed")
        cancelIdleCallback()
    }, duration)
}
