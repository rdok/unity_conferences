


function OnControllerColliderHit (hit : ControllerColliderHit) {
	
	if (hit.gameObject.tag == "ammo") {
	    RocketLauncher.ammoCount = RocketLauncher.ammoCount + 20;
	    BulletShooter.ammo = BulletShooter.ammo + 50;
		Destroy(hit.gameObject);
	}
}



