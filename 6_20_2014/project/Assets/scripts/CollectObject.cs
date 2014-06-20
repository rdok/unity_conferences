using UnityEngine;
using System.Collections;

public class CollectObject : MonoBehaviour {
	public GameObject prefab;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnControllerColliderHit(ControllerColliderHit hit) {
		if (hit.gameObject.tag == "ammo") {
			Destroy(hit.gameObject);
			// animation fire
			Instantiate(prefab, transform.position, Quaternion.identity);
		}
	}

}
