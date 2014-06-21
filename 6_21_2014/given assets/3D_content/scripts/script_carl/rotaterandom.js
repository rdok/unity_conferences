var speed : float = 50.0;

function Update () {
	
	var spinAmount = Time.deltaTime * speed; 
	transform.Rotate(0, spinAmount, 0);
	
}