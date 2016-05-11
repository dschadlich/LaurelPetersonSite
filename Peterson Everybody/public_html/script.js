function scroll(){
    scrollBy(0,-135);
    return;
}
function chooseContact (){
  if (window.innerWidth < 750){
      setTimeout ("scrollBy (0, document.getElementById('leftmail').offsetTop)", 50);
  }else{
    setTimeout ("scrollBy (0, document.getElementById('rightmail').offsetTop-135)", 50);
  }

}
