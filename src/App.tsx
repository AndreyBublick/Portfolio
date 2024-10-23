import "./App.css";



import { Header } from "./layout/header/Header";

import { Footer } from "./layout/footer/Footer";
import { routes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import { Wrapper } from "./components/Wrapper";
import { MyWorks } from "./layout/sections/myWorks/MyWorks";

export const App = () => {
  return (<>
 
    <Header />
    <Wrapper>
      
    
      <Routes>
        {routes.map(({path,element}) =><Route key={path} path={path} element={element} />  )}
      </Routes>
    
      <Footer />
    </Wrapper>




</>
  );
};



