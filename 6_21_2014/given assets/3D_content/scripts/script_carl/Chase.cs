using UnityEngine;
using System.Collections;

public class Chase : MonoBehaviour {

	public float speed=0.1f;
	public GameObject target;
	// Use this for initialization
	void Start () {
		GameObject[] obj=GameObject.FindGameObjectsWithTag("Player");
		target=obj[0];
	}
	
	// Update is called once per frame
	void FixedUpdate () {
		Vector3 pos=transform.position;
		if (target.transform.position.x < pos.x)	pos.x-=speed;
		if (target.transform.position.x > pos.x)	pos.x+=speed;
		if (target.transform.position.z < pos.z)	pos.z-=speed;
		if (target.transform.position.z > pos.z)	pos.z+=speed;
		transform.position=pos;
	}
}
