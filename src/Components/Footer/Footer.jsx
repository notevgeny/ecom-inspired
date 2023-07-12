import { Container } from '../Layout/Container/Container';
import { Category } from './Category/Category';
import { Contacts } from './Contacts/Contacts';
import { Social } from './Socials/Social';
import { Copyright } from './Copyright/Copyright';
import { Development } from './Development/Development';
import style from './Footer.module.scss';


export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={style.container}>
            <Category />
            <Social />
            <Contacts />
            <Copyright />
            <Development />
        </div>
      </Container>
    </footer>
    
  )
}
