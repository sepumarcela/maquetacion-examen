import './Card.css'

function Card({ titulo }) {
  return (
    <div className="card">
      <div className="card__imagen">
        <p className="card__imagen-texto">COMPONENTE TRES</p>
      </div>
      <div className="card__titulo">
        <p>{titulo}</p>
      </div>
    </div>
  )
}

export default Card