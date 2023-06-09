import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Button, Grid } from '@material-ui/core'
// @ts-ignore
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'

import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../main'


const Navbar = () => {
    // @ts-ignore
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar color={'secondary'} position='static'>
            <Toolbar variant={'dense'}>
                <Grid container justify={'flex-end'}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={'outlined'}>Выйти</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={'outlined'}>Логин</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar