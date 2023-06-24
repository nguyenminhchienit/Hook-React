import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import Content from './Content'

//Su dung useContext de truyen khong can thong qua component trung gian

//Phan nay cai obj cua context tra ve co Provider (dung de truyen value), Consumer(de noi nhan value su du )

function UseContext() {

    const context = useContext(ThemeContext);
    
    return ( 
            <div>
                <button onClick={context.toggleTheme}>Toggle theme</button>
                <Content></Content>
            </div>
     );
}

export default UseContext;