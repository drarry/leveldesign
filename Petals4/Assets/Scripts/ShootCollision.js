#pragma strict

function Start () {


}

function Update () {

}

function OnCollisionEnter (collision : Collision) {
    if (collision.gameObject.tag == "Enemy") {
        Destroy(collision.gameObject);
    }
    else if (collision.gameObject.tag != "InvisibleWall") {
        Destroy(gameObject);
    }
    else if (collision.gameObject.tag == "InvisibleWall") {
        Destroy(gameObject, 3);
    }
}