#pragma strict
var teleport : Vector3;
var rb : Rigidbody;
var keepGoing = true;

function Start () {
rb = GetComponent.<Rigidbody>();
}

function Update () {

}
function FixedUpdate () {
if ( keepGoing == true){
	rb.MovePosition(transform.position + transform.up * Time.deltaTime);
	}
if (keepGoing == false) {
	rb.MovePosition(transform.position + transform.up * -Time.deltaTime);
}
}

function OnTriggerEnter (collision : Collider) {
if (collision.gameObject.tag == "Top") {
keepGoing = false;
}
if (collision.gameObject.tag == "Bottom") {
keepGoing = true;
}

}