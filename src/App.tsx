import './App.css';
import LoginView from './Components/AuthArea/LoginView/LoginView';
import RegisterView from './Components/AuthArea/RegisterView/RegisterView';
import AdminView from './Components/HomeArea/AdminView/AdminView';
import MediumView from './Components/HomeArea/MediumView/MediumView';
import AddView from './Components/LayoutArea/Admin/AddView/AddView';
import AdminCard from './Components/LayoutArea/Admin/AdminCard/AdminCard';
import CardView from './Components/LayoutArea/User/CardView/CardView';



function App() {
    return (
        <div className="App">
            <h1>Vacation Site</h1>
             <LoginView />
            <MediumView />
            <AdminView />
            <RegisterView /> 
            {/* <AddView></AddView>
          <AdminCard></AdminCard> */}
            
        </div>
    );
}

export default App;
