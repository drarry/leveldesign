#pragma strict
var checkPointPosition : Vector3;
var playerRotation : Quaternion;
var checkpointReached = false;

function OnLevelWasLoaded () {
 
}

function Awake () {
	DontDestroyOnLoad(gameObject);
	 if (checkpointReached == true) {
	 	gameObject.transform.position = checkPointPosition;
	 }
	
}
	
function Start () {

}

function Update () {

 

}

function OnCollisionEnter(collision : Collision){
	if (collision.gameObject.tag == "Checkpoint") {
	checkPointPosition = collision.gameObject.transform.position;
	checkpointReached = true;
	Destroy(collision.gameObject);
	}

}