var turno = 1;


var ryu = {
  vida : 100,
  ataque : Math.round(Math.random()*10),
  win : function(){
    console.log('\n¡Ryu ha ganado!\n')
  }
}


var ken = {
  vida : 100,
  ataque : Math.round(Math.random()*10),
  win : function(){
    console.log('\n¡Ken ha ganado!\n')
  }
}


while(ryu.vida > 0 && ken.vida > 0){

  if(turno == 1){
    ken.vida = ken.vida - ryu.ataque;
    console.log('Ryu ataca a Ken')
    turno = 2;
    if (ken.vida<=0){
      console.log('\nKen ha muerto')
    }else if(ken.vida==1){
      console.log('Ken ahora tiene '+ken.vida+' punto de vida');
    }else{
      console.log('Ken ahora tiene '+ken.vida+' puntos de vida');
    }

  }else{
    ryu.vida = ryu.vida - ken.ataque;
    console.log('Ken ataca a Ryu')
    turno = 1;
    if (ryu.vida<=0){
      console.log('\nRyu ha muerto')
    }else if(ryu.vida==1){
      console.log('Ryu ahora tiene '+ryu.vida+' punto de vida');
    }else{
      console.log('Ryu ahora tiene '+ryu.vida+' puntos de vida');
    }
  }

}

if(ryu.vida >= 0){
  ryu.win();
}else{
  ken.win();
}
