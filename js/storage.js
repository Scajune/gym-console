(function(global){
  'use strict';
  var KEY='gym-console-data-v1';
  function empty(){return {version:3,sessions:[],settings:{mainSets:3,soundVolume:70,soundType:'beep'},draft:null};}
  function normalize(d){if(!d||!d.sessions){d=empty();}if(!d.settings){d.settings=empty().settings;}if(d.settings.mainSets===undefined){d.settings.mainSets=3;}if(d.settings.soundVolume===undefined){d.settings.soundVolume=70;}if(!d.settings.soundType){d.settings.soundType='beep';}if(d.draft===undefined){d.draft=null;}d.version=3;return d;}
  function read(){var raw;try{raw=localStorage.getItem(KEY);return normalize(raw?JSON.parse(raw):empty());}catch(e){return empty();}}
  function write(data){try{localStorage.setItem(KEY,JSON.stringify(data));return true;}catch(e){alert('Impossibile salvare i dati. Libera spazio in Safari.');return false;}}
  global.GymStorage={read:read,write:write,addSession:function(s){var d=read();d.sessions.push(s);d.draft=null;return write(d);},settings:function(value){var d=read();if(value){d.settings=value;write(d);}return d.settings;},draft:function(value){var d=read();if(arguments.length){d.draft=value;write(d);}return d.draft;},replace:function(data){return write(normalize(data));},clear:function(){try{localStorage.removeItem(KEY);}catch(e){}}};
}(this));
