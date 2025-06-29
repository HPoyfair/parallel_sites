import { useState } from 'react';
import './App.css';
import OpeningAnimation from './components/OpeningAnimation';

function App() {
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  return (
    <>
      {!isAnimationDone && <OpeningAnimation onFinish={() => setIsAnimationDone(true)} />}

      {isAnimationDone && (
        <div className="container">
          {/* Favicon is handled in index.html, not here */}
          <header>
            <img src="/assets/dino.webp" alt="Parallel Sites Logo" style={{ height: '60px' }} />
            <h1>Parallel Sites</h1>
            <p>Seth likes Goth mommies</p>
          </header>

          <main>
            <section>
              <h2>About</h2>
              <p>Butts, nuts, and coconuts.</p>
            </section>
          </main>

          <footer>
            <p>Please give us money, thank you.</p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
