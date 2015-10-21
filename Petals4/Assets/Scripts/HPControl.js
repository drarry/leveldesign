#pragma strict
var HP = 6;
var HPLeafPos1 : Vector3;
var HPLeafPos2 : Vector3;
var HPLeafPos3 : Vector3;
var HPLeafPos4 : Vector3;
var HPLeafPos5 : Vector3;
var HPLeafPos6 : Vector3;

var HPLeafRot1 : Quaternion;
var HPLeafRot2 : Quaternion;
var HPLeafRot3 : Quaternion;
var HPLeafRot4 : Quaternion;
var HPLeafRot5 : Quaternion;
var HPLeafRot6 : Quaternion;

var checkpointReached = false;
var startPosition : Vector3;
var checkpointPosition : Vector3;

var timeSinceLastHit = 0;
InvokeRepeating("Timer", 0, 1);

function Start () {
	LeafPositions();
	LeafRotations();
}

function Update () {

}

function OnCollisionEnter(collision: Collision) {
    if (collision.gameObject.tag == "Enemy" && HP > 1 && timeSinceLastHit > 3) {
        timeSinceLastHit = 0;
		Destroy(GameObject.FindWithTag("HPLeaf" + HP));
		HP -= 1;
		print("HPLeaf" + HP);
        GetComponent.<AudioSource>().Play();
		}
		
		else if (collision.gameObject.tag == "Enemy" && HP == 1 && timeSinceLastHit > 3)  {
		if (checkpointReached == false){
		Application.LoadLevel(0);
		}
		else if (checkpointReached == true) {
		transform.position = checkpointPosition;
		HP += 1;
		var resetLeaf : GameObject = Instantiate((Resources.Load("HPLeaf"+HP, GameObject)));
		resetLeaf.transform.parent = GameObject.FindWithTag("Player").transform;
		resetLeaf.transform.localPosition = (HPLeafPos2);
		resetLeaf.transform.localRotation = (HPLeafRot2);
		
		HP += 1;
		resetLeaf = Instantiate((Resources.Load("HPLeaf"+HP, GameObject)));
		resetLeaf.transform.parent = GameObject.FindWithTag("Player").transform;
		resetLeaf.transform.localPosition = (HPLeafPos3);
		resetLeaf.transform.localRotation = (HPLeafRot3);
		
		HP += 1;
		resetLeaf = Instantiate((Resources.Load("HPLeaf"+HP, GameObject)));
		resetLeaf.transform.parent = GameObject.FindWithTag("Player").transform;
		resetLeaf.transform.localPosition = (HPLeafPos4);
		resetLeaf.transform.localRotation = (HPLeafRot4);
		
		HP += 1;
		resetLeaf = Instantiate((Resources.Load("HPLeaf"+HP, GameObject)));
		resetLeaf.transform.parent = GameObject.FindWithTag("Player").transform;
		resetLeaf.transform.localPosition = (HPLeafPos5);
		resetLeaf.transform.localRotation = (HPLeafRot5);
		
		HP += 1;
		resetLeaf = Instantiate((Resources.Load("HPLeaf"+HP, GameObject)));
		resetLeaf.transform.parent = GameObject.FindWithTag("Player").transform;
		resetLeaf.transform.localPosition = (HPLeafPos6);
		resetLeaf.transform.localRotation = (HPLeafRot6);

		}
	}
	
	if(collision.gameObject.tag == "Health" && HP < 6) {
		HP += 1;
		var newHPLeaf : GameObject = Instantiate((Resources.Load("HPLeaf"+HP, GameObject)));
		newHPLeaf.transform.parent = GameObject.FindWithTag("Player").transform;
		if (HP == 6) {
		newHPLeaf.transform.localPosition = (HPLeafPos6);
		}
		else if (HP == 5) {
		newHPLeaf.transform.localPosition = (HPLeafPos5);
		}
		else if (HP == 4) {
		newHPLeaf.transform.localPosition = (HPLeafPos4);
		}
		else if (HP == 3) {
		newHPLeaf.transform.localPosition = (HPLeafPos3);
		}
		else if (HP == 2) {
		newHPLeaf.transform.localPosition = (HPLeafPos2);
		}
		else if (HP == 1) {
		newHPLeaf.transform.localPosition = (HPLeafPos1);
		}
	
		if (HP == 6) {
		newHPLeaf.transform.localRotation = (HPLeafRot6);
		}
		else if (HP == 5) {
		newHPLeaf.transform.localRotation = (HPLeafRot5);
		}
		else if (HP == 4) {
		newHPLeaf.transform.localRotation = (HPLeafRot4);
		}
		else if (HP == 3) {
		newHPLeaf.transform.localRotation = (HPLeafRot3);
		}
		else if (HP == 2) {
		newHPLeaf.transform.localRotation = (HPLeafRot2);
		}
		else if (HP == 1) {
		newHPLeaf.transform.localRotation = (HPLeafRot1);
		}
	
	
		print("HPLeaf" + HP);
	}
	
	if (collision.gameObject.tag == "Checkpoint") {
		Destroy(collision.gameObject);
		checkpointReached = true;
		checkpointPosition = collision.gameObject.transform.position;
	}

}

    function OnTriggerEnter(collision : Collider) {
        if (collision.gameObject.tag == "InstantDeath") {
            if (checkpointReached == false){
                Application.LoadLevel(0);
            }
            if (checkpointReached == true){
                transform.position = checkpointPosition;
            }
        }
    }

function LeafPositions() {
	HPLeafPos1 = GameObject.FindWithTag("HPLeaf1").transform.localPosition;
	HPLeafPos2 = GameObject.FindWithTag("HPLeaf2").transform.localPosition;
	HPLeafPos3 = GameObject.FindWithTag("HPLeaf3").transform.localPosition;
	HPLeafPos4 = GameObject.FindWithTag("HPLeaf4").transform.localPosition;
	HPLeafPos5 = GameObject.FindWithTag("HPLeaf5").transform.localPosition;
	HPLeafPos6 = GameObject.FindWithTag("HPLeaf6").transform.localPosition;
	
}

function LeafRotations() {
	HPLeafRot1 = GameObject.FindWithTag("HPLeaf1").transform.localRotation;
	HPLeafRot2 = GameObject.FindWithTag("HPLeaf2").transform.localRotation;
	HPLeafRot3 = GameObject.FindWithTag("HPLeaf3").transform.localRotation;
	HPLeafRot4 = GameObject.FindWithTag("HPLeaf4").transform.localRotation;
	HPLeafRot5 = GameObject.FindWithTag("HPLeaf5").transform.localRotation;
	HPLeafRot6 = GameObject.FindWithTag("HPLeaf6").transform.localRotation;
}

function Timer() {
    timeSinceLastHit += 1;
    print(timeSinceLastHit);
}