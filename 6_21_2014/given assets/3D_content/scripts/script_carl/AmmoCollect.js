

//var CollectSound : AudioClip;


function OnControllerColliderHit(hit:ControllerColliderHit){

	if(hit.gameObject.tag == "ammo"){
	
		Destroy(hit.gameObject);
	
		
	    BulletShooter.ammo = 1000;
		//audio.PlayOneShot(CollectSound);
	}	
	
}