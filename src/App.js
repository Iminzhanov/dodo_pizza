import Home from './pages/home';
import Header from './componets/heder';
import Cart from './pages-router-dom';
import { Route } from 'react-router-dom';
import './scss/app.scss';
function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Route exat path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </div>
    </div>
  )
}
export default App;
