import CreateCards from "./CardProps";


const cards = [
    {
        word: 'open',
        translation: 'открывать',
        image: '/img/open.jpg',
        audioSrc: 'audio/open.mp3',
        id: '1'
      },
      {
        word: 'play',
        translation: 'играть',
        image: '/img/play.jpg',
        audioSrc: 'audio/play.mp3',
        id: '2'
      },
      {
        word: 'point',
        translation: 'указывать',
        image: '/img/point.jpg',
        audioSrc: 'audio/point.mp3',
        id: '3'
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: '/img/ride.jpg',
        audioSrc: 'audio/ride.mp3',
        id: '4'
      },
      {
        word: 'run',
        translation: 'бегать',
        image: '/img/run.jpg',
        audioSrc: 'audio/run.mp3',
        id: '5'
      },
      {
        word: 'sing',
        translation: 'петь',
        image: '/img/sing.jpg',
        audioSrc: 'audio/sing.mp3',
        id: '6'
      },
      {
        word: 'skip',
        translation: 'прыграть',
        image: '/img/skip.jpg',
        audioSrc: 'audio/skip.mp3',
        id: '7'
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: '/img/swim.jpg',
        audioSrc: 'audio/swim.mp3',
        id: '8'
      }
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

