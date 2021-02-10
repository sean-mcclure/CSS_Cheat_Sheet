import "./App.css";


function App() {
    return(
        <>
        <h1 className="title">FLEX CHEAT SHEET</h1>
        <h3 className="subtitle">Based Off <a href="https://twitter.com/Prathkum" target="_blank">@Prathkum</a> Cheat Sheets</h3>
        <div className="wrapper">
            <div className="item">
                description...
            </div>
            <div className="item">
                <div id="flex_1_container">
                    <div className="flex_1_container_item">1</div>
                    <div className="flex_1_container_item">2</div>
                    <div className="flex_1_container_item">3</div>
                    <div className="flex_1_container_item">4</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default App;