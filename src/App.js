import './App.css';
import Home from './pages/home/index'
import Header from './components/header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import AddExpense from './pages/add-expense';

function App() {
  return (
    <Router>
     <Header/>
     <Switch>
       <Route path='/' exact component={Home}></Route>
       <Route path='/add-expense' exact component={AddExpense}></Route>
     <Home/>
     </Switch>
     </Router>
    
  );
}

export default App;
