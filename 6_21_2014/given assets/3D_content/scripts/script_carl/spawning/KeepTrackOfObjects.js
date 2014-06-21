//Store data internally>
//static var SpawnNumber: int=0;
static var DestroyedNumber: int=0;
//static var TotalNumber: int=0;
//static var Lifes: int=3;

//render it to user>
//var SpawnNumberText: GUIText;
var DestroyedNumberText: GUIText;
//var TotalNumberText: GUIText;
//var LifesText: GUIText;

function Start() {
//SpawnNumber = 0;
DestroyedNumber = 0;
//TotalNumber = 0;
//Lifes = 3;
	
}

function Update () {
	//A
	//SpawnNumberText.text=("Total Spawned="+SpawnNumber.ToString());
	//B
	DestroyedNumberText.text=("Picked Up: "+DestroyedNumber.ToString());
	
	//A-B=
	//TotalNumberText.text=("Total Prefabs="+TotalNumber.ToString());
	
	//Life
	//LifesText.text=("Lifes: "+Lifes.ToString());
}
@script AddComponentMenu("DW3D/ Keep Track Of Objects")
//code by Aaron Cross http://deepwater3d.com