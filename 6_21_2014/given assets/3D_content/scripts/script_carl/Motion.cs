using UnityEngine;
using System.Collections;

public class Motion : MonoBehaviour {
	
	Animator animator;
	NavMeshAgent navMeshGuy;
	
	// Use this for initialization
	void Start () {
		animator = GetComponent<Animator>();
		navMeshGuy = GetComponent<NavMeshAgent>();
	}
	
	// Update is called once per frame
	void Update () {
		Vector3 velocityXZ = new Vector3(navMeshGuy.velocity.x, 0.0f , navMeshGuy.velocity.z);
		float speed = velocityXZ.magnitude;
		animator.SetFloat("Speed", speed);
	}
}
