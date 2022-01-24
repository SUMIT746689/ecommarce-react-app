import Cart from './components/cart/Cart';
import Nav from './components/nav/Nav';
import style from './Style.module.css';

function App() {
  return (
    <div className={style.default}>
    <Nav/>
    <Cart/>
    <h1 className={style.normal_button}>Hello World</h1>
    </div>
  );
}

export default App;
