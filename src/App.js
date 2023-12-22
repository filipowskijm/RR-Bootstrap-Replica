import './App.css';
import TopBar from './components/TopBar';
import Background from './components/Background';
import StoreListings from './components/StoreListings';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Background></Background>
      <StoreListings></StoreListings>
    </div>
  );
}

export default App;
