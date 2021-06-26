import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

export interface ICard{
    image: string,
    word: string,
    audio:  string,
    translation:  string,
}
export default function CreateCards( props: ICard){
  const [style1, setStyle1] = useState({})
  const [style2, setStyle2] = useState({})
  function flip() {
    setStyle1(styleFront)
    setStyle2(styleBack)
  }
  function flipBack() {
    setStyle1({})
    setStyle2({})
  }
  const styleFront={
    transform: 'rotateY(180deg)',
  }
  const styleBack={
    transform: 'rotateY(360deg)',
  }

  function playAudio(){
    let audio = new Audio('/'+props.audio);
    audio.play();
    }
  
  return(
<div className="card" data-audio={props.audio} data-translation={props.translation}>
<div className="front" style={style1} id="cardFront" onClick={playAudio}>
<p className="card__exit"><i className="fas fa-times"></i></p>
<h2 className="card__title">{props.word}</h2>
<img className="card__iconTwo" src={props.image} alt="альтернативный текст"/>
<svg className="card__rotate" onClick={flip} id="rotate" xmlns="http://www.w3.org/2000/svg"  width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill="#ffffff" fill-rule="evenodd"></path></g></svg>
</div>
<div className="back" style={style2} id="cardBack">
<p className="card__exit"><i className="fas fa-times"></i></p>
<h2 className="card__title">{props.translation}</h2>
<img className="card__iconTwo" src={props.image} alt="альтернативный текст"/>
<svg className="card__rotate" onClick={flipBack} id="rotate" xmlns="http://www.w3.org/2000/svg"  width="400" height="400" viewBox="0, 0, 400,400"><g id="svgg"><path id="path0" d="M149.333 106.849 C -33.313 127.384,-41.223 252.474,138.667 275.531 C 146.978 276.596,157.155 277.883,161.284 278.391 L 168.790 279.314 169.284 303.117 L 169.778 326.920 214.222 292.359 C 238.667 273.351,258.667 256.989,258.667 256.000 C 258.667 255.011,238.667 238.649,214.222 219.641 L 169.778 185.080 169.280 208.294 L 168.783 231.508 158.614 230.340 C 114.170 225.237,73.024 211.579,59.659 197.495 L 54.430 191.983 60.245 185.983 C 103.148 141.719,300.841 141.956,339.792 186.318 L 345.150 192.421 340.131 197.714 C 334.182 203.985,316.718 213.058,300.000 218.562 L 288.000 222.512 288.000 246.565 L 288.000 270.618 294.624 269.375 C 380.118 253.336,418.057 192.558,369.823 148.909 C 332.872 115.470,236.377 97.063,149.333 106.849 " stroke="none" fill="#ffffff" fill-rule="evenodd"></path></g></svg>
</div>
</div>
  )
}

