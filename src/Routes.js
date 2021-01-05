import { BrowserRouter,Route } from "react-router-dom";
import App from "./screen/App";


function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" component={App} exact/>
        </BrowserRouter>
    )
}

export default Routes