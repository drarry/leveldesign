using UnityEngine;
using System.Collections;

public class KeyGate1 : MonoBehaviour {

	void OnTriggerEnter(Collider collider) {
		if(collider.gameObject.name == "Player" && GameVariables.keyCount1>0) {
			GameVariables.keyCount1--;
			Destroy (gameObject);
		}
	}
}
