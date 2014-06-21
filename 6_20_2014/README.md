# Unity development on Windows.

### Time
Date: 6/20/2014
Speaker: Carl Callewaert
Lead Technical Evangelist, Unity


Talker: 
- Presessions
- Preparation for next two days.


Feeligs :excited to be in the greeece. His first degree is architecture. 
- Majority of attendees beginner level.
- tomorrow a 2d game (maybe)

##Rules
- Mr. Callewaert first shows what to do.
- Break it to steps.  You don't touch the computer. you can make notes but NOT coding. THIS IS LEARNING CYCLE. IT'S IMPORTANT TO  TO FOllow the steps.  Goal here: when getting out of class each and every one can do what Mr. Callewaert did during these tw hours. 


## Objective: Make an island. and pick those items befor ethey are destroyed.
1. Create the environment. hills and tectures.  
2. Make it first person.
3. Create red cubes.
4. Create c# scripts to  rotate cubes. Dissapear after 10s.
5. Player grabs this cubes when near; when achieved -> cube dissapears after leaving animation.


## Start project.

1. create project. (unity pcakges are update - free)
 
2. use package for first person. activae characger control.

3. Select layout 2 by 3.

4. Creaate terrain
 - Game object -> create terrarin -> double click on terrain -> onsettings -> modify terrain from 2000 to 100 meters.   
 - Then doulbe click on terrain.
 - tomorrow this also  will happen. 

5. Paint terrain
 - double click on terrain -> click on first of settings for paint up. create valley.
 - paint (brush size,  two settings the more you paint the higher it done)  (next settings  - opacity)  create a valley.
 

6. Paint colors,, gras, (alt helps look around. )
 - 4th seettings (bursh) -> edit tecture -> you don't find anything cool . However, unit provides some easi textures:
 - assets -> import package -> terrain assets. -> edit texture add texture -> NOT a normal map. textures. then choose cliff texture. 
  - bush to paint up (first on bar this texture apply o all terrian. (add texture, select sand, add then click on sand (blue line on the bottom) then start painting apint a little the hills.  Add texture, grass hill. then select the grass and start using it.   -- choose bruch 1, 5 row) - brush size )
  - paint texutre : paint brush - 4th tools. add textures, pick texture you want and select add..  The first texgture you applly will go to all terrain. 

7. create hero, put character above feild, create light.   play mode  will ot store any changes!!!! YOU HAVE TO STOP the game.
 - gamme objects -> create other -> directional light. -> rotate light, actie shaddows after selecting light. (shadoes sfere  
 - TOOL: (maximize viewpost _ shift + space bar))
 - RECAP: assets folder -> character cotnrol, select first person & drag it to tyyour scene -> select f to focus on the rpoject, and move it on top of the island. 
 -  game orject, create other, directoioanl light, from to ternity. --> select hard shadows, - intenity -> 1. 

8. create trees & sky.
 - assets -> import package -> skybox -> library -> import all. (library of different sky boxes) click on sky box on assets, ch
 - edit -> reneder settings -> skybox material -> (now it's none) -> click on circle with '.' click select your sky preferences) then press play- test with with play & quiz.
 - double on terrain, then 5th setting -. trees - (no trees defined) edit trees, add trees, browser, add tree,  then pain. (shift and paitn -- removes)
 - ave project, then save scene. (when you project -- sets all up fo ryour & while sence (you can mutliple - levels) save scene as (001)you'll rarely gonna save projects. )
 
9. Scripting.
 - create simple object: game object -> cube -> f - zooom in. how to destroy thi scube. a script is needed.
 - Create -> Any professional game studio will use C#;  all the maunual are in c#.
 - open script - monodevelop    (tomorrow will also cover art side -- you can a step further)
 - start() will redner first object in scene.  (help -> unit manualy -> destroy -> object destryo -> take example - show c#  copyy destory ojbect after 10 seconds. (Destory(gameObject, 5);))
 - take script and drag to the object you want to destroy.  (it rmoves from the memory - there exist a profileer - check cpu, gput, memory, physics, 2d, etc... )  (if you connect to  a device you can profile to the devce)
 - recap: crate -> c# -> open it ->  at void start: Destroty (gameObject, 5); // destory after 5 seconds
 - drag it to your cube.
	// creating terrains.(you can use terrains from different pieces -- e.g. from maja take terrain with no trees and trees from other.)

10. public - chnages from gui - setting seconds from UI.
 - modify script: add: public float lifeTime = 5f;
 - ctrl + r = refresh.
 - protect code using 2dl?.

11. rotate script.
 - public float speed = 50.0f;
 - void Update() { var spinAmount  = Time.deltaTime * speed; // delta time counts machinve frames 
 - transform.Rortate(0, spinAmount, 0)}

12. collider. (will run only when it hits.) 
 - give second name. general name for apple.orange (fruits)  at the moment you can add only one name.
 - drag scritp on first person.
 - click crube -- add tag - Add tag: 'ammo'

13. Create Fire.
 - game boject -> cratea nother -> particles -> start life -> brin to one seconds emission -> 200, chang ecolor, chang erotation
 - add code when hitting: Instantie(prefab, transofrm,.position, Quaternion.identity);
 - need tweek -> create empty object (placeholder -- rottation z, 0, , make particle a child of this placeholder.--> span on game object emition druate -200, clidk an ddrag on game boject (particle underl placeholder.))

14. drag and rop objec to assets the GameObject.
 - recap: drag particle, to object. delte form system. go to script and write instnaitet 
 - go to first person, and drag ad drop to the script the placehholder object)

15. Export to desktop.
 - file -> buld settings -> add current. ((tomorrow multipel scenes) target windows -> player settings -> drag and rop your own icons -> full screen, icon, splash image, tomorrow -> over what's dynamic basting -. drawcalls, fil rate, performance.
 - build & run.   test for desktop.  (future every package will be mobile & desk)

##tomorow: contanct info.
	check internet & download asset.
 	proseleusi aptis 9:00
