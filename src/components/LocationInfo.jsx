
import './styles/LocationInfo.css'

const LocationInfo = ({location}) => {

  return (
    <article className="location">
        <h2 className="location__name">{location?.name}</h2>
        <ul className="location__info">
          <li className="location__info-item"><span className="item__label">Type: </span><span className="item__data">{location?.type}</span></li>
          <li className="location__info-item"><span className="item__label">Dimension: </span><span className="item__data">{location?.dimension}</span></li>
          <li className="location__info-item"><span className="item__label">Population: </span><span className="item__data">{location.residents?.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo
