import './style.css'


// MAP

const p_map = document.querySelector("#ex-map");

const nb_map =  [1, 2, 3, 4];
const nb_map2 = [];

function map() {
  for(let i = 0; i < nb_map.length; i++) {
    nb_map2.push(nb_map[i]);
    nb_map2[i]++;
  }
}

map()
p_map.textContent = nb_map2;


// CONCAT

const p_concat = document.querySelector("#ex-concat");

const T1 = [1, 2, 3];
const T2 = [4, 5, 6];
const T3 = [];

function concat() {
  T3.push(T1 + "," + T2);
}

concat()

p_concat.textContent = T3;



// SOME

const p_some = document.querySelector("#ex-some");

const tab = [1,2,4,3];

function some() {
  for(let i = 0; i < tab.length; i++) {
    if(tab[i] == 4) {
      return true;
    }
  }
}

p_some.textContent = some();