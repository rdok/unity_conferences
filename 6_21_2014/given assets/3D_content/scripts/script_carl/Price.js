

var CollectSound : AudioClip;

function OnControllerColliderHit(hit:ControllerColliderHit){

	if(hit.gameObject.tag == "lucky"){
		Destroy(hit.gameObject);
		audio.PlayOneShot(CollectSound);
		yield WaitForSeconds (2);
		Application.LoadLevel("youwon");		
	}	
	
}