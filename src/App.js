import logo from './logo.svg';
import './App.css';
import Upnav from './components/Up_nav/Upnav';
import Widthwrap from './components/Wrp/Widthwrap';
import Bottomnav from './components/Bottom_nav/Bottomnav';
import Front from './components/Front';
import Topup from './components/Top_section/Topup';
import Bst from './components/Best_deals/Bst';
import Brand from './components/Brands/Brand';
import Dins from './components/Din/Dins';
import Wp from './components/Weekly_popular/Wp';
import CashBack from './components/CashBack/Cash_back';
import All from './components/All_items/All';
import Shj from './components/UI/shj';
import Footer from './components/Footer/Footer';

function App() {
  return(
   <>
        <Upnav/>
        <Bottomnav/>
        <Front/>
        <Widthwrap>
        <Topup/>
        <Bst/>
        <Brand/>
        <Dins/>
        <Wp/>
        </Widthwrap>
        <CashBack />
        <Widthwrap>

          <All/>
        </Widthwrap>
        <Shj/>

        <Widthwrap>

          <Footer/>
        </Widthwrap>
        
    
</>


  );
    
}

export default App;
