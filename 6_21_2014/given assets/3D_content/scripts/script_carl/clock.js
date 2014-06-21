static var timeLeft = 100;
static var timeTotal = 100;


function Update () { 
	
timeLeft = timeTotal - Time.timeSinceLevelLoad;

if (timeLeft <= 0) 
{
	Application.LoadLevel("gameover");
	
}
} 

