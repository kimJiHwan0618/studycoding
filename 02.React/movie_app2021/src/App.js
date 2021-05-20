import React from "react";

function Food({ fav, price }) {
  
  return (
    <div>
      <h3>I Love {fav}</h3>
      <h4>{price}</h4>
    </div>

  )
}

const foodILike = [
  { name : 'kimchi' , price : 30500 },
  { name : 'potato' , price : 40500},
  { name : 'hamburger' , price : 80500},
  { name : 'pizza' , price : 10500},
  { name : 'hotdog' , price : 90500},
]

const friends = [
  'jihwan',
  'yohan',
  'donggu',
  'youngjoon'
]
  
friends.map(function(friend) {
  return alert(friend + "♥")
})

// console.log(culruk)


function App() {
  return (
    <div>
      {foodILike.map(dinner => {
        return <Food key={dinner.name} fav={dinner.name} price={dinner.price}/>
      })}
    </div>
  );
}

export default App;
