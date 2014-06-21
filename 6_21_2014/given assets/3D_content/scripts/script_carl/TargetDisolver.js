var timeout= 5.0;
function Start () {
yield WaitForSeconds (timeout);

//We attached the Spawned prefabs to their parent Spawnpoints so we could do the following:
var adult: Spawnpoints=transform.parent.gameObject.GetComponent("Spawnpoints");

//We are clearing the decks so we can mark this spot available again!
adult.available=true;
Destroy(gameObject);

}