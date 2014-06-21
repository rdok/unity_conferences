

static var score : int = 0;
var Explosion : GameObject;

function OnCollisionEnter(collision:Collision){
	

		
		score++;
		Destroy(gameObject);
		Destroy(collision.gameObject);
		Instantiate(Explosion, transform.position, transform.rotation);

}



