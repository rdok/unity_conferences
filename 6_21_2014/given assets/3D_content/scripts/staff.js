 //import UnityEngine;
//import System.Collections;

@script RequireComponent(CharacterController)

class staff extends MonoBehaviour {
	protected  var animator : Animator;
	var DirectionDampTime : float= .25f;
	var ApplyGravity : boolean= true; 
	 
	private var joystickLeft : Joystick;
	var joystickRight : Joystick;
	public var joystickPrefab : GameObject;
	private var joystickRightGO : GameObject;
	private var thisTransform : Transform;

	var forwardSpeed : float = 4;
	var backwardSpeed : float = 4;
	var sidestepSpeed : float = 4;
	
	var rotatationSpeed = 10.0;

	var speed = 3.0;

	private var curSpeed = 0.0;

	private var characterController : CharacterController;


	function Awake () {		
	
	#if UNITY_IPHONE || UNITY_ANDROID || UNITY_METRO || UNITY_WP8
	
		if (joystickPrefab) {
			// Create left joystick
			var joystickLeftGO : GameObject = Instantiate (joystickPrefab) as GameObject;
			joystickLeftGO.name = "Joystick Left";
			joystickLeft = joystickLeftGO.GetComponent.<Joystick> ();
			
			// Create right joystick
			joystickRightGO = Instantiate (joystickPrefab) as GameObject;
			joystickRightGO.name = "Joystick Right";
			joystickRight = joystickRightGO.GetComponent.<Joystick> ();			
		}
		
	#else 
		
		
		
	#endif
	
}


	// Use this for initialization
	function Start () : void {
		animator = GetComponent(Animator);
		
		if(animator.layerCount >= 2)
			animator.SetLayerWeight(1, 1);
			
			
			
			
		#if UNITY_IPHONE || UNITY_ANDROID || UNITY_METRO || UNITY_WP8
		// Move to right side of screen
		var guiTex : GUITexture = joystickRightGO.GetComponent.<GUITexture> ();
		guiTex.pixelInset.x = Screen.width - guiTex.pixelInset.x - guiTex.pixelInset.width;			
	    #endif	
	       
	
	characterController = GetComponent (CharacterController);
			
	}
		
	// Update is called once per frame
	function Update () : void {

		if (animator)
		{
			 var stateInfo : AnimatorStateInfo= animator.GetCurrentAnimatorStateInfo(0);			

			if (stateInfo.IsName("Base Layer.Run"))
			{
				if (Input.GetButton("Fire2")) animator.SetBool("Jump", true);                
          }
			else
			{
				animator.SetBool("Jump", false);                
            }

			if(Input.GetButtonDown("Fire1") && animator.layerCount >= 2)
			{
				animator.SetBool("Shoot", !animator.GetBool("Shoot"));
			}
				else
			{
				animator.SetBool("Shoot", false);                
            }
            
            
            var moveForward : float;
			var moveSidestep : float;
			var lookSideways : float;


			#if UNITY_IPHONE || UNITY_ANDROID
	
			moveForward = joystickLeft.position.y ;
			moveSidestep = joystickLeft.position.x  ;
			lookSideways = joystickRight.position.x * 0.2;


			#else 
		
			moveForward = Input.GetAxis ("Vertical");
			moveSidestep = Input.GetAxis ("Horizontal");
			lookSideways = Input.GetAxis ("Mouse X");
		
			#endif

			
		
      		// var h : float= Input.GetAxis("Horizontal");
        	// var v : float= Input.GetAxis("Vertical");
			
			animator.SetFloat ("Frontback", moveForward, DirectionDampTime, Time.deltaTime );
			animator.SetFloat ("Leftright", moveSidestep , DirectionDampTime, Time.deltaTime );
			
			
          
           
           	var rotationDelta : Quaternion = Quaternion.AngleAxis (lookSideways * rotatationSpeed, transform.up);
	
			transform.rotation *= rotationDelta;
           
		}   		  
	}
}
