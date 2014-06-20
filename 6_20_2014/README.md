# Unity development on Windows.

## Time
Date: 6/20/2014
Speaker: Carl Callewaert
Lead Technical Evangelist, Unity


Talker: 
- Presessions
- Preparation for next two days.


Speaker: Carl Callewaert - starts.

-He's excited to be in the greeece. he's first degree is architecture. 
- general class is beginner.
- tomorrow a 2d game.

Rules
- shows what are we gonnad o.
- break it to steps.  you don't touhc the computer. you can make notes but NOT coding. THIS IS LEARNIGN CYCLE. IT'S IMPORTANT TO  TO FOllow the steps.  reaons for this is that when we walk from thris roo. we can do this. 


## Objective.
- Make an island. and pick those items befor ethey are destroyed.
1. create the environment. hills and tectures.  
- make it first person.
- then create cubeses (red)
- then create a scirpt using c# to make cubes rotate. then dissapre after 10 seconds.


# Start project.

1. create project.

(unity pcakges are update - free)
 
2. use package for first person. activae characger control.

3. Select layout 2 by 3.

4. Game object -> create terrarin -> double click on terrain -> onsettings -> modify terrain from 2000 to 100 meters.  Then doulbe click on terrain.
// tomorrow this also  will happen. 

5. double click on terrain -> click on first of settings for paint up. create valley.
// paint (brush size,  two settings the more you paint the higher it done)  (next settings  - opacity)  create a valley.
 

 6. Paint colors,, gras, (alt helps look around. )
 - 4th seettings (bursh) -> edit tecture -> you don't find anything cool . However, unit provides some easi textures:
  -- assets -> import package -> terrain assets. -> edit texture add texture -> NOT a normal map. textures. then choose cliff texture. 
  - bush to paint up (first on bar this texture apply o all terrian. (add texture, select sand, add then click on sand (blue line on the bottom) then start painting apint a little the hills.  Add texture, grass hill. then select the grass and start using it.   -- choose bruch 1, 5 row) - brush size )
  - paint texutre : paint brush - 4th tools. add textures, pick texture you want and select add..  The first texgture you applly will go to all terrain. 

 7. create hero, put character above feild, create light.   play mode  will ot store any changes!!!! YOU HAVE TO STOP the game.
 -> gamme objects -> create other -> directional light. 
 	-> rotate light, actie shaddows after selecting light. (shadoes sfere  
 	TOOL: (maximize viewpost _ shift + space bar))

 	RECAPR: assets folder -> character cotnrol, select first person & drag it to tyyour scene -> select f to focus on the rpoject, and move it on top of the island. 
 	-> game orject, create other, directoioanl light, from to ternity. --> select hard shadows, - intenity -> 1. 

8. create trees & sky.
- assets -> import package -> skybox -> library -> import all. (library of different sky boxes) click on sky box on assets, ch
 - edit -> reneder settings -> skybox material -> (now it's none) -> click on circle with '.' click select your sky preferences) then press play- test with with play & quiz.

 - double on terrain, then 5th setting -. trees - (no trees defined) edit trees, add trees, browser, add tree,  then pain. (shift and paitn -- removes)

 - ave project, then save scene. (when you project -- sets all up fo ryour & while sence (you can mutliple - levels) save scene as (001)you'll rarely gonna save projects. )


 
9. Scripting.
create simple object: game object -> cube -> f - zooom in. how to destroy thi scube. a script is needed.
	 - Create -> Any professional game studio will use C#;  all the maunual are in c#.
	 - open script - monodevelop    (tomorrow will also cover art side -- you can a step further)
	 - start() will redner first object in scene.  (help -> unit manualy -> destroy -> object destryo -> take example - show c#  copyy destory ojbect after 10 seconds. (Destory(gameObject, 5);))
	 	-take script and drag to the object you want to destroy.  (it rmoves from the memory - there exist a profileer - check cpu, gput, memory, physics, 2d, etc... )  (if you connect to  a device you can profile to the devce)

	recap: crate -> c# -> open it ->  at void start: Destroty (gameObject, 5); // destory after 5 seconds
	drag it to your cube.


	// creating terrains.(you can use terrains from different pieces -- e.g. from maja take terrain with no trees and trees from other.)

10. public - chnages from gui - setting seconds from UI.
	modify script: add: public float lifeTime = 5f;
	// ctrl + r = refresh.

	- protect code using 2dl.
	- alchemy - game studio - multipath. sell the script you create for a game.