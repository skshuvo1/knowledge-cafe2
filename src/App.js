
import './App.css';
import Blogs from './component/blogs/Blogs';
import Cart from './component/cart/Cart';
import Header from './component/header/Header';

function App() {

  
  return (
    <div className="App">
     <Header></Header>
     <Cart></Cart>
     <Blogs></Blogs>
    </div>
  );
}

export default App;
