import { Outlet } from "react-router-dom"
import { Header } from "../Components/Header/Header"
import { Footer } from "../Components/Footer/Footer"
import { Main } from "../Components/Layout/Main/Main"

const list = [
    { id: 1, link: 'women', title: 'Женщины', categories: [
      {id: 1, link: 'bras', title: 'Бюстгальтеры'},
      {id: 2, link: 'panties', title: 'Трусы'},
      {id: 3, link: 'socks', title: 'Носки'},
      {id: 4, link: 'bathrobes', title: 'Халаты'},
      {id: 5, link: 'thermal', title: 'Термобелье'},
      {id: 6, link: 'pijamas', title: 'Пижамы'}
    ]},
    { id: 2, link: 'men', title: 'Мужчины', categories: [
      {id: 1, link: 'panties', title: 'Трусы'},
      {id: 2, link: 'socks', title: 'Носки'},
      {id: 3, link: 'bathrobes', title: 'Халаты'},
      {id: 4, link: 'thermal', title: 'Термобелье'},
    ]},
]


export const Root = () => {
  return (
    <>
        <Header list={list} />
        <Main> 
            <Outlet />
        </Main>
        <Footer list={list} />
    </>
    
  )
}
