import "./App.css";

import CodeBlock from "./CodeBlock";


function App() {
    return(
        <>
        <h1 className="title">FLEX CHEAT SHEET</h1>
        <h3 className="subtitle">subtitle</h3>
        <div className="wrapper">
            <div className="item">
                <div className="hold_buttons_wrapper">
                    <button className="html_css">HTML</button>
                    <button className="html_css">CSS</button>
                </div>
                <CodeBlock/>
                <div className="hold_run_button"><button className="run_button">RUN</button></div>
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