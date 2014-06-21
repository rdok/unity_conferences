#pragma strict

function OnTriggerEnter () {
	Debug.Log ("Trigger! " + gameObject.name);
}

function OnCollisionEnter () {
	Debug.Log ("Collision! " + gameObject.name);
	Destroy (gameObject);
}