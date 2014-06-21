var Cat:GameObject;
var Dog:GameObject;
var Monkey:GameObject;
var Grail:GameObject;

//this changes every second>
private var spawnLocation:Transform;

//So does this>
private var ourPrefab: GameObject;

function Start () {
	
	//pick up the kids
	var ourObjects = GetComponentsInChildren (Transform);
	
	//check their have their lunchboxes
	var ourObjectColliders = GetComponentsInChildren (BoxCollider);
	
	// get them all together and give them instructions.Note this also affects that parent
	for (var ourObject : Transform in ourObjects) 
	{
		ourObject.gameObject.AddComponent("Spawnpoints");
		ourObject.gameObject.renderer.enabled=false;
	}
	
	for (var ourObjectCollider : Collider in ourObjectColliders) 
	{
		//we could do this on the child objects in Start() but hey it doesnt matter
		ourObjectCollider.isTrigger=true;
	}
	
	//we dont need one on this object, the parent, only the children, therefore:
	var meh=GetComponent("Spawnpoints");
	Destroy(meh);
	
	
	//here we go through the spawnpoints and choose one at random. 
	//then we spawn one of the randomly chosen prefabs at the random spawnpoint
	
	while(true)
	{
		spawnLocation=ourObjects[Random.Range(0,ourObjects.Length)];
	//This one is the prefab chooser>
		var choice=Random.Range(0,4);
	
	if(choice==0)
	{
		//Uncomment if required
	//Debug.Log("choice = 0, instantiate Cat!");
	ourPrefab=Cat;
	}
		if(choice==1)
	{
	//Debug.Log("choice = 1, instantiate Dog!");
	ourPrefab=Dog;
	}
		if(choice==2)
	{
	//Debug.Log("choice = 2, instantiate Monkey!");
	ourPrefab=Monkey;
	}
	
		if(choice==3)
	{
	//Debug.Log("choice = 3, instantiate Grail!");
	ourPrefab=Grail;
	}

	//Theres a boolean called availability on each spawnpoint child to say whether its available as an empty spawnpoint or not.
	var Availability : Spawnpoints = spawnLocation.gameObject.GetComponent("Spawnpoints");
	
	//This makes sure the parent doesnt get used, as it has no script on it. 
	if(Availability)
		
		//is it available?
		if(Availability.available==true){
			//the transform in question hasnt been used so lets mark it so we dont use it again.
			Availability.available=false;
		
			// We code it like this because you cannot manually set the parent of a prefab, 
			// It threw a warning about data corruption.
			var clone : GameObject;;
				clone = Instantiate(ourPrefab, spawnLocation.transform.position,spawnLocation.transform.rotation);
				
				//we give it a direct connection to its spawnpoint, 
				//so when its destroyed, it can make its parent available for spawning again.
				clone.gameObject.transform.parent=spawnLocation;
				
				//Using static vars we manipulate the onscreen guitext
				//KeepTrackOfObjects.SpawnNumber++;
				//KeepTrackOfObjects.TotalNumber++;
				
				//heres your pause
				yield WaitForSeconds(1);
		}
		else
		{
			//uncomment the next line if required, the script tests if the spawn location is avaliable, and if not you can uncomment the next line to advise you. Optional.
			//Debug.Log("wasnt available!");
		
		}
		//wait one frame to avoid infinite loops where the engine locks up
		yield;
		
	}

}
@script AddComponentMenu("DW3D/ Set Up SpawnPoints")
//code by Aaron Cross http://deepwater3d.com