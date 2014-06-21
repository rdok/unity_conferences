#pragma strict
var bulletprefab : Rigidbody; 
var shootforce : int = 20;
var shootclip : AudioClip;
var mygun : GameObject; 






function Update () {

if (Input.GetButtonDown("Fire1"))

	{
	var Bullet : Rigidbody = Instantiate(bulletprefab, transform.position ,transform.rotation);
	Bullet.velocity = transform.TransformDirection(Vector3 (0,0,shootforce));
	audio.PlayOneShot(shootclip); 
	mygun.animation.Play("shoot");
	mygun.animation.PlayQueued("idle");
	} 

}