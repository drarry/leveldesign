#pragma strict
var cubesLeft = 5;
var door : GameObject;

function Start () {
    door = GameObject.FindWithTag("Door");
}

function Update () {

}

function OnCollisionEnter(collision : Collision) {
    if (collision.gameObject.tag == "Collectable"){
        cubesLeft -= 1;
        Destroy(collision.gameObject);

    }
    if (collision.gameObject.tag == "Door" && cubesLeft == 0){
        Destroy(collision.gameObject);
        WaitForSeconds(2);
        Application.Quit();
}
}