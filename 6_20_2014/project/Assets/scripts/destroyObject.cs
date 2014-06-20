using UnityEngine;
using System.Collections;

public class DestroyObject : MonoBehaviour {
	public float lifeTime = 5f;

	// Use this for initialization
	void Start () {
		Destroy (gameObject, lifeTime);
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
