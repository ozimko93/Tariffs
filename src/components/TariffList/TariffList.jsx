import { useState } from 'react';
import Tariff from '../Tariff/Tariff';
import './TariffList.css';

function TariffList() {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const tariffs = [
    { title: 'Безлимитный 300', price: 300, speed: 10 },
    { title: 'Безлимитный 450', price: 450, speed: 50 },
    { title: 'Безлимитный 550', price: 550, speed: 100 },
    { title: 'Безлимитный 1000', price: 1000, speed: 200 },
  ];

  return (
    <div className="tariff-list">
      {tariffs.map((tariff, index) => (
        <Tariff
          key={index}
          title={tariff.title}
          price={tariff.price}
          speed={tariff.speed}
          highlight={selectedTariff === index}
          onClick={() => setSelectedTariff(index)}
        />
      ))}
    </div>
  );
}

export default TariffList;
