const s = "the quick the brown quick brown the frog";
const w1 = "quick";
const w2 = "frog";
//Output : 2


const stringArr = s.split(" "); // ["the", "quick"... ]

let i = 0; 
let w1Position = null;
let w2Position = null;
let minDistance = stringArr.length;

while(i < stringArr.length)  {
 
 if(stringArr[i] === w1) {
  w1Position = i;
 }
 
  if(stringArr[i] === w2) {
   w2Position = i;
  }
  
  if(w1Position !== null && w2Position !== null) {
    minDistance = Math.min(minDistance, Math.abs(w2Position - w1Position - 1));
  }

 i++;
}

console.log(minDistance);


