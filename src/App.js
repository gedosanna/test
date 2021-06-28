// import logo from './logo.svg';
import './App.css';
import { isIOS, isAndroid } from 'react-device-detect';

function App() {
  console.log(isIOS, 'elo dzimen')
  return (
    <div>
      <p>IOS: {isIOS ? 'tak' : 'nie'}</p>
      <p>Android: {isAndroid ? 'tak' : 'nie'}</p>
    </div>
  );
}

export default App;
