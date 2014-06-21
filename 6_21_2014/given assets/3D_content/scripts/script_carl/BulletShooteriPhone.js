var myBulletPrefab : Rigidbody;
var ShootForce : int = 20;
//var ShootClip : AudioClip;
//var gunloaded : boolean = true;
var gun : GameObject;
static var ammo : int = 100;

function OnGUI () {
	
	
	if (GUI.Button (Rect (Screen.width - 150, Screen.height - 150, 100, 30), "Shoot")){
	
	
		if( ammo > 0 ) {	
			
			var Bullet : Rigidbody = Instantiate(myBulletPrefab, transform.position, transform.rotation);
			Bullet.velocity = transform.TransformDirection(Vector3 (0,0,ShootForce));	
			//Physics.IgnoreCollision(Bullet.collider, transform.root.collider);
			//audio.PlayOneShot(ShootClip);
			gun.animation.Play ("shoot");
			gun.animation.PlayQueued ("idle");
		    //gunloaded = false;
		    ammo = ammo - 1;
		
		}
	
	}

}
