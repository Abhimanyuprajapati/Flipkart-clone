
import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header/header"
import { Plus } from "./components/plus";     // this is for pratice
import { Home } from "./container/home";
import { CardDetail } from "./container/carddetail";
import ErrorPage from "./components/error";
import { Foot } from "./components/footer/foot";
import { ComingSoon } from "./components/ComingSoon";
import { Card } from "./components/card";
import { Payments } from "./components/Payments";
// import { Product } from "./components/Product";
// import "../src/css/home.css"


function App() {

  return (
    <>

      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="plus" element={<Plus />} />
          <Route path="carddetail/:id" element={<CardDetail />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/card" element={<Card />} />
          <Route path="*" element={<ErrorPage />} />
          <Route exact path="/payments" element={<Payments />} />
        </Routes>
      </div>
      <Foot />
    </>
  )
}

export default App
