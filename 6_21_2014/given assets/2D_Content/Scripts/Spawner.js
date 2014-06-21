// What comes after a flat object....

var prefab01 : GameObject;
var prefeb02 : GameObject;
static var totalblocks : int = 0;





var move: int = 12;
var upper : int = -1; 
var downer : int = 0;
private var thePosition = Vector3 (0,0,0);


function OnTriggerEnter2D (other :  Collider2D) {

totalblocks++;

			
var nextobject: int = Random.Range(1, 3);


					
		if (nextobject == 1)
			{
			prefab01.transform.position = transform.TransformPoint(move, downer, 0);
			
				
			}	
		
		if (nextobject == 2)
			{
			prefeb02.transform.position = transform.TransformPoint(move, upper, 0);
			}				
	
	
}


