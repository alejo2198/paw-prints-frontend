import './NavBar.scss';
import { Link } from 'react-router-dom';
import DogLink from '../../assets/nav-links/dog-link.svg'
import PawPostLink from '../../assets/nav-links/pawpost-link.svg'
import BondLink from '../../assets/nav-links/bond-link.svg'

const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><Link to='/profile' className="nav__link"><img className="nav__icon" src={DogLink} alt=""  /></Link></li>
                <li className="nav__item"><Link to='/pawpost/add' className="nav__link"><img className="nav__icon" src={PawPostLink} alt=""  /></Link></li>
                <li className="nav__item"><Link to='/bond' className="nav__link"><img className="nav__icon" src={BondLink} alt=""  /></Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;