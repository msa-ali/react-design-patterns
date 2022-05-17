import logo from './logo.svg';
import './App.css';
import { CurrentUserLoader } from './CurrentUserLoader';
import { UserInfo } from './UserInfo';
import { UserLoader } from './UserLoader';

function App() {
  return (
    <UserLoader userId={1}>
      <UserInfo />
    </UserLoader>
  );
}

export default App;
