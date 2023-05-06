import "../css/welcome.css"
import Stats from "../components/Stats";

function Welcome() {


    return (
        <div>
            <nav>
                <h1>Carbon Sweeper</h1>
            </nav>
            <h2>Welcome to Carbon Sweeper!</h2>
            <div className="stats">
                <img src="https://www.energysage.com/wp-content/uploads/2020/05/energy-efficient-home.jpg" alt="house" />
                <Stats />
                
            </div>

        </div>
    );
}

export default Welcome;