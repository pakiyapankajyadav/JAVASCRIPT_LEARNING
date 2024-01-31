console.log("one")
console.log("two")
setTimeout(fun, 5000)
console.log("three")
console.log("four")

function fun()
{
    console.log("three")
}

function hello()
{
    console.log("hello")
}
hello()
{
    console.log("hello")
}

function multiply(a, b)
{
    console.log(a*b)
}
multiply(10, 20)

//example:-call back function


function serveOmlette()
{
    console.log("serveOmlette")
}

//high-order function


function prepareOmlette(duration, serveOmlette)
{
    console.log("omlette preparation started")
    setTimeout(callback, duration)
}
