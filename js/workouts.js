(function(global){
  'use strict';
  var fallback={
    version:1,
    workouts:{
      A:{name:'Allenamento A',warmup:'8-10 minuti: corda tranquilla, mobilità, squat a corpo libero e una serie preparatoria.',exercises:[
        {id:'goblet-squat',name:'Goblet squat',tip:'Petto alto, ginocchia in linea con i piedi.',sets:3,min:8,max:12,rest:90,resistance:'kg'},
        {id:'db-bench',name:'Distensioni con manubri su panca',tip:'Scapole ferme e piedi ben appoggiati.',sets:3,min:8,max:12,rest:90,resistance:'kg'},
        {id:'one-arm-row',name:'Rematore con manubrio a un braccio',tip:'Schiena neutra; completa entrambi i lati.',sets:3,min:8,max:12,rest:90,resistance:'kg'},
        {id:'rdl',name:'Stacco rumeno con due manubri',tip:'Spingi indietro i fianchi, schiena neutra.',sets:3,min:8,max:12,rest:120,resistance:'kg'},
        {id:'lateral-raise',name:'Alzate laterali',tip:'Movimento controllato, senza slancio.',sets:2,min:12,max:15,rest:60,resistance:'kg'},
        {id:'curl',name:'Curl bicipiti',tip:'Gomiti fermi vicino al busto.',sets:2,min:10,max:15,rest:60,resistance:'kg'},
        {id:'plank',name:'Plank',tip:'Corpo in linea; inserisci i secondi nel campo ripetizioni.',sets:2,min:30,max:60,rest:60,resistance:'body'}
      ]},
      B:{name:'Allenamento B',warmup:'8-10 minuti di corda tranquilla, mobilità e una serie preparatoria.',exercises:[
        {id:'reverse-lunge',name:'Affondi indietro oppure step-up',tip:'Completa le ripetizioni per ogni gamba.',sets:3,min:8,max:12,rest:90,resistance:'kg'},
        {id:'shoulder-press',name:'Shoulder press con manubri',tip:'Addome attivo, evita di inarcare la schiena.',sets:3,min:8,max:12,rest:90,resistance:'kg'},
        {id:'band-pulldown',name:'Lat pulldown in ginocchio con elastico',tip:'Ancoraggio alto; tira i gomiti verso i fianchi.',sets:3,min:10,max:15,rest:90,resistance:'band'},
        {id:'split-squat',name:'Bulgarian split squat oppure affondi',tip:'Completa le ripetizioni per ogni gamba.',sets:3,min:8,max:12,rest:90,resistance:'kg'},
        {id:'push-up',name:'Push-up',tip:'Corpo in linea e movimento controllato.',sets:2,min:6,max:15,rest:90,resistance:'body'},
        {id:'band-pushdown',name:'Pushdown tricipiti con elastico',tip:'Gomiti fermi vicino al busto.',sets:2,min:10,max:15,rest:60,resistance:'band'},
        {id:'dead-bug',name:'Dead bug',tip:'Schiena bassa aderente al tappetino; per lato.',sets:2,min:8,max:12,rest:60,resistance:'body'}
      ]}
    }
  };
  global.GymWorkouts={data:fallback,load:function(callback){var xhr=new XMLHttpRequest();xhr.open('GET','data/workouts.json',true);xhr.onreadystatechange=function(){if(xhr.readyState===4){if(xhr.status===200||xhr.status===0){try{global.GymWorkouts.data=JSON.parse(xhr.responseText);}catch(e){}}callback(global.GymWorkouts.data);}};try{xhr.send();}catch(e){callback(fallback);}}};
}(this));
