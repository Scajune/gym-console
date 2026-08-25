(function(global){
  'use strict';
  var end=0,remaining=0,running=false,handle=null,onTick=function(){},onDone=function(){};
  function now(){return new Date().getTime();}
  function seconds(){return running?Math.max(0,Math.ceil((end-now())/1000)):remaining;}
  function tick(){var s=seconds();onTick(s,running);if(running&&s<=0){running=false;remaining=0;if(handle){clearInterval(handle);handle=null;}onDone();}}
  function ensure(){if(!handle){handle=setInterval(tick,250);}tick();}
  global.GymTimer={configure:function(t,d){onTick=t;onDone=d;},start:function(s){remaining=parseInt(s,10)||0;end=now()+remaining*1000;running=true;ensure();},add:function(s){var current=seconds();remaining=current+(parseInt(s,10)||0);end=now()+remaining*1000;if(remaining>0){running=true;}ensure();},pause:function(){remaining=seconds();running=false;tick();},resume:function(){if(remaining>0){end=now()+remaining*1000;running=true;ensure();}},reset:function(){running=false;remaining=0;if(handle){clearInterval(handle);handle=null;}tick();},skip:function(){running=false;remaining=0;if(handle){clearInterval(handle);handle=null;}tick();},seconds:seconds,isRunning:function(){return running;}};
}(this));
