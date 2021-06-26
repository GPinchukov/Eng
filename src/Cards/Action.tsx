import CreateCards from "./CardProps";


const cards = [
    { word: 'cry', translation: 'плакать', image: '/img/cry.jpg', audioSrc: 'audio/cry.mp3', id: '1'},
      { word: 'dance', translation: 'танцевать',  image: '/img/dance.jpg', audioSrc: 'audio/dance.mp3',id: '2'},
      { word: 'dive', translation: 'нырять', image: '/img/dive.jpg', audioSrc: 'audio/dive.mp3',id: '3'},
      { word: 'draw', translation: 'рисовать', image: '/img/draw.jpg', audioSrc: 'audio/draw.mp3',id: '4'},
      { word: 'fish', translation: 'ловить ', image: '/img/fish.jpg', audioSrc: 'audio/fish.mp3',id: '5'},
      { word: 'fly', translation: 'летать', image: '/img/fly.jpg', audioSrc: 'audio/fly.mp3',id: '6' },
      { word: 'hug', translation: 'обнимать', image: '/img/hug.jpg', audioSrc: 'audio/hug.mp3',id: '7'},
      { word: 'jump', translation: 'прыгать', image: '/img/jump.jpg', audioSrc: 'audio/jump.mp3',id: '8'}
];

const cardComponent = cards.map((card) =>
<CreateCards image={card.image} word={card.word} audio={card.audioSrc} translation={card.translation} key={card.id}/>
);

function Action(){
return(
 <div className="card-container">
     {cardComponent}
 </div>
);
}

export default Action;

