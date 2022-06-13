window.onload = function ()
{
    let x = 100;
    let y = 123;
    let z = -212;
    console.log(skaiciusDaugiauSimta(x));
    console.log(skaiciusDaugiauSimta(y));
    console.log(skaiciusDaugiauSimta(z));

}
function skaiciusDaugiauSimta(skaicius)
{
    if (skaicius>100){
        return true;
    }
    else {
        return false;
    }
}

