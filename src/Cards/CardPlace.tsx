import { Link } from "react-router-dom";

function CardPlace() {

  return (  
    <div className="card-container">
      <Link to='/section/1/'>
      <div className="card card-1">
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__titleOne">Action (set A)</h2>
      <img className="card__icon" src="https://english-for-kids.netlify.app/static/media/dance.c70cc103.jpg" alt="альтернативный текст"/>
    </div>
      </Link>
      <Link to='/section/2/'>
    <div className="card card-2">
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__titleOne">Action (set B)</h2>
      <img className="card__icon" src="https://english-for-kids.netlify.app/static/media/swim.bddf0687.jpg" alt="альтернативный текст"/>
    </div>
    </Link>
    <Link to='/section/3/'>
    <div className="card card-3">
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__titleOne">Action (set C)</h2>
      <img className="card__icon" src="https://english-for-kids.netlify.app/static/media/drop.8cb9f43a.jpg" alt="альтернативный текст"/>
    </div>
    </Link>
    <Link to='/section/4/'>
    <div className="card card-4">
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__titleOne sdwig">Adjective</h2>
      <img className="card__icon" src="https://english-for-kids.netlify.app/static/media/friendly.ebfd8e9a.jpg" alt="альтернативный текст"/>
    </div>
    </Link>
    <Link to='/section/5/'>
    <div className="card card-5">
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__titleOne">Animal (set A)</h2>
      <img className="card__icon" src="https://english-for-kids.netlify.app/static/media/cat.e91220bb.jpg" alt="альтернативный текст"/>
    </div>
    </Link>
    <Link to='/section/6/'>
    <div className="card card-1">
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__titleOne">Animal (set B)</h2>
      <img className="card__icon" src="https://english-for-kids.netlify.app/static/media/bird.f0a80efa.jpg" alt="альтернативный текст"/>
    </div>
    </Link>
    <Link to='/section/7/'>
    <div className="card card-3">
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__titleOne">Clothes</h2>
      <img className="card__icon" src="https://english-for-kids.netlify.app/static/media/blouse.37a6d8fa.jpg" alt="альтернативный текст"/>
    </div>
    </Link>
    <Link to='/section/8/'>
    <div className="card card-1">
      <p className="card__exit"><i className="fas fa-times"></i></p>
      <h2 className="card__titleOne sdwig">Emotional</h2>
      <img className="card__icon" src="https://english-for-kids.netlify.app/static/media/smile.f55cb470.jpg" alt="альтернативный текст"/>
    </div>
    </Link>
  </div>
  );
}

export default CardPlace;