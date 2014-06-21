

var CollectSound : AudioClip;
var Explosion : GameObject;


function OnControllerColliderHit(hit:ControllerColliderHit){

	if(hit.gameObject.tag == "box"){
	audio.PlayOneShot(CollectSound);
	Destroy(hit.gameObject);
	Instantiate(Explosion, transform.position, transform.rotation);
	
	}	
	
}