import './index.css'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="shoes-card">
        <div className="circle"></div>
        <div className="intro">
          <h2>Shoes DIY</h2>
          <p>description description description description description description description description description description</p>
          <button onClick={() => navigate('/customizer')}>DIY Now</button>
        </div>
        <img src='/imgs/shoes.png' alt= ''></img>
      </div>
    </div>
  );
}

export default App;
