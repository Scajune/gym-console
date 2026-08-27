(function(global){
  'use strict';
  var fallback={
    version:1,
    workouts:{
      A:{name:'Allenamento A',warmup:'8-10 minuti: corda tranquilla, mobilità, squat a corpo libero e una serie preparatoria.',exercises:[
        {id:'goblet-squat',name:'Goblet squat',tip:'Petto alto, ginocchia in linea con i piedi.',sets:3,min:8,max:12,rest:90,resistance:'kg'},
        {id:'db-bench',name:'Distensioni con manubri su panca',tip:'Scapole ferme e piedi ben appoggiati.',sets:3,min:8,max:12,rest:90,resistance:'kg'},
        {id:'one-arm-row',name:'Rematore con manubrio a un braccio',tip:'Schiena neutra; completa entrambi i lati.',sets:3,min:8,max:12,rest:90,resistance:'kg',unit:'per lato'},
        {id:'rdl',name:'Stacco rumeno con due manubri',tip:'Spingi indietro i fianchi, schiena neutra.',sets:3,min:8,max:12,rest:120,resistance:'kg'},
        {id:'lateral-raise',name:'Alzate laterali',tip:'Movimento controllato, senza slancio.',sets:2,min:12,max:15,rest:60,resistance:'kg'},
        {id:'curl',name:'Curl bicipiti',tip:'Gomiti fermi vicino al busto.',sets:2,min:10,max:15,rest:60,resistance:'kg'},
        {id:'plank',name:'Plank',tip:'Corpo in linea; inserisci i secondi nel campo ripetizioni.',sets:2,min:30,max:60,rest:60,resistance:'body',unit:'secondi',timer:true}
      ]},
      B:{name:'Allenamento B',warmup:'8-10 minuti di corda tranquilla, mobilità e una serie preparatoria.',exercises:[
        {id:'reverse-lunge',name:'Affondi indietro oppure step-up',tip:'Completa le ripetizioni per ogni gamba.',sets:3,min:8,max:12,rest:90,resistance:'kg',unit:'per gamba'},
        {id:'shoulder-press',name:'Shoulder press con manubri',tip:'Addome attivo, evita di inarcare la schiena.',sets:3,min:8,max:12,rest:90,resistance:'kg'},
        {id:'band-pulldown',name:'Lat pulldown in ginocchio con elastico',tip:'Ancoraggio alto; tira i gomiti verso i fianchi.',sets:3,min:10,max:15,rest:90,resistance:'band'},
        {id:'split-squat',name:'Bulgarian split squat oppure affondi',tip:'Completa le ripetizioni per ogni gamba.',sets:3,min:8,max:12,rest:90,resistance:'kg',unit:'per gamba'},
        {id:'push-up',name:'Push-up',tip:'Corpo in linea e movimento controllato.',sets:2,min:6,max:15,rest:90,resistance:'body'},
        {id:'band-pushdown',name:'Pushdown tricipiti con elastico',tip:'Gomiti fermi vicino al busto.',sets:2,min:10,max:15,rest:60,resistance:'band'},
        {id:'dead-bug',name:'Dead bug',tip:'Schiena bassa aderente al tappetino; per lato.',sets:2,min:8,max:12,rest:60,resistance:'body',unit:'per lato'}
      ]}
    }
  };
  var assets={
    'goblet-squat':['goblet-squat.gif','Quadricipiti,Glutei,Core'],
    'db-bench':['bench-press.gif','Pettorali,Tricipiti,Spalle'],
    'one-arm-row':['single-arm-row.gif','Dorsali,Romboidi,Bicipiti'],
    'rdl':['romanian-deadlift.gif','Femorali,Glutei,Erettori spinali'],
    'lateral-raise':['lateral-raise.gif','Deltoidi laterali'],
    'curl':['biceps-curl.gif','Bicipiti,Brachiale'],
    'plank':['plank.gif','Core,Glutei,Spalle'],
    'reverse-lunge':['reverse-lunge.gif','Quadricipiti,Glutei,Core'],
    'shoulder-press':['shoulder-press.gif','Spalle,Tricipiti,Core'],
    'band-pulldown':['lat-pulldown.gif','Dorsali,Bicipiti,Core'],
    'split-squat':['bulgarian-split-squat.gif','Quadricipiti,Glutei,Core'],
    'push-up':['push-up.gif','Pettorali,Tricipiti,Core'],
    'band-pushdown':['triceps-pushdown.gif','Tricipiti'],
    'dead-bug':['dead-bug.gif','Core,Flessori dell’anca']
  };
  function enrich(data){var key,w,i,ex,a;for(key in data.workouts){if(data.workouts.hasOwnProperty(key)){w=data.workouts[key];for(i=0;i<w.exercises.length;i++){ex=w.exercises[i];a=assets[ex.id];if(a){if(!ex.animation){ex.animation='assets/exercises/'+a[0];}if(!ex.muscles){ex.muscles=a[1].split(',');}}}}}return data;}
  fallback=enrich(fallback);
  global.GymWorkouts={data:fallback,load:function(callback){var xhr=new XMLHttpRequest();xhr.open('GET','data/workouts.json',true);xhr.onreadystatechange=function(){if(xhr.readyState===4){if(xhr.status===200||xhr.status===0){try{global.GymWorkouts.data=enrich(JSON.parse(xhr.responseText));}catch(e){}}callback(global.GymWorkouts.data);}};try{xhr.send();}catch(e){callback(fallback);}}};
}(this));
