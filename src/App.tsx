import AccountSummary from './components/AccountSummary';
import Graph from './components/Graph';
import Header from './components/Header';
import RecentTransactions from './components/RecentTransactions';

function App() {
  return (
    <div className='text-gray-900'>
      <Header />
      <main className='py-8 mx-auto' style={{ maxWidth: 1100 }}>
        <AccountSummary />
        <Graph />
        <RecentTransactions />
      </main>
    </div>
  );
}

export default App;
