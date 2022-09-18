import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom'

import { UserContext } from '../../context/UserContext';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './Navigation.styles';


const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutUser = async () => {
        try {
            setCurrentUser(null);
            alert("sign out completed")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <h2>METNEXT</h2>
                </LogoContainer>

                <NavLinks>
                    {
                        currentUser ? (
                            <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to="/auth">
                                SIGN IN
                            </NavLink>
                        )
                    }
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;