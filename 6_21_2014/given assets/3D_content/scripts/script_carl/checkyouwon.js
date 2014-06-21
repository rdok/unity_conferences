static var points : int = 0;

function Update(){
	
	if (BulletHit.score == 2){
	points == clock.timeLeft.ToString("f0");
	PlayerPrefs.SetInt("scorelevel1", points);
	BulletHit.score = 0;
	Application.LoadLevel("youwon");
		
	}
	
	
	
}
