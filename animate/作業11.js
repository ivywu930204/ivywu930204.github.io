(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"作業11_atlas_1", frames: [[0,52,89,30],[0,0,97,50],[99,0,48,96]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3050,358);


(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3050,358);


(lib.CachedBmp_3 = function() {
	this.initialize(ss["作業11_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["作業11_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["作業11_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.補間動畫2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-762.4,-89.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-762.4,-89.4,1525,179);


(lib.補間動畫1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-762.4,-89.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-762.4,-89.4,1525,179);


(lib.左鞋 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465068").s().p("AgBApQgMgEgOgIIgLgGIgEAKIgzgRIASgoIAFgBQAJgRAKgHQAVgPAEAzIAQANQASAPAHAEQASAKA8AZQhDgDgbgKg");
	this.shape.setTransform(4.15,3.3,1,1,0,0,0,-5.2,-2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左鞋, new cjs.Rectangle(0,0,18.7,10.7), null);


(lib.左手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左手, new cjs.Rectangle(0,0,44.5,15), null);


(lib.左大腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465068").s().p("ABVCvQgPgJgRgSIgPgQQgUgphPhQQhEhEgJgrIAAgBIgBgMIABgBQABgdAKgRQAOgaAiAGQAuAJASAMQAJAHAVAeIAGAFIAyBPQA0BbARBIQgEA5gcAAQgKAAgNgHg");
	this.shape.setTransform(9.8,5.35,1,1,0,0,0,-4.2,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左大腿, new cjs.Rectangle(0,0,28,36.4), null);


(lib.左小腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465068").s().p("AACC8IgvgMIgHgCQAGgIAIhhQAIhjAAhDIADg9IAbgZQAdgRATAuQAOA2gWCWQgLBLgOBAg");
	this.shape.setTransform(7.95,7.55,1,1,0,0,0,2.7,-11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左小腿, new cjs.Rectangle(0,0,10.6,37.8), null);


(lib.右鞋 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("AgFAHQgEgLgDgPIgBgNIgKADIgSgyIArgMIAcAHQAWALgdAcIgBAWQgBAWABAJQACATARBBQgmg4gIgdg");
	this.shape.setTransform(5.55,2.45,1,1,0,0,0,1.4,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右鞋, new cjs.Rectangle(0,0,8.3,18.3), null);


(lib.右手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右手, new cjs.Rectangle(0,0,48.5,25), null);


(lib.右大腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("ABBC6QgOgKgQgUIgMgSQgPgqhJhgQg+hPAEgvIAAgLQAAgJAGABQAaguAmgEQAzgGAnBaIAnBUQApBhAIBKQgLA0gZAAQgLAAgNgKg");
	this.shape.setTransform(6.45,6.25,1,1,0,0,0,-6,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右大腿, new cjs.Rectangle(0,0,25,39.3), null);


(lib.右小腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("AiOBzIgWgxIgCgHQAKAABSg0QBTg0A2gqIAygiIAlAGQAfAOgZAqQgjAsiEBJQhDAkg7Acg");
	this.shape.setTransform(33.2,3.1,1,1,0,0,0,16.5,-9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右小腿, new cjs.Rectangle(0,0,33.5,24.5), null);


(lib.頭部 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("AgoAxQghglAFgaQAEgOAXgXQARgRAkABQAfABATAKIAHAIQADALgKAKQgOgBgOAEQgdAHgEAUQgGgDgHgCQgPgEADAOQAEARAEAFQAFAFAIgEIgiAlg");
	this.shape.setTransform(6.9795,6.8223);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFEFE6").s().p("AghAxIgMg5QgjgoANgiQAFAEAFgDIADgCQAEACAEgCIAMgGIATgFQATgFATgCIAfASQACAGABAOIABARQACAEAMANQABACgIAJQAGAkgHAEQgEADgHABIgKABQgVAHgWAiQgUAggDACIgKg1g");
	this.shape_1.setTransform(7.7474,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.頭部, new cjs.Rectangle(0,0,14.9,22.7), null);


(lib.上半身 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.上半身, new cjs.Rectangle(0,0,24,48), null);


(lib.走鋼索的男人 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 骨架
	this.ikNode_18 = new lib.右鞋();
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(17.2,119.8,0.9713,0.9713,0,0,0,-11.3,22.5);

	this.ikNode_16 = new lib.右小腿();
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(67.8,88.1,0.991,0.991,0,0,0,34.1,7.4);

	this.ikNode_2 = new lib.上半身();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(53.95,20.1,1,1,0,0,0,14.1,6.6);

	this.ikNode_14 = new lib.右大腿();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(50.2,55.6,1,1,0,0,0,6,6.9);

	this.ikNode_3 = new lib.左手();
	this.ikNode_3.name = "ikNode_3";
	this.ikNode_3.setTransform(65.7,23.5,0.9851,0.9851,0,0,0,17.4,14.4);

	this.ikNode_5 = new lib.右手();
	this.ikNode_5.name = "ikNode_5";
	this.ikNode_5.setTransform(46.75,30.05,0.972,0.972,0,0,0,48.1,13.6);

	this.ikNode_1 = new lib.頭部();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(60.7,17.15,0.9813,0.9813,0,0,0,14.6,17.5);

	this.ikNode_8 = new lib.左大腿();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(54.3,56.1,1,1,0,0,0,10.4,6.8);

	this.ikNode_10 = new lib.左小腿();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(74.35,90.6,0.9874,0.9874,0,0,0,12.7,12.7);

	this.ikNode_12 = new lib.左鞋();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(71.1,120.85,0.9799,0.9799,0,0,0,11.6,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_12,p:{x:71.1,y:120.85,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9874,scaleY:0.9874,x:74.35,y:90.6,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.6,x:60.7,y:17.15,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:0,x:46.75,y:30.05,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.4,scaleX:0.9851,scaleY:0.9851,rotation:0,x:65.7,y:23.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.991,scaleY:0.991,x:67.8,y:88.1,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.5,y:119.8,x:17.2,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]}).to({state:[{t:this.ikNode_12,p:{x:71.05,y:120.8,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.3,y:90.55,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.7,y:17.15,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.218,x:46.55,y:30.25,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:1.557,x:65.75,y:24}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.75,y:88.05,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:119.85,x:17.2,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.1,y:120.8,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.3,y:90.55,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.7,y:17.15,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.4402,x:46.45,y:30.3,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:3.117,x:65.65,y:24.4}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.75,y:88.05,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:119.9,x:17.25,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.1,y:120.8,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.3,y:90.5,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.65,y:17.15,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:3.6608,x:46.3,y:30.4,regY:13.7}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:4.6775,x:65.75,y:24.8}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.8,y:88,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:119.95,x:17.3,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.15,y:120.8,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.3,y:90.5,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.65,y:17.15,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:4.8823,x:46.25,y:30.25,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:6.2371,x:65.5,y:25.15}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.8,y:88,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120,x:17.35,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.15,y:120.8,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.3,y:90.45,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.6,y:17.15,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:6.104,x:46.1,y:30.25,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:7.7975,x:65.4,y:25.6}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.8,y:88,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120,x:17.35,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.2,y:120.85,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.3,y:90.4,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.6,y:17.15,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:7.3239,x:45.9,y:30.25,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:9.3567,x:65.3,y:26}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.85,y:87.95,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.05,x:17.4,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.2,y:120.85,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.3,y:90.35,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.55,y:17.2,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:8.5474,x:45.8,y:30.25,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:10.9177,x:65.25,y:26.3}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.85,y:87.95,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.1,x:17.45,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.25,y:120.85,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.3,y:90.35,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.55,y:17.2,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:9.7684,x:45.65,y:30.35,regY:13.7}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:12.4777,x:65.05,y:26.7}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.85,y:87.95,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.15,x:17.5,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.25,y:120.85,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.3,y:90.3,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.5,y:17.2,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:10.9894,x:45.6,y:30.2,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:14.0371,x:64.9,y:27.15}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.85,y:87.9,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.2,x:17.55,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.3,y:120.85,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.3,y:90.25,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.5,y:17.25,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:12.2107,x:45.45,y:30.25,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:15.5967,x:64.8,y:27.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.9,y:87.9,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.2,x:17.55,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.3,y:120.85,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.25,y:90.25,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.45,y:17.25,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:13.4321,x:45.3,y:30.2,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:17.156,x:64.6,y:27.85}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.9,y:87.9,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.25,x:17.6,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.35,y:120.9,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.25,y:90.2,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.45,y:17.25,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:14.6543,x:45.2,y:30.35,regY:13.7}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:18.717,x:64.5,y:28.25}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.9,y:87.85,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.3,x:17.65,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.4,y:120.9,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.25,y:90.15,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.4,y:17.3,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:15.8737,x:45,y:30.2,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:20.2771,x:64.25,y:28.55}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.95,y:87.85,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.35,x:17.7,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.4,y:120.9,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.25,y:90.1,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.4,y:17.3,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:17.097,x:44.9,y:30.25,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:21.8372,x:64.2,y:28.9}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.95,y:87.8,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.35,x:17.75,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.45,y:120.9,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.25,y:90.1,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.35,y:17.3,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:18.3169,x:44.85,y:30.15,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:23.3961,x:64,y:29.25}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.95,y:87.8,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.4,x:17.75,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.45,y:120.9,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.25,y:90.05,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.35,y:17.3,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:19.5384,x:44.7,y:30.2,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.4,scaleX:0.985,scaleY:0.985,rotation:24.9572,x:63.8,y:29.45}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68,y:87.8,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.45,x:17.8,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.5,y:120.9,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.25,y:90,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.3,y:17.35,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:20.7607,x:44.55,y:30.15,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:26.5166,x:63.5,y:29.9}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68,y:87.75,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.5,x:17.85,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.5,y:120.95,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.25,y:89.95,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.3,y:17.35,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:21.981,x:44.4,y:30.15,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:28.0756,x:63.4,y:30.15}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68,y:87.75,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.55,x:17.9,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.55,y:120.95,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.25,y:89.95,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.25,y:17.35,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:23.2037,x:44.35,y:30.2,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.4,scaleX:0.985,scaleY:0.985,rotation:29.6369,x:63.25,y:30.35}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.05,y:87.75,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.55,x:17.95,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:70.25,y:120.95,rotation:1.459,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.8,y:90.2,regX:12.8,rotation:1.4745,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.2,y:17.5,rotation:0.5978,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:22.6502,x:44.35,y:30.25,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:28.7742,x:63.1,y:30.45}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.1,y:87.1,rotation:-3.8877,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:123.35,x:20.4,rotation:-3.9024,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:68.9,y:120.9,rotation:2.9198,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.05,y:90.4,regX:12.7,rotation:2.9527,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.2,y:17.6,rotation:1.1975,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:22.0976,x:44.4,y:30.45,regY:13.6}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:27.9112,x:63.05,y:30.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.15,y:86.55,rotation:-7.7782,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:126,x:23.15,rotation:-7.8087,regX:-11.2,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:67.5,y:120.6,rotation:4.3816,regY:10,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:72.55,y:90.65,regX:12.7,rotation:4.4294,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.6,x:60.05,y:17.7,rotation:1.7973,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:21.5433,x:44.4,y:30.55,regY:13.6}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:27.0485,x:63.1,y:30.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.15,y:86,rotation:-11.6691,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:128.4,x:25.85,rotation:-11.7147,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:66.15,y:120.6,rotation:5.8427,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:71.95,y:90.9,regX:12.7,rotation:5.9081,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.2,y:17.85,rotation:2.3973,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:20.9919,x:44.4,y:30.7,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:26.1864,x:62.85,y:30.4}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.2,y:85.4,rotation:-15.5594,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:130.55,x:28.95,rotation:-15.6201,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:64.85,y:120.45,rotation:7.3032,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:71.5,y:91.15,regX:12.8,rotation:7.3863,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.1,y:17.95,rotation:2.9976,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:20.4374,x:44.45,y:30.75,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.4,scaleX:0.985,scaleY:0.985,rotation:25.3221,x:62.9,y:30.35}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.15,y:84.8,rotation:-19.4486,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:132.5,x:32.2,rotation:-19.5252,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:63.55,y:120.35,rotation:8.7647,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:70.8,y:91.5,regX:12.7,rotation:8.8641,regY:12.8}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.1,y:18.1,rotation:3.5982,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:19.8853,x:44.4,y:30.9,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:24.4608,x:62.75,y:30.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.15,y:84.3,rotation:-23.3405,regX:34,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:134.3,x:35.6,rotation:-23.432,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:62.25,y:120.05,rotation:10.2267,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:70.25,y:91.6,regX:12.7,rotation:10.3424,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:60.1,y:18.2,rotation:4.1984,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:19.3322,x:44.4,y:31,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:23.597,x:62.7,y:30.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.2,y:83.6,rotation:-27.2307,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:135.85,x:39.1,rotation:-27.3376,regX:-11.3,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:60.95,y:119.85,rotation:11.6872,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:69.65,y:91.75,regX:12.7,rotation:11.8195,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.95,y:18.3,rotation:4.798,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:18.7786,x:44.45,y:31.15,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:22.7353,x:62.6,y:30.45}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.3,y:83.15,rotation:-31.1216,regX:34.1,regY:7.5}},{t:this.ikNode_18,p:{regY:22.6,y:137.1,x:42.75,rotation:-31.2424,regX:-11.3,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:59.6,y:119.6,rotation:13.1481,regY:10.1,scaleX:0.9798,scaleY:0.9798,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:69,y:92,regX:12.7,rotation:13.2972,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.95,y:18.45,rotation:5.3982,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:18.2253,x:44.45,y:31.25,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.4,scaleX:0.985,scaleY:0.985,rotation:21.8718,x:62.5,y:30.35}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.25,y:82.4,rotation:-35.0118,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:138.05,x:46.65,rotation:-35.1485,regX:-11.2,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:58.35,y:119.3,rotation:14.6104,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:68.35,y:92.15,regX:12.7,rotation:14.7744,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.9,y:18.6,rotation:5.9992,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:17.6732,x:44.5,y:31.45,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:21.0099,x:62.45,y:30.55}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.3,y:81.85,rotation:-38.902,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:138.75,x:50.5,rotation:-39.054,regX:-11.2,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:57.05,y:118.95,rotation:16.0713,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:67.8,y:92.35,regX:12.7,rotation:16.2519,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.9,y:18.7,rotation:6.5987,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:17.1207,x:44.55,y:31.55,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:20.1474,x:62.35,y:30.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.35,y:81.35,rotation:-42.7915,regX:34.1,regY:7.5}},{t:this.ikNode_18,p:{regY:22.6,y:139.3,x:54.35,rotation:-42.9596,regX:-11.3,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:55.9,y:118.6,rotation:17.5317,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:67.2,y:92.55,regX:12.7,rotation:17.7298,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.8,y:18.85,rotation:7.1991,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:16.5672,x:44.5,y:31.6,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:19.2843,x:62.3,y:30.55}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.4,y:80.7,rotation:-46.6847,regX:34.1,regY:7.5}},{t:this.ikNode_18,p:{regY:22.6,y:139.4,x:58.45,rotation:-46.8672,regX:-11.2,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:54.65,y:118.25,rotation:18.9931,regY:10.1,scaleX:0.9798,scaleY:0.9798,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:66.55,y:92.75,regX:12.7,rotation:19.2076,regY:12.8}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.8,y:18.95,rotation:7.7985,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:16.0141,x:44.55,y:31.75,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:18.4218,x:62.2,y:30.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.3,y:80,rotation:-50.5725,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:139.4,x:62.45,rotation:-50.7707,regX:-11.3,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:53.5,y:117.8,rotation:20.4553,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:65.95,y:92.9,regX:12.7,rotation:20.6861,regY:12.8}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.75,y:19.1,rotation:8.3996,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:15.461,x:44.6,y:31.85,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:17.5597,x:62.15,y:30.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.3,y:79.35,rotation:-54.4655,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.5,y:138.95,x:66.5,rotation:-54.6772,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:52.25,y:117.55,rotation:21.9149,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:65.3,y:92.95,regX:12.7,rotation:22.1638,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.7,y:19.2,rotation:8.999,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:14.9083,x:44.6,y:32.05,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:16.6967,x:62.05,y:30.55}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.45,y:78.85,rotation:-58.3553,regX:34.1,regY:7.5}},{t:this.ikNode_18,p:{regY:22.6,y:138.3,x:70.75,rotation:-58.5819,regX:-11.2,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:51.1,y:117.05,rotation:23.3756,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:64.75,y:93.2,regX:12.7,rotation:23.6411,regY:12.8}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.6,y:19.35,rotation:9.5993,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:14.3541,x:44.6,y:32.15,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:15.8341,x:62,y:30.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.25,y:78.15,rotation:-62.2452,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:137.45,x:74.7,rotation:-62.4885,regX:-11.3,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:49.95,y:116.6,rotation:24.839,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:64.1,y:93.15,regX:12.7,rotation:25.1194,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.6,y:19.45,rotation:10.2,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:13.8011,x:44.65,y:32.3,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:14.9697,x:61.75,y:30.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.2,y:77.5,rotation:-66.1356,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.5,y:136.15,x:78.65,rotation:-66.3942,regX:-11.3,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:48.95,y:116.1,rotation:26.2985,regY:10.1,scaleX:0.9798,scaleY:0.9798,regX:11.7}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:63.5,y:93.3,regX:12.7,rotation:26.5963,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.55,y:19.55,rotation:10.8001,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:13.2491,x:44.65,y:32.35,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:14.1086,x:61.8,y:30.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.3,y:76.9,rotation:-70.0262,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:134.7,x:82.7,rotation:-70.3,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:47.7,y:115.65,rotation:27.7614,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:62.85,y:93.35,regX:12.7,rotation:28.0737,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.45,y:19.7,rotation:11.3999,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:12.6961,x:44.65,y:32.45,regY:13.6}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:13.2458,x:61.8,y:30.5}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.25,y:76.4,rotation:-73.9174,regX:34,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:132.8,x:86.65,rotation:-74.2061,regX:-11.2,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:46.6,y:115.1,rotation:29.222,regY:10.1,scaleX:0.9798,scaleY:0.9798,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:62.25,y:93.5,regX:12.7,rotation:29.5532,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.4,y:19.8,rotation:11.9998,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:12.1424,x:44.7,y:32.65,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:12.3825,x:61.75,y:30.55}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.25,y:75.65,rotation:-77.8086,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:130.85,x:90.5,rotation:-78.1123,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:47.65,y:115.5,rotation:27.7614,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:62.85,y:93.25,regX:12.7,rotation:28.0737,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.3,y:19.85,rotation:12.138,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:11.6825,x:44.75,y:32.4,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:12.5014,x:61.9,y:30.45}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.85,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.25,y:76.45,rotation:-73.9174,regX:34,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:132.8,x:86.6,rotation:-74.2061,regX:-11.2,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:48.9,y:115.9,rotation:26.2985,regY:10.1,scaleX:0.9798,scaleY:0.9798,regX:11.7}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:63.45,y:93.1,regX:12.7,rotation:26.5963,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.15,y:19.85,rotation:12.2757,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:11.2212,x:44.85,y:32.15,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:12.6215,x:62.15,y:30.3}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.75,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.25,y:76.95,rotation:-70.0262,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:134.75,x:82.6,rotation:-70.3,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:49.85,y:116.25,rotation:24.839,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:64.1,y:92.8,regX:12.7,rotation:25.1194,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.1,y:19.75,rotation:12.4143,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:10.7611,x:44.85,y:32.05,regY:13.7}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:12.7415,x:62.4,y:30.15}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.65,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.15,y:77.55,rotation:-66.1356,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.5,y:136.2,x:78.45,rotation:-66.3942,regX:-11.3,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:50.95,y:116.6,rotation:23.3756,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:64.75,y:92.75,regX:12.7,rotation:23.6411,regY:12.8}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59,y:19.65,rotation:12.5522,regY:17.4,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:10.2992,x:44.95,y:31.65,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:12.8618,x:62.65,y:30}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.55,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.2,y:78.2,rotation:-62.2452,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:137.5,x:74.5,rotation:-62.4885,regX:-11.3,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:52.1,y:117,rotation:21.9149,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:65.25,y:92.4,regX:12.7,rotation:22.1638,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.9,y:19.7,rotation:12.6912,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:9.8394,x:45,y:31.45,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.4,scaleX:0.985,scaleY:0.985,rotation:12.9816,x:62.9,y:29.7}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.45,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.35,y:78.95,rotation:-58.3553,regX:34.1,regY:7.5}},{t:this.ikNode_18,p:{regY:22.6,y:138.35,x:70.45,rotation:-58.5819,regX:-11.2,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:53.35,y:117.15,rotation:20.4553,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:65.9,y:92.2,regX:12.7,rotation:20.6861,regY:12.8}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.75,y:19.7,rotation:12.8297,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:9.378,x:45.05,y:31.2,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:13.1013,x:63.1,y:29.7}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.35,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.2,y:79.45,rotation:-54.4655,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.5,y:139,x:66.2,rotation:-54.6772,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:54.5,y:117.45,rotation:18.9931,regY:10.1,scaleX:0.9798,scaleY:0.9798,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:66.5,y:91.95,regX:12.7,rotation:19.2076,regY:12.8}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.65,y:19.85,rotation:12.9676,regY:17.6,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:8.9178,x:45.15,y:30.95,regY:13.6}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:13.2214,x:63.4,y:29.55}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.25,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.15,y:80.1,rotation:-50.5725,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:139.4,x:62.1,rotation:-50.7707,regX:-11.3,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:55.7,y:117.7,rotation:17.5317,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:67.15,y:91.6,regX:12.7,rotation:17.7298,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.6,y:19.55,rotation:13.1061,regY:17.4,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:8.4555,x:45.2,y:30.7,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:13.342,x:63.45,y:29.35}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.15,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.25,y:80.85,rotation:-46.6847,regX:34.1,regY:7.5}},{t:this.ikNode_18,p:{regY:22.6,y:139.4,x:58.05,rotation:-46.8672,regX:-11.2,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:56.85,y:117.95,rotation:16.0713,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:67.75,y:91.3,regX:12.7,rotation:16.2519,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.5,y:19.6,rotation:13.244,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:7.9958,x:45.25,y:30.45,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:13.4617,x:63.7,y:29.2}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.05,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.2,y:81.5,rotation:-42.7915,regX:34.1,regY:7.5}},{t:this.ikNode_18,p:{regY:22.6,y:139.25,x:53.9,rotation:-42.9596,regX:-11.3,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:58.1,y:118.15,rotation:14.6104,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:68.3,y:90.95,regX:12.7,rotation:14.7744,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.4,y:19.6,rotation:13.3813,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:7.5355,x:45.3,y:30.3,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:13.5811,x:63.95,y:29.05}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.1,y:82,rotation:-38.902,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:138.7,x:50.05,rotation:-39.054,regX:-11.2,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:59.3,y:118.35,rotation:13.1481,regY:10.1,scaleX:0.9798,scaleY:0.9798,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:68.9,y:90.7,regX:12.7,rotation:13.2972,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.3,y:19.55,rotation:13.52,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:7.0737,x:45.35,y:30,regY:13.6}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:13.7017,x:64.25,y:28.85}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.85,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.05,y:82.55,rotation:-35.0118,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:137.95,x:46.1,rotation:-35.1485,regX:-11.2,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:60.6,y:118.5,rotation:11.6872,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:69.55,y:90.3,regX:12.7,rotation:11.8195,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.15,y:19.55,rotation:13.6572,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:6.6136,x:45.45,y:29.9,regY:13.7}},{t:this.ikNode_3,p:{regX:17.5,regY:14.4,scaleX:0.985,scaleY:0.985,rotation:13.8214,x:64.4,y:28.5}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.75,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.05,y:83.3,rotation:-31.1216,regX:34.1,regY:7.5}},{t:this.ikNode_18,p:{regY:22.6,y:137,x:42.2,rotation:-31.2424,regX:-11.3,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:61.9,y:118.6,rotation:10.2267,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:70.15,y:90.05,regX:12.7,rotation:10.3424,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.1,y:19.65,rotation:13.7966,regY:17.6,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:6.1528,x:45.55,y:29.55,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:13.9413,x:64.5,y:28.45}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.65,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.95,y:83.8,rotation:-27.2307,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:135.7,x:38.55,rotation:-27.3376,regX:-11.3,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:63.15,y:118.8,rotation:8.7647,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:70.7,y:89.8,regX:12.7,rotation:8.8641,regY:12.8}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.95,y:19.45,rotation:13.9351,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:5.6915,x:45.55,y:29.35,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:14.061,x:64.65,y:28.25}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.55,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.9,y:84.5,rotation:-23.3405,regX:34,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:134.15,x:35,rotation:-23.432,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:64.45,y:118.75,rotation:7.3032,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:71.35,y:89.35,regX:12.8,rotation:7.3863,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.85,y:19.45,rotation:14.0732,regY:17.5,scaleX:0.9812,scaleY:0.9812}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:5.2308,x:45.65,y:29.05,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:14.1809,x:64.7,y:28.05}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.45,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.85,y:85,rotation:-19.4486,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:132.3,x:31.6,rotation:-19.5252,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:65.7,y:118.8,rotation:5.8427,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:71.8,y:88.95,regX:12.7,rotation:5.9081,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.8,y:19.45,rotation:14.2117,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:4.7703,x:45.65,y:28.8,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:14.3008,x:65,y:27.85}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.35,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.85,y:85.6,rotation:-15.5594,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:130.25,x:28.35,rotation:-15.6201,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:67.05,y:118.65,rotation:4.3816,regY:10,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:72.4,y:88.55,regX:12.7,rotation:4.4294,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.65,y:19.4,rotation:14.3496,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:4.3083,x:45.75,y:28.65,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:14.4209,x:65.2,y:27.65}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.25,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.8,y:86.2,rotation:-11.6691,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:128.1,x:25.25,rotation:-11.7147,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:68.4,y:118.85,rotation:2.9198,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:72.85,y:88.2,regX:12.7,rotation:2.9527,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.55,y:19.4,rotation:14.4887,regY:17.6,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:3.8483,x:45.8,y:28.5,regY:13.7}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:14.5411,x:65.45,y:27.45}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.15,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.8,y:86.8,rotation:-7.7782,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:125.65,x:22.5,rotation:-7.8087,regX:-11.2,scaleX:0.9712,scaleY:0.9712}}]},1).to({state:[{t:this.ikNode_12,p:{x:69.7,y:118.75,rotation:1.459,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.6,y:87.85,regX:12.8,rotation:1.4745,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.4,y:19.35,rotation:14.6249,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:3.3877,x:45.85,y:28.15,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.4,scaleX:0.985,scaleY:0.985,rotation:14.6612,x:65.55,y:27.1}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.05,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.7,y:87.35,rotation:-3.8877,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:122.95,x:19.8,rotation:-3.9024,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.05,y:118.7,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74.05,y:87.45,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.6,x:57.25,y:19.25,rotation:14.7647,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.9265,x:46.05,y:27.9,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:14.7813,x:65.5,y:26.95}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:51.95,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.7,y:88,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.15,x:17.3,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.05,y:118.7,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.45,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.4,y:19.3,rotation:14.3947,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.8536,x:46.05,y:27.9,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:14.4128,x:65.65,y:27.05}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.7,y:88,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.2,x:17.4,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.05,y:118.75,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.45,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.5,y:19.2,rotation:14.0261,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.7797,x:46.05,y:27.85,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:14.0436,x:65.6,y:27}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.05,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.7,y:88,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.25,x:17.45,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.05,y:118.8,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.45,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.5,y:19.15,rotation:13.6564,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.7067,x:46.15,y:27.85,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:13.6733,x:65.65,y:26.95}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.1,y:20.1}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.7,y:88,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.3,x:17.5,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.05,y:118.85,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.5,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.6,y:19.1,rotation:13.2873,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.6338,x:46.2,y:27.85,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:13.3036,x:65.55,y:26.9}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.15,y:20.15}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.75,y:88,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.35,x:17.55,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.05,y:118.85,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.5,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.65,y:19,rotation:12.9184,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.5591,x:46.25,y:27.85,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.4,scaleX:0.985,scaleY:0.985,rotation:12.9337,x:65.65,y:26.75}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.2,y:20.15}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.75,y:88.05,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.4,x:17.65,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.05,y:118.9,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.5,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.7,y:18.9,rotation:12.5494,regY:17.4,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.4871,x:46.3,y:27.85,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:12.5632,x:65.6,y:26.85}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.25,y:20.15}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.75,y:88.05,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.45,x:17.7,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.05,y:118.95,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.55,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.75,y:19.05,rotation:12.1799,regY:17.6,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.4141,x:46.35,y:27.8,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:12.1941,x:65.6,y:26.85}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.3,y:20.15}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.75,y:88.05,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.5,x:17.75,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.05,y:119,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.55,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.8,y:18.85,rotation:11.8112,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.3403,x:46.4,y:27.75,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:11.8259,x:65.6,y:26.85}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.35,y:20.2}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.75,y:88.05,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.55,x:17.8,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.05,y:119,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.55,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.9,y:18.8,rotation:11.4417,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.2674,x:46.5,y:27.75,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:11.456,x:65.6,y:26.75}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.4,y:20.2}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.75,y:88.05,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.6,x:17.85,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.05,y:119.05,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.55,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.85,y:18.8,rotation:11.0723,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.1945,x:46.55,y:27.75,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.4,scaleX:0.985,scaleY:0.985,rotation:11.0859,x:65.55,y:26.6}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.45,y:20.2}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.75,y:88.05,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.65,x:17.95,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.05,y:119.1,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.6,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.95,y:18.65,rotation:10.7027,regY:17.4,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:2.1207,x:46.6,y:27.75,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:10.716,x:65.65,y:26.75}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.5,y:20.2}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.8,y:88.05,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.7,x:18,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.1,y:119.1,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.6,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:57.95,y:18.75,rotation:10.3342,regY:17.6,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:2.0477,x:46.65,y:27.7,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:10.346,x:65.6,y:26.7}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.55,y:20.25}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.8,y:88.05,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.75,x:18.05,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.1,y:119.15,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:74,y:87.6,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.05,y:18.6,rotation:9.9656,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.9748,x:46.7,y:27.65,regY:13.6}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:9.9773,x:65.75,y:26.65}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.6,y:20.25}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.8,y:88.05,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.8,x:18.1,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.1,y:119.2,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.65,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.05,y:18.55,rotation:9.594,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.9019,x:46.75,y:27.65,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:9.608,x:65.65,y:26.7}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.65,y:20.25}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.8,y:88.1,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.85,x:18.15,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.1,y:119.25,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.65,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.15,y:18.45,rotation:9.2266,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.8281,x:46.9,y:27.65,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:9.2382,x:65.55,y:26.6}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.7,y:20.25}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.85,y:88.1,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.9,x:18.25,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.1,y:119.25,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.65,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.15,y:18.3,rotation:8.8574,regY:17.4,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.7543,x:46.95,y:27.65,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:8.867,x:65.65,y:26.55}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.75,y:20.3}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.85,y:88.1,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:120.95,x:18.3,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.15,y:119.3,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.65,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.6,x:58.1,y:18.35,rotation:8.4888,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.6824,x:47,y:27.6,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:8.4988,x:65.6,y:26.6}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.8,y:20.3}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.85,y:88.1,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121,x:18.35,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.15,y:119.35,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.7,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.25,y:18.35,rotation:8.1196,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.6085,x:47.05,y:27.6,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:8.1292,x:65.6,y:26.55}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.85,y:20.3}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.85,y:88.1,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121,x:18.4,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.15,y:119.4,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.7,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.4,y:18.25,rotation:7.749,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.5348,x:47.1,y:27.6,regY:13.6}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:7.759,x:65.7,y:26.5}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.9,y:20.3}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.9,y:88.15,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.05,x:18.5,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.15,y:119.4,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.7,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.4,y:18.2,rotation:7.3805,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.4628,x:47.15,y:27.6,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.4,scaleX:0.985,scaleY:0.985,rotation:7.3884,x:65.65,y:26.35}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:52.95,y:20.35}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.9,y:88.15,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.1,x:18.55,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.15,y:119.45,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.75,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.45,y:18.15,rotation:7.0114,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.389,x:47.25,y:27.6,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:7.0206,x:65.6,y:26.45}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53,y:20.35}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.9,y:88.15,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.15,x:18.6,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.15,y:119.5,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.75,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.45,y:18.05,rotation:6.6426,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.3152,x:47.3,y:27.55,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:6.6506,x:65.6,y:26.45}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.05,y:20.35}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.95,y:88.15,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.2,x:18.65,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.2,y:119.5,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.75,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.6,y:17.95,rotation:6.2732,regY:17.4,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.2423,x:47.35,y:27.55,regY:13.6}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:6.2808,x:65.75,y:26.4}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.1,y:20.35}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.95,y:88.15,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.25,x:18.7,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.2,y:119.55,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.75,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.6,y:18.15,rotation:5.904,regY:17.6,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.1695,x:47.45,y:27.55,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:5.912,x:65.65,y:26.4}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.15,y:20.4}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.95,y:88.2,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.3,x:18.8,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.2,y:119.6,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.8,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.65,y:17.95,rotation:5.5343,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.0957,x:47.45,y:27.55,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.4,scaleX:0.985,scaleY:0.985,rotation:5.5419,x:65.7,y:26.15}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.2,y:20.4}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:67.95,y:88.2,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.35,x:18.85,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.2,y:119.65,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.95,y:87.8,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.7,y:17.9,rotation:5.1656,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:1.0228,x:47.5,y:27.5,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:5.1718,x:65.55,y:26.25}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.25,y:20.4}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68,y:88.2,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.4,x:18.9,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.2,y:119.65,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.8,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.7,y:17.8,rotation:4.7962,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:0.949,x:47.6,y:27.45,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:4.8013,x:65.65,y:26.3}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.3,y:20.4}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68,y:88.2,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.45,x:18.95,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.2,y:119.7,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.8,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.85,y:17.65,rotation:4.4271,regY:17.4,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:0.8762,x:47.65,y:27.45,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:4.4327,x:65.65,y:26.25}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.35,y:20.45}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68,y:88.2,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.5,x:19.05,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.25,y:119.75,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.85,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.85,y:17.75,rotation:4.0581,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:0.8033,x:47.7,y:27.45,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:4.0632,x:65.7,y:26.2}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.4,y:20.45}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68,y:88.25,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.55,x:19.1,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.25,y:119.75,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.85,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.9,y:17.8,rotation:3.6893,regY:17.6,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:0.7295,x:47.8,y:27.45,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:3.6931,x:65.65,y:26.2}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.45,y:20.45}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.05,y:88.25,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.6,x:19.15,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.25,y:119.8,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.85,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.9,y:17.65,rotation:3.3206,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:0.6558,x:47.85,y:27.45,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:3.3241,x:65.55,y:26.1}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.5,y:20.45}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.05,y:88.25,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.65,x:19.2,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.25,y:119.85,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.85,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:58.9,y:17.6,rotation:2.9504,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:0.5838,x:47.9,y:27.45,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:2.9543,x:65.55,y:26.15}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.55,y:20.5}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.05,y:88.25,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.7,x:19.3,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.25,y:119.9,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.9,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59,y:17.55,rotation:2.581,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:0.51,x:47.9,y:27.4,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:2.5846,x:65.55,y:26.05}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.6,y:20.5}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.1,y:88.25,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.75,x:19.35,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.25,y:119.9,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.9,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.05,y:17.45,rotation:2.2119,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:0.4363,x:48,y:27.4,regY:13.6}},{t:this.ikNode_3,p:{regX:17.4,regY:14.4,scaleX:0.985,scaleY:0.985,rotation:2.2151,x:65.6,y:25.95}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.65,y:20.5}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.1,y:88.25,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.8,x:19.4,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.3,y:119.95,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.9,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.05,y:17.3,rotation:1.8428,regY:17.4,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:0.3634,x:48.05,y:27.4,regY:13.6}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:1.8456,x:65.8,y:25.95}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.7,y:20.5}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.1,y:88.3,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.85,x:19.45,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.3,y:120,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.95,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.6,x:58.95,y:17.25,rotation:1.4738,regY:17.4,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:0.2905,x:48.15,y:27.4,regY:13.6}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:1.4753,x:65.75,y:25.95}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.75,y:20.55}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.1,y:88.3,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.9,x:19.55,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.3,y:120,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.95,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.6,x:58.95,y:17.35,rotation:1.1048,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:0.2168,x:48.2,y:27.4,regY:13.6}},{t:this.ikNode_3,p:{regX:17.6,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:1.1069,x:65.75,y:26}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.8,y:20.55}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.15,y:88.3,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:121.95,x:19.6,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.3,y:120.05,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.95,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.15,y:17.3,rotation:0.7359,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:0.1439,x:48.25,y:27.35,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:0.7367,x:65.65,y:25.9}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.85,y:20.55}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.15,y:88.3,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:122,x:19.65,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.3,y:120.1,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:87.95,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.15,y:17.25,rotation:0.3671,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.9719,scaleY:0.9719,rotation:0.0702,x:48.35,y:27.35,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:0.3666,x:65.6,y:25.9}},{t:this.ikNode_14,p:{x:50.15}},{t:this.ikNode_2,p:{x:53.9,y:20.55}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.15,y:88.3,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:122.05,x:19.7,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).to({state:[{t:this.ikNode_12,p:{x:71.35,y:120.15,rotation:0,regY:10.1,scaleX:0.9799,scaleY:0.9799,regX:11.6}},{t:this.ikNode_10,p:{scaleX:0.9873,scaleY:0.9873,x:73.9,y:88,regX:12.7,rotation:0,regY:12.7}},{t:this.ikNode_8},{t:this.ikNode_1,p:{regX:14.7,x:59.2,y:17.15,rotation:0,regY:17.5,scaleX:0.9813,scaleY:0.9813}},{t:this.ikNode_5,p:{scaleX:0.972,scaleY:0.972,rotation:0,x:48.45,y:27.35,regY:13.6}},{t:this.ikNode_3,p:{regX:17.5,regY:14.5,scaleX:0.985,scaleY:0.985,rotation:0,x:65.7,y:25.85}},{t:this.ikNode_14,p:{x:50.2}},{t:this.ikNode_2,p:{x:53.95,y:20.6}},{t:this.ikNode_16,p:{scaleX:0.9909,scaleY:0.9909,x:68.2,y:88.35,rotation:0,regX:34.1,regY:7.4}},{t:this.ikNode_18,p:{regY:22.6,y:122.1,x:19.75,rotation:0,regX:-11.3,scaleX:0.9713,scaleY:0.9713}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-1,98.5,129.8);


// stage content:
(lib.作業11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 男人
	this.instance = new lib.走鋼索的男人();
	this.instance.setTransform(243,57.55,0.6755,0.753,0,0,0,46.2,60.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	// 鋼索
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("Eh2+AAAMDt9AAA");
	this.shape.setTransform(763.3,103.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

	// 背景
	this.instance_1 = new lib.補間動畫1("synched",0);
	this.instance_1.setTransform(762.4,89.45);

	this.instance_2 = new lib.補間動畫2("synched",0);
	this.instance_2.setTransform(-262.4,89.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},599).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:-262.4},599).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-774.8,89,2302.1,90);
// library properties:
lib.properties = {
	id: '1B29860EAF2F4944A93B06902729DA56',
	width: 500,
	height: 178,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_5.png?1703002173273", id:"CachedBmp_5"},
		{src:"images/CachedBmp_4.png?1703002173273", id:"CachedBmp_4"},
		{src:"images/作業11_atlas_1.png?1703002173166", id:"作業11_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1B29860EAF2F4944A93B06902729DA56'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;