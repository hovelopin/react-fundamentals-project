import React from 'react'; 

const image1 = new Image(); 
image1.src= 'img/kimchi.jpeg';
const image2 = new Image(); 
image2.src= 'public/img/soju.jpeg';
const image3 = new Image(); 
image3.src= './img/sam';
const image4 = new Image(); 
image4.src= './img/beer';

const Food = ({name , picture}) =>{
  return (
    <div>
      <h3>I Like {name}</h3>
      <img src= {picture} alt=""/>
    </div>
  );
};

const foodILike = [
  { 
    id:1,
    name: "kimchi", 
    image: image1
  },
  {
    id:2,
    name: "soju", 
    image: image2
  },
  {
    id:3,
    name: "sam", 
    image: image3
  },
  {
    id:4,
    name: "beer", 
    image: image4
  },
]
function App() {
  return (
    <div>
      {foodILike.map(food => <Food key={food.id} name={food.name} picture={food.image}/>)}
    </div>
  );
}

export default App;
