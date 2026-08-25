(function(global){
  'use strict';
  var KEY='gym-console-data-v1';
  function empty(){return {version:1,sessions:[],settings:{mainSets:3}};}
  function read(){var raw;try{raw=localStorage.getItem(KEY);return raw?JSON.parse(raw):empty();}catch(e){return empty();}}
  function write(data){try{localStorage.setItem(KEY,JSON.stringify(data));return true;}catch(e){alert('Impossibile salvare i dati. Libera spazio in Safari.');return false;}}
  global.GymStorage={read:read,write:write,addSession:function(s){var d=read();d.sessions.push(s);return write(d);},settings:function(value){var d=read();if(value){d.settings=value;write(d);}return d.settings;},replace:function(data){return write(data);},clear:function(){try{localStorage.removeItem(KEY);}catch(e){}}};
}(this));
