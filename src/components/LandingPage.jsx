import '../css/LandingPage.css';
import "./Dashboard"

function LandingPage(){
    return (
  <div className="LandingPage">
    <div>
        <header>
        <nav className ="navbar">
          <ul>
            <li><a href="#features">Dashboard</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        </header>
      <section>
        <img src="/assets/sethhaydenfire.jpg" alt="Parallel Sites Logo" style={{ height: '400px' }} />
        <h1>Parallel Sites</h1>
        <p>Your one-stop solution for parallel browsing.</p>
      </section>
      <main>
        
        <section >

            <a href="./Dashboard">
          <img id="start"src="/assets/Laptop_icon.png" alt="Laptop" style={{ height: '200px' }} />
          </a>
          <p>Get started making the website of your dreams, with our help!</p>
        </section>
      </main>
    </div>
  </div>
);

}
export default LandingPage;