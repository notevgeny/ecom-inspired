import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { MainPage } from "./Components/MainPage/MainPage";
import { Page404 } from "./Components/Page404/Page404";
import { Root } from "./routes/Root";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<MainPage />} />
      <Route path='women' element={<MainPage gender='women' />} />
      <Route path='men' element={<MainPage gender='men' />} />
      <Route path='women/:category' element={<MainPage gender='women' />} />
      <Route path='men/:category' element={<MainPage gender='men' />} />
      <Route path='*' element={<Page404 />} />
    </Route>
  )
)

export const App = () => {

  return (
    <RouterProvider router={router}>
      <Header />
      <Footer />
    </RouterProvider>
  )
}
