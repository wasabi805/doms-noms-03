import React from "react";
import ReactDOM from "react-dom";
import MainStyle from './assets/style/index.scss'



const Index=()=>{

    console.log(MainStyle)

    return(
        <div id={MainStyle.main}>

            <p>This is in main</p>

            <h2 className={MainStyle.test}>Hello Tim</h2>

        </div>
    )
};

ReactDOM.render(<Index/>, document.getElementById('root'));