import { Outlet } from "react-router-dom"
import { Header } from "../Components/Header/Header"
import { Footer } from "../Components/Footer/Footer"
import { Main } from "../Components/Layout/Main/Main"

export const Root = () => {
  return (
    <>
        <Header />
        <Main> 
            <Outlet />
        </Main>
        <Footer />
    </>
    
  )
}
