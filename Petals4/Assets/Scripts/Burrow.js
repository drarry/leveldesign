#pragma strict

var capCol : CapsuleCollider;
var isBurrowed = false;
var DustStorm : Transform;
//var controls : UnityStandardAssets.Characters.ThirdPerson.ThirdPersonCharacter;
//var controls2 : UnityStandardAssets.Characters.ThirdPerson.ThirdPersonUserControl;
//var comp : Array;   Array to list all player components in'
var canBurrow = false;


function Start () {
	capCol = GetComponent(CapsuleCollider);
	//controls = GetComponent(UnityStandardAssets.Characters.ThirdPerson.ThirdPersonCharacter);
	//controls2 = GetComponent(UnityStandardAssets.Characters.ThirdPerson.ThirdPersonUserControl);
	//comp = GetComponents(typeof(Component));  Fills array with player components

}

function Update () {
    if (canBurrow == true) {
        if ((isBurrowed == false) && (Input.GetKeyDown(KeyCode.LeftControl))) {
            Burrow();
        }
        if ((isBurrowed == true) && (Input.GetKeyDown(KeyCode.LeftControl))) {
            Hatch();
        }
    }
}

function Burrow() {
			//controls.enabled = false;
			//controls2.enabled = false;

			capCol.enabled = false;
			
			var dust = Instantiate(DustStorm, transform.position, transform.rotation);
			dust.gameObject.tag = "Clone";
			
			yield WaitForSeconds(0.6);
			capCol.enabled = true;
			isBurrowed = true;
			yield WaitForSeconds(1.5);
			Destroy(GameObject.FindWithTag("Clone"));
}

function Hatch() {
			//print(comp);  Prints all player components in console
			//Destroy(gameObject);
			isBurrowed = false;
			transform.position += Vector3.up * Time.deltaTime * 400 ;//Make Player hatch back up above ground
			var dust = Instantiate(DustStorm, transform.position, transform.rotation);
			DustStorm.gameObject.tag = "Clone";
			//controls.enabled = true;
			//controls2.enabled = true;
			yield WaitForSeconds(1.5);
			Destroy(GameObject.FindWithTag("Clone"));

}

function OnTriggerEnter(collider : Collider) {
    if(collider.gameObject.tag == "BurrowTrigger") {
        canBurrow = true;
    }
}

    function OnTriggerExit(col : Collider) {
        canBurrow = false;
    }
