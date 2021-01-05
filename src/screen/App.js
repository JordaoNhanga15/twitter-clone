import Menu from '../components/Menu';
import Header from '../components/Aside/Header'
import '../Style/screen/App.css';
import Controls from '../components/Aside/Controls';

function App() {
  return (
    <>
      <main className="container">
        <aside className="A">
          <Menu />
        </aside>
        <aside className="B">
          <Header />
          <Controls />
        </aside>
      </main>
    </>
  );
}

export default App;
