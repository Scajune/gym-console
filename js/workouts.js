(function(global){
  'use strict';
  var fallback={
    version:5,
    priorityAreas:['dorso','spalle','polpacci','caviglia-gamba'],
    initialPhase:{label:'Fase iniziale',weeks:2,mainSets:2,enabledByDefault:false},
    workouts:{
      A:{name:'Allenamento A',estimatedMinutes:55,warmup:'8-10 minuti: 2-3 min di corda tranquilla, mobilità di caviglie, anche e spalle, squat a corpo libero, hip hinge e una serie preparatoria leggera.',exercises:[
        {id:'goblet-squat',name:'Goblet squat',tip:'Petto alto, ginocchia in linea con i piedi.',sets:3,min:8,max:12,rest:90,resistance:'kg'},
        {id:'db-bench',name:'Distensioni con manubri su panca',tip:'Scapole ferme e piedi ben appoggiati.',sets:3,min:8,max:12,rest:90,resistance:'kg'},
        {id:'one-arm-row',name:'Rematore con manubrio a un braccio',tip:'Schiena neutra; completa entrambi i lati.',sets:3,min:8,max:12,rest:90,resistance:'kg',unit:'per lato'},
        {id:'rdl',name:'Stacco rumeno con due manubri',tip:'Spingi indietro i fianchi, schiena neutra.',sets:3,min:8,max:12,rest:120,resistance:'kg'},
        {id:'lateral-raise',name:'Alzate laterali',tip:'Movimento controllato, senza slancio.',sets:2,min:12,max:15,rest:60,resistance:'kg'},
        {id:'calf-raise',name:'Calf raise',tip:'Usa preferibilmente uno scalino e controlla tutta l’escursione.',sets:2,min:10,max:15,rest:60,resistance:'calf',unit:'per gamba',resistanceOptions:['Corpo libero con appoggio','Monopodalico','Gradino','Manubrio'],defaultResistance:'Corpo libero con appoggio'},
        {id:'plank',name:'Plank',tip:'Corpo in linea; inserisci i secondi nel campo ripetizioni.',sets:2,min:30,max:60,rest:60,resistance:'body',unit:'secondi',timer:true}
      ]},
      B:{name:'Allenamento B',estimatedMinutes:55,warmup:'8-10 minuti: 2-3 min di corda tranquilla, mobilità di caviglie, anche e spalle, affondi senza carico, movimenti leggeri con elastico e una serie preparatoria.',accessory:{id:'single-leg-balance',name:'Equilibrio monopodalico',durationMin:30,durationMax:45,unit:'secondi per lato',optional:true,animation:'assets/exercises/single-leg-balance.gif',muscleImage:'assets/exercises/single-leg-balance-muscles.png'},exercises:[
        {id:'reverse-lunge',name:'Affondi indietro',tip:'Passo indietro stabile e controllo di ginocchio e caviglia.',sets:3,min:8,max:12,rest:90,resistance:'kg',unit:'per gamba'},
        {id:'shoulder-press',name:'Shoulder press con manubri',tip:'Addome attivo, evita di inarcare la schiena.',sets:3,min:8,max:12,rest:90,resistance:'kg'},
        {id:'band-pulldown',name:'Lat pulldown in ginocchio con elastico',tip:'Ancoraggio alto; tira i gomiti verso i fianchi.',sets:3,min:10,max:15,rest:90,resistance:'band'},
        {id:'glute-bridge',name:'Glute bridge',tip:'Spingi il bacino mantenendo le costole controllate.',sets:3,min:10,max:15,rest:90,resistance:'kg',alternateExercise:'Hip thrust'},
        {id:'face-pull',name:'Face pull con elastico',tip:'Tira verso il viso con gomiti alti e spalle basse.',sets:2,min:12,max:15,rest:60,resistance:'band',defaultResistance:'15 kg'},
        {id:'push-up',name:'Push-up',tip:'Corpo in linea e movimento controllato.',sets:2,min:6,max:15,rest:90,resistance:'body'},
        {id:'tibialis-raise',name:'Tibialis raise',tip:'Talloni a terra; solleva le punte con controllo.',sets:2,min:12,max:20,rest:60,resistance:'tibialis',resistanceOptions:['Corpo libero','Progressione configurabile'],defaultResistance:'Corpo libero'}
      ]}
    }
  };
  var assets={
    'goblet-squat':['goblet-squat.gif','Quadricipiti,Glutei,Core'],
    'db-bench':['bench-press.gif','Pettorali,Tricipiti,Spalle'],
    'one-arm-row':['single-arm-row.gif','Dorsali,Romboidi,Bicipiti'],
    'rdl':['romanian-deadlift.gif','Femorali,Glutei,Erettori spinali'],
    'lateral-raise':['lateral-raise.gif','Deltoidi laterali'],
    'calf-raise':['calf-raise.gif','Gastrocnemio,Soleo,Stabilizzatori della caviglia'],
    'plank':['plank.gif','Core,Glutei,Spalle'],
    'reverse-lunge':['reverse-lunge.gif','Quadricipiti,Glutei,Core'],
    'shoulder-press':['shoulder-press.gif','Spalle,Tricipiti,Core'],
    'band-pulldown':['lat-pulldown.gif','Dorsali,Bicipiti,Core'],
    'glute-bridge':['glute-bridge.gif','Glutei,Femorali,Core'],
    'face-pull':['face-pull.gif','Deltoide posteriore,Trapezio,Romboidi'],
    'push-up':['push-up.gif','Pettorali,Tricipiti,Core'],
    'tibialis-raise':['tibialis-raise.gif','Tibiale anteriore,Stabilizzatori della caviglia']
  };
  var priorities={'one-arm-row':['dorso'],'lateral-raise':['spalle'],'calf-raise':['polpacci','caviglia-gamba'],'shoulder-press':['spalle'],'band-pulldown':['dorso'],'face-pull':['dorso','spalle'],'tibialis-raise':['caviglia-gamba']};
  function enrich(data){var key,w,i,ex,a,p,file;for(key in data.workouts){if(data.workouts.hasOwnProperty(key)){w=data.workouts[key];for(i=0;i<w.exercises.length;i++){ex=w.exercises[i];a=assets[ex.id];p=priorities[ex.id];if(a){file=a[0];if(!ex.animation){ex.animation='assets/exercises/'+file;}if(!ex.muscleImage){ex.muscleImage='assets/exercises/'+file.replace('.gif','-muscles.png');}if(!ex.muscles){ex.muscles=a[1].split(',');}if(!ex.primaryMuscles){ex.primaryMuscles=[ex.muscles[0]];}if(!ex.secondaryMuscles){ex.secondaryMuscles=ex.muscles.slice(1);}}if(ex.priority===undefined){ex.priority=!!p;}if(!ex.priorityAreas){ex.priorityAreas=p||[];}if(!ex.equipment){ex.equipment=[];}if(!ex.commonMistakes){ex.commonMistakes=['Evita movimenti veloci o non controllati'];}}}}return data;}
  fallback=enrich(fallback);
  global.GymWorkouts={data:fallback,load:function(callback){var xhr=new XMLHttpRequest();xhr.open('GET','data/workouts.json',true);xhr.onreadystatechange=function(){if(xhr.readyState===4){if(xhr.status===200||xhr.status===0){try{global.GymWorkouts.data=enrich(JSON.parse(xhr.responseText));}catch(e){}}callback(global.GymWorkouts.data);}};try{xhr.send();}catch(e){callback(fallback);}}};
}(this));
