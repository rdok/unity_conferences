# 2D & 3D side scroller

This session is for beginners and intermediate user. We will cover on how to make a 2D and 3D side scroller from importing the assets to exporting to W8. The topics that will be covered: Animation with Mecanim, 2D, 3D pooling, scripting, particles, storing high score, triggers, physics. The workshop will end with a presentation on the features of the upcoming version Unity 4.6 (UGUI) and Unity 5.

## Jaime Rodriguezs
Principal Program Manager, Microsoft Corp


# 10.00-11.40	Opening Keynote

- wokring on windows fo rmore than 10 yerrs. stron gpreseence with games. Ove th last 4 hours they've working hard. There has never been a better time to write a game. We've gone to the point of writing one game for mulitple devices.

Threes things:
- convergence
- middleware
	making sure working across platforms.
- great programs for gamesrs. really great time to get started writing games.

### Micsrosfot platorm
- laptop, xbox, mobile. all on one platform. all are baesed on API. 

- only microsft has manged to do this. ??
- same platform used to program ten year. (directx). this platform frrom beginnign was build for games.   
- quite a good platform.   connected srvices. (windows azure, store install, xbox live, etc.)

### Reduced cost: creating or porting.
- Not oeverywone will write on dirextx. Microsofrt has been working with .  google chrome - runs opengl platform on top of directx. 
- provides various services. (ads, stats).
- case study. difficult with selling games. (android). after transporting to (windows?) quite a thousands sellings. 
- Suck as much as you can.
- Unity 4 beta fo rwindows.
- example of create as imple game only for deskopt. little sellings. after porting to mobile.
- you can download a game? and check code. 99% of code is shared.
- export: windows mobile - universal. creates shared project? (research).
	- various features - capturing images & videos and sharing.
: 
	sign fo betta: http://aka.ms/unitywp81beta

