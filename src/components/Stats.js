function Stats() {
    const seed = Math.floor(Math.random() * 1000);
    const totalUsers = <div>{seed}</div> 
    const savedTrees = <div>{Math.floor(seed * 0.8)}</div>
    const emissions = 0.1;


    return (
        <div>
            <h2>Total users: {totalUsers}</h2>
            <h2>Saved trees: {savedTrees}</h2>
            <h2>Total emissions: {emissions}</h2>
        </div>
    );
}

export default Stats;