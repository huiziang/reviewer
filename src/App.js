function App() {
    return (
        <main style={{ height: "100%", width: "100%", display: 'flex' }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                <header>Search for a product to get summarized reviews posted online!</header>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}><input type="text"></input><button>Search</button></div>
            </div>
        </main>

    );
}

export default App;
