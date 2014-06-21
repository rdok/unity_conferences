//var GrailDieSound : AudioClip;


//Player is collecting targets
function OnTriggerEnter () {

	//We attached the Spawned prefabs to their parent Spawnpoints so we could do the following:
	var adult: Spawnpoints=transform.parent.gameObject.GetComponent("Spawnpoints");
	
	//We are clearing the decks so we can mark this spot available again!
	adult.available=true;
	
	//Render data to screen, using static variables 
	KeepTrackOfObjects.DestroyedNumber++;
	//KeepTrackOfObjects.TotalNumber--;
	//KeepTrackOfObjects.Lifes--;
	//audio.PlayClipAtPoint(GrailDieSound, transform.position);
	
	
	//other code here if required
	
	Destroy(gameObject);
	
}
@script AddComponentMenu("DW3D/ Pickup Destry and Reset")
//code by Aaron Cross http://deepwater3d.com





