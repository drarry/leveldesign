using UnityEngine;
using System.Collections;

public class KeyItem : MonoBehaviour {
	void OnTriggerEnter(Collider collider) {
		if(collider.gameObject.name == "Player") {
			GameVariables.keyCount1+=1; 
			Destroy (gameObject);
		}
	}
}