
import { Header } from '../components'

function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Logo>
                <i className="fab fa-youtube"></i><span className="logo-text">YanaTube</span>
            </Header.Logo>
            <Header.Search />
            <Header.SearchButton>
                <i class="fas fa-search"></i>
            </Header.SearchButton>
            {children}
        </Header>
    );
}

export default HeaderContainer;