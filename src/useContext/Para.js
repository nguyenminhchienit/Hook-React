import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function Para() {
    const context = useContext(ThemeContext);
    return ( 
        <p className={context.theme} style={{width: '50%'}}>
            The page will reload when you make changes.
            You may also see any lint errors in the console.
        </p>
     );
}

export default Para;