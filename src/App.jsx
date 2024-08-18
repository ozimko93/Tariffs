import Tariff from './components/Tariff/Tariff';
import './components/TariffList/TariffList.css';

function App() {
  return (
    <>
      <div className="tariff-list">
        <Tariff title="Безлимитный 300" price={300} speed={10} />
        <Tariff title="Безлимитный 450" price={450} speed={50} />
        <Tariff title="Безлимитный 550" price={550} speed={100} highlight />
        <Tariff title="Безлимитный 1000" price={1000} speed={200} />
      </div>
    </>
  );
}

export default App;
