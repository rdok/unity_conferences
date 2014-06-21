

var gSkin : GUISkin;
var scorelevel : String[];
var startup: AudioSource;




function OnGUI()
{

	if(gSkin)
		GUI.skin = gSkin;
	else
		Debug.Log("StartMenuGUI : GUI Skin object missing!");
			
		
if (GUI.Button (Rect (23,180, 281, 70), ""))

		{	
		loading_new_game();
		}
		
}


function loading_new_game() 
{ 

yield new WaitForSeconds (0.1); 
Application.LoadLevel("mygame");
}	





	
