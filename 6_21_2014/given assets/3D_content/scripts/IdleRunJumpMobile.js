 //import UnityEngine;
//import System.Collections;

class IdleRunJumpMobile extends MonoBehaviour {
	protected  var animator : Animator;
	 var DirectionDampTime : float= .25f;
	 var ApplyGravity : boolean= true; 
	private  var m_VerticalSpeed : float= 0;
	
	 private var joystickLeft : Joystick;
	 private var joystickRight : Joystick;
	 public var joystickPrefab : GameObject;
     private var joystickRightGO : GameObject;
     var mobilewave = false;
     var jumpmobile = false;
    
	
	function Awake ()  {
		if(gameObject.tag != "Player")
			gameObject.tag="Player";
			
		#if UNITY_IPHONE || UNITY_ANDROID
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
			
		#if UNITY_IPHONE || UNITY_ANDROID
		// Move to right side of screen
		var guiTex : GUITexture = joystickRightGO.GetComponent.<GUITexture> ();
		guiTex.pixelInset.x = Screen.width - guiTex.pixelInset.x - guiTex.pixelInset.width;			
	    #endif		
			
	}
		
	// Update is called once per frame
	function Update () : void {
	


		//if (animator)
		//{
			 var stateInfo : AnimatorStateInfo= animator.GetCurrentAnimatorStateInfo(0);
			 
			// set here jump to active if the tapvalue of rightjoystick was more or equal to 2  
			//if (  ){
		//	
			
		//	}
		//													

	        //to active the Jump in Standalone 
			if (stateInfo.IsName("Base Layer.Run"))
			{
				if ((Input.GetButton("Fire1"))  || (jumpmobile == true ) )              animator.SetBool("Jump", true); 	   
											                            
            }
			else
			{
				animator.SetBool("Jump", false);		              
            }
            
            
            
                   
            
            //to active the hi in mobile and standalone 
			if((mobilewave == true  && animator.layerCount >= 2) || (Input.GetButtonDown("Fire2") && animator.layerCount >= 2))
			{
				animator.SetBool("Hi", !animator.GetBool("Hi"));
				print ("hellooooooo");
				mobilewave = false;	
				
			}
			else if (animator.GetBool ("Hi"))
			{
			    mobilewave = false;	
				animator.SetBool("Hi", false);
				print ("charlie");
			}
			
		
			
				#if UNITY_IPHONE || UNITY_ANDROID
	   				var v : float = joystickLeft.position.y;
       				var h : float = joystickLeft.position.x;
				#else 
	 				 var h : float= Input.GetAxis("Horizontal");
        			 var v : float= Input.GetAxis("Vertical");		
	           #endif
		
			
			animator.SetFloat("Speed", h*h+v*v);
            animator.SetFloat("Direction", h, DirectionDampTime, Time.deltaTime);	
		}   		  
	}

	function OnAvatarMove () : void {
		 var controller : CharacterController= GetComponent(CharacterController);

		if (controller && animator)
		{

			 var deltaPosition : Vector3= animator.deltaPosition;
			if(ApplyGravity)
			{			
				m_VerticalSpeed += Physics.gravity.y * Time.deltaTime;						
				deltaPosition.y = m_VerticalSpeed * Time.deltaTime;
			}
			if (controller.Move(deltaPosition) == CollisionFlags.Below) m_VerticalSpeed = 0;			
			transform.rotation = animator.rootRotation;
		}
	}     
//}


function OnGUI()
{

			
if (GUI.Button (Rect ((Screen.width * 0.5) - 50 , 300, 300, 90), "Shoot"))

		{	
		mobilewave = true;
}
		
		

		
}

