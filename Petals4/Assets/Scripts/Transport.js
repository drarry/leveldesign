#pragma strict
var keepGoing = true;
function Start () {
    //Teleport();
    while (keepGoing == true){
        yield WaitForSeconds(4);
        transform.position += Vector3.down * 250;
        yield WaitForSeconds(4);
        transform.position += Vector3.up * 250;
    }
}

function Update () {
    
}

function Teleport() {
    while (keepGoing == true){
        yield WaitForSeconds(3);
        transform.position += Vector3.down * 250;
        yield WaitForSeconds(3);
        transform.position += Vector3.up * 250;
    }
}