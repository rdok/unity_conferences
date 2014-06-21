
var died : AudioClip;

function OnControllerColliderHit(hit:ControllerColliderHit){

	if(hit.gameObject.tag == "bad"){
		
		audio.PlayOneShot(died);
		yield WaitForSeconds (1.1);
		Application.LoadLevel("youlose");	
	}	
	
}