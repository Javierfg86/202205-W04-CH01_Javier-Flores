import { Button } from './components/Button/button';
import { Gentleman } from './components/Gentleman/gentleman';
import { Info } from './components/Info/info';
import './css/styles.css';

function App() {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <section className="controls">
          <Info></Info>
          <Button></Button>
        </section>
        <main className="main">
          <ul className="gentlemen">
            <Gentleman></Gentleman>
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
