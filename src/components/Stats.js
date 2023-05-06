import "../css/stats.css" 

function Stats() {
    const seed = Math.floor(Math.random() * 1000);
    const totalUsers = <div className="number">{seed}</div> 
    const savedTrees = <div className="number">{Math.floor(seed * 0.8)}</div>
    const emissions = <div className="number">0.1</div>


    return (
        <div className="content">
            <div>
                <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="house" />
            </div>
            <div>
                <div className="statsec">Total users: {totalUsers}</div>
                <div className="statsec">Saved trees: {savedTrees}</div>
                <div className="statsec">Total emissions: {emissions}</div>
            </div>
            
        </div>
    );
}

export default Stats;