//The all important variable: Can I spawn here?>
var available=true;

function OnDrawGizmos () {
	//have an "s" so you know where they are
	Gizmos.DrawIcon (transform.position, "spawn.psd");
}
@script AddComponentMenu("DW3D/ Spawnpoints")
//code by Aaron Cross http://deepwater3d.com