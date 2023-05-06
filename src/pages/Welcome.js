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
                <Stats />
                
            </div>

        </div>
    );
}

export default Welcome;