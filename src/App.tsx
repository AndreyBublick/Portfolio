import "./App.css";



import { Header } from "./layout/header/Header";

import { Footer } from "./layout/footer/Footer";
import { routes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import { Wrapper } from "./components/Wrapper";

import { GoTop } from "./components/goTop/GoTop";
import { useWindowWidth } from "./hooks/useWindowWidth";
 import { useScrollY } from "./hooks/useScrollY";
import { useRef } from "react";



export const App = () => {

  const [widthWindow] = useWindowWidth();
  const rootElement = useRef(document.getElementById('root'));
  const [Y] = useScrollY();

 /* console.log(Y); */
 
  

return (<>
     
 
    <Header />
    <Wrapper>
        
     

    
      <Routes>
        
        {routes.map(({path,element}) =><Route key={path} path={path} element={element} />  )}
      </Routes>
      <Footer />
      
    </Wrapper>


       

    {rootElement.current && ((widthWindow > 1410 && Y>1500)  && <GoTop />) }  
    
</>

  );
};



