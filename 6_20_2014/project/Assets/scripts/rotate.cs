using UnityEngine;
using System.Collections;

public class rotate : MonoBehaviour {

	public float speed = 50.0f;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		var spinAmount = Time.deltaTime * speed;
		transform.Rotate (0, spinAmount, 0);
	}
}
