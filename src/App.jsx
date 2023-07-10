import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { MainPage } from "./Components/MainPage/MainPage";
import { Page404 } from "./Components/Page404/Page404";
import { Root } from "./routes/Root";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice";
import { fetchColors } from "./features/colorsSlice";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<MainPage />} />
      <Route path="catalog/:gender/:category?" element={<MainPage/>} />
      <Route path='*' element={<Page404 />} />
    </Route>
  )
)

export const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
  }, [dispatch]);

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}
