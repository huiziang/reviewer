import React, { useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/submit-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputData: inputValue }),
            });

            const result = await response.json();
            console.log(result.message);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <main style={{ height: "100vh", width: "100vw", display: 'flex', flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", paddingTop: "3%" }}>
                <header style={{ fontSize: "20px" }}>Search for a product to get summarized reviews posted online!</header>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "50px", marginTop: "1%" }}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} style={{ width: "200px", padding: "5px 10px" }} />
                        <button type="submit" style={{ padding: "5px 10px" }}>
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div style={{ marginTop: "3%", display: 'flex', flexDirection: "row", width: "90%", flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", width: "45%", height: "70%", alignItems: 'center' }}>
                    <div style={{ backgroundColor: "grey", width: "35%", height: "85%" }} ></div>
                    <div style={{ marginTop: "2%" }}>Product Name</div>
                </div>
                <div style={{ width: "40%" }}>
                    <b>Review Summary</b>: "Most users find this product to be reliable and well-made, with solid performance that meets expectations.
                    Many appreciate its ease of use, though a few mention a slight learning curve at first.
                    The quality is generally praised, but some feel certain aspects could be improved—whether it's durability, comfort, or additional features.
                    While the majority think it's a great value for the price, a few users feel it falls slightly short in specific areas.
                    Overall, it's a dependable choice with mostly positive feedback.
                    <br />
                    <br />
                    <i>Summarized from 6 reviews</i>
                </div>
            </div>
        </main>

    );
}

export default App;
