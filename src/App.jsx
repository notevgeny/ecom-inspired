import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Page404 } from "./pages/Page404/Page404"
import { Root } from "./routes/Root";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice";
import { fetchColors } from "./features/colorsSlice";
import { ProductPage } from "./pages/ProductPage/ProductPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<MainPage />} />
      <Route path="catalog/:gender/:category?" element={<MainPage />} />
      <Route path="product/:id" element={<ProductPage />}/>
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
