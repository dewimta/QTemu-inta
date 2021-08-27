import '../../App.css';
import Members from '../Members'
import Meet from '../Meet'
import Next from '../Next'
import About from '../About'
import Past from '../Past'

function Home() {
        
  return (
    <div>
      <Meet />

      <div>
        <br />
        <Next />
      </div>

      <div>
        <br />
        <About />
      </div>

      <div>
        <br />
        <Members />
      </div>

      <div>
        <br />
        <Past />
      </div>

    </div>
  );
}

export default Home;