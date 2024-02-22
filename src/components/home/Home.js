import logo from "../../logo.svg";
import Header from '../header/Header';

export default function Home() {
    return(
        <div className="App">
            <Header/>
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p> Page en cours de construction </p>
            </div>
        </div>
    )
}