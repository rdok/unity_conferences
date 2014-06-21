#pragma strict
var bulletprefab : Rigidbody; 
var shootforce : int = 20;
var shootclip : AudioClip;
var spawningpoint : GameObject;


protected var avatar : Animator;

	function Start () 
	{
		avatar = GetComponent(Animator);
	}
    




function Update () {

if (Input.GetButtonDown("Fire1"))

	{
	var Bullet : Rigidbody = Instantiate(bulletprefab, spawningpoint.transform.position , spawningpoint.transform.rotation);
	Bullet.velocity = spawningpoint.transform.TransformDirection(Vector3 (0,0,shootforce));
	audio.PlayOneShot(shootclip); 
    avatar.SetBool("Shoot", true);	
	} 
	
	else ( avatar.SetBool("Shoot", false) );	
	
	
}


