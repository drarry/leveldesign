using UnityEngine;
using System.Collections;

public class Walking : MonoBehaviour {

	// Use this for initialization
	public float walkSpeed;
    public float wallLeft;
    public float wallRight;
	float walkingDirection;
	Vector3 walkAmount;

    void Start () {
        walkSpeed = 2.0f;
        wallLeft = GameObject.Find("Enemy").transform.position.x - 2.0f;
        wallRight = GameObject.Find("Enemy").transform.position.x + 2.0f;
        walkingDirection = 1.0f;
}
	// Update is called once per frame
	void Update () {
		walkAmount.x = walkingDirection * walkSpeed * Time.deltaTime;
		if (walkingDirection>0.0f && transform.position.x >=wallRight)
		{//switch directions	
			walkingDirection = -1.0f;
		}
		else if (walkingDirection < 0.0f && transform.position.x <= wallLeft)
		{//switch directions
			walkingDirection = 1.0f;
		}
		transform.Translate(walkAmount);
	}
}
