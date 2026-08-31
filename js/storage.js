(function(global){
  'use strict';
  var KEY='gym-console-data-v1';
  function empty(){return {version:4,sessions:[],settings:{mainSets:3,initialPhase:false,soundVolume:70,soundType:'beep'},draft:null,baselines:[],project:{weeks:8,startDate:''}};}
  function normalize(d){if(!d||!d.sessions){d=empty();}if(!d.settings){d.settings=empty().settings;}if(d.settings.mainSets===undefined){d.settings.mainSets=3;}if(d.settings.initialPhase===undefined){d.settings.initialPhase=d.settings.mainSets===2;}if(d.settings.soundVolume===undefined){d.settings.soundVolume=70;}if(!d.settings.soundType){d.settings.soundType='beep';}if(d.draft===undefined){d.draft=null;}if(!d.baselines){d.baselines=[];}if(!d.project){d.project={weeks:8,startDate:''};}if(!d.project.weeks){d.project.weeks=8;}if(d.project.startDate===undefined){d.project.startDate='';}d.version=4;return d;}
  function read(){var raw;try{raw=localStorage.getItem(KEY);return normalize(raw?JSON.parse(raw):empty());}catch(e){return empty();}}
  function write(data){try{localStorage.setItem(KEY,JSON.stringify(data));return true;}catch(e){alert('Impossibile salvare i dati. Libera spazio in Safari.');return false;}}
  global.GymStorage={read:read,write:write,addSession:function(s){var d=read();d.sessions.push(s);d.draft=null;return write(d);},addBaseline:function(b){var d=read();d.baselines.push(b);return write(d);},project:function(value){var d=read();if(value){d.project=value;write(d);}return d.project;},settings:function(value){var d=read();if(value){d.settings=value;write(d);}return d.settings;},draft:function(value){var d=read();if(arguments.length){d.draft=value;write(d);}return d.draft;},replace:function(data){return write(normalize(data));},clear:function(){try{localStorage.removeItem(KEY);}catch(e){}}};
}(this));
