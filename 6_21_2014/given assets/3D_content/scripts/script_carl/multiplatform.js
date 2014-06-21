#pragma strict

// Objects to drag in

 var mobilecharacter : GameObject;
 var keyboardmousecharacter : GameObject;
 var joystickPrefab : GameObject;


function Awake () {

	
	#if UNITY_IPHONE || UNITY_ANDROID
	
			mobilecharacter.SetActiveRecursively(true);
			keyboardmousecharacter.SetActiveRecursively(false);
			joystickPrefab.SetActiveRecursively(true);
		
		
	#else
			mobilecharacter.SetActiveRecursively(false);
			keyboardmousecharacter.SetActiveRecursively(true);
			joystickPrefab.SetActiveRecursively(false);
	   
	#endif
	
}