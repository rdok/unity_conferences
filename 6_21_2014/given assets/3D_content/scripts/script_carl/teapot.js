




function OnControllerColliderHit(hit:ControllerColliderHit){

	if(hit.gameObject.tag == "target"){
	
		Destroy(hit.gameObject);
			
	 
	}	
	
}