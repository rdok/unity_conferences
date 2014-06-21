


function OnControllerColliderHit (hit : ControllerColliderHit) {
	
	if(hit.gameObject.tag == "ammo"){
		BulletShooteriPhone.ammo = 15;
		Destroy(hit.gameObject);
	}
}



