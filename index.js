function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  n = parseInt(n);
  let rankedList = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedList.length; i++){
    rankedList[i].innerHTML = (i + n).toString();
  }
}

function deepestChild(){
  let list = document.querySelectorAll('div#grand-node div');

  console.log(list);

  /*let list = document.querySelectorAll('div');
  let array = Array.from(list);
  let current;
  for (let i = 0; i < array.length; i++){
    //console.log(list[i].innerHTML);
    current = array[i];
    //console.log(current);
    //current = list[i];
  }
  console.log(array);
  //console.log(current);*/
}

deepestChild();