Microsoft & Unity - powerful partnerhsip -- free!! (you need to pay 500E for iOS and android.
- Special offers:
	http://unity3d.com/pages/windows/offer
	email them & you get free microsoft phone to test.
	lvl 1: free phone
	lvl 2: marketing!! (10^6 imporessiond and packages on addppex.)

# global context: first price: 50.000: http://unity3d.com/contest/windows ends in one month. (runs every year)
 you need: plugins: code to do native functionalities. starting last week, (for free) http://prime31.com

whilepapers: http://unity3d.com/pages








# Carl Callewaert starts talk. (11:00)
http://aka.ms/unitygrfiles
http://ww5.unit3d.com/gamejams/unity-and-windows-hackathon

- live in canda, he's rarely there. (full of snow).  
- used to work in game production. various games. true pation: make games on his own. discovered unity through students. his first app: a sign hand.  
- unity is also used for work. doctor: needs to score first before he touches u. :P. 
- NASA uses Unity. 
	26 * 10 ^ 5 developers.
	6 * 10 ^ 5 monthly active.

- Community:
	assets store.
- unity 5 - feature preview.

- diffuses, new shader - universal.various technques. 
	most important and interesting: new tehcnologies (lights), real time 
- amazing fps on web browser.
-mechanim? (whish animaiton should play when) - face animation.
- improved sound edit tools.

- Unite 2014 in Seattle. (3days -- trainning stuff.)
	porting camp. (people of windows rockstart)


email: carl@unit3d.com  << especially if you make a game!!!! he has a policy of never leaving more than 50emails unread.  (he has contact with linked, and others.)

http:aka.ms/unitygrfiles


1. game to create: loop, jump through kena
2. excited: microsoft & unity. you don't any hassle to export to windows.


# PART ONE DONE.



# 11.40-11.45	Welcome address
Dr. Triant Flouris, Provost of Hellenic American University
little speech, welcoming. 

## Steps.
1. Create project.
	- File -> new project -> select package ->  change to 3D (even though it's 2d) -> create.
	- windows -> layout -> 2 by 3..
	-> change to 2D mode.

2. Importing.
	- export/unzip 2D contents -> sprints01 -> find image called: big_island_hill -> drag and drop -> Assets folder.
	- assets is the folder where ou store your objects, desings, and code. 
	- use spring better performance. automatically import as sprite. (edit -> editor -> default behavior -from 3D to 2D. then gdrag and drop whole foldersprints01 ) (everything is automtcally is stted as sprites.
	- drag and drop flag. (scale -> select image-> seelct 5th option -> scale) create first level.

	recap: edit-> project settings -> editor-> behavior mode to 2D, then drag and drop thei whole folder to assets.
	drag and drop flat istland, and scale accrodinly. 

3. camera 
	-> chang eto perspectives. -> click on 2D, and holding alt lo
	ok around., then click on blue axe, and move forwards, backwwrd. problem,, trees goes back and forwards, bug. 
	
4. Layers
	-> solution to bug: creat layers. make firt layer, then put your object there. how od you create layer: up right: layers -> eid layers -> sortin layers ->  click on plus button -> background, level, fouregrounds. the lower the more front in the camera. (everyting you create goes in the bacgkround :( ) picking object, chang elayer to bak) (shift to mutliselect -> level).  change layer of each object accordinlgy. CAREFUL. layer. defautl movement layer forward. 
	recap -> layers, edit layer, add layers (back, leve, etc.) -> 

5. Change colors & locking object.
	-> select backgrond and change color.
	-> lock background -> layers -> lock background. (you can't select them anmore -> focus on wha tyou want to workups. bug-> delete  it. select again. change to multiple. edit. cut -> automatic sslice.  -> apply. !! -> change texture size -> to list. open bird. you'll see each indidiual image.  seelct them all (use shift), drag to scene -> rename to flying_bird. 
	-> careful. careful to stop game first, after edit. 
	-> edit preferences -> chagne color to daker.
	-> background color change -> camera -> color.

6. Bird animation. 
	-> take image and drag it. 

7. Quicke aimation. 
	->. areful animation(create and change) is different animtor defines which plays at time.
	-> drag animation to dock, change times. loop, change speed, preview.
	-> recap -. select bird, edit, window -> aniation, drag speed, change sampel two 24
# 12.00-13.30	Unity Hands-on part 1

8. Animation - oop
	-> create empty object.  (placeholder). 
	-> select color change to button. click to animation. frame 5 second, scroll.  then move object. select paly. 
	-> attach brid: select bird and drag after gameobject. 
	-> RECAP: create empty objct -> palce iti on map -> clic on cion -. convert to button ->keyframe animation. erenmae to parente_brid, animation. five second time line  select red line -> move boject to where you rwant  move the bird.  -> drag bird to parent -> reset positino use gear. 


9. Animatino - brid loop & flip.
	-> use script, to scale accordinly..  (script flip.)

	-> recap: drag and drop flip script to parent of bird. not bird!.  go to timeline andand add function at 0, and 10seconds. 
	-> set parent. (bottom on animation, click on red dot change to curves to free smotth. ). create empty object, put it toreset it.  duplicate parent. 
	-> drag and drop yeti.
	select 5 - 10, drag and rename to idle. recap: folder, yeti, dragn and rop to assets. select yeti from 1 - 6. drag to unity call it idle. add component. add physics2d, rigidbody. 
 
10. Add colliders to all terrains. all physics2d

11. prehabs.
	drag and drop an object ot assets. after change this prehab, and checka pply all objects creatd from this prehab will also change.

12. jump on terrains.

13. select bacgrkound, on 3d mode. scale it, move it far away. set renderin to foreground for new tree if add. add tree  on foregound max.  render of yeti to two.

recap: go to 23d mode, select all backgrounds, move them, scale them, imort new large tree, scale it large, go to 3d mode, move it forwards

14. background move slower.

15. sound.
	drag and drop
	.reate empty object, with button.  drag and rop audio file  to game object. untick  3d sounds. press apply.

16. animator.
	animator, transition.
	select animator pics, drag and drop. delete this animation. select yeti  -> windows -> animator -> drag and drop animation created.

	17. animation grigger.
 selecting animtion -> sele
 	recap: import script - characte final. on yeti replace with final script (gear - remove compoent).  go to animator area, create parameter, start & jump of type trigger. click on line. specify with what they are triggered. make usure they are triggered with capitcal letters.


 18. reset game
 	tirgger box. 
 		-> game boejct, create trigger, scale it., go to mesh redner, untick. , add physic 2d box collider.

 	-> select yeti. tag player. respanw box. 

 19. pick up. add item, ad box collider, 2d, add trigger. for pickup. 
 	import rocekts, drag and drop, rotate it, add physic 2d, box collider, add sciprt pickpup, set ti trigger, 

 20. optimization for sprite. 

 "the more you understand optimization the better you develop.""

high demnad with low devices.


21. gui textt.
	create gui text, and add script for score to each rocket.

proseleueeis 10 - 11.


MECHANIM. examples. idea of game. (h second person. story)  (mixmo - provides animations.)  (kinect)

https://unit3d.com/gamejams/unity-and-windows-hackathon


22. loop: re-use objects. moving. pull objects.
put script:   (on trigger enter, )
- don't use endler runner. use insead pull/mov eobjects. 

static batching. renders mateirals not moving only once. greater performance. 