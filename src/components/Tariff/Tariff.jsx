import './Tariff.css';

function Tariff(props) {
  const { title, price, speed, highlight, onClick } = props;

  return (
    <div className={`tariff ${highlight ? 'highlight' : ''}`} onClick={onClick}>
      <h3>{title}</h3>
      <div className="price">
        руб <span>{price}</span>/мес
      </div>
      <p>до {speed} Мбит/сек</p>
      <p>Объем включенного трафика не ограничен</p>
    </div>
  );
}

export default Tariff;
