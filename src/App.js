import logo from './logo.svg';
import './App.css';
import SubIndexList from './components/FinancialDashboard/SubIndexList';
import FinancialDashboard from './components/FinancialDashboard/FinancialDashboard';
import { ListProvider as SubIndexContext } from './context/SubIndexContext';
function App() {
  return (
    <div className="App">
      <SubIndexContext>
        <FinancialDashboard />
        <SubIndexList />
      </SubIndexContext>
    </div>
  );
}

export default App;
