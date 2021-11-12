import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import useAuth from '../../hooks/useAuth';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import AddReviews from '../AddReviews/AddReviews';
import Payment from '../Payment/Payment';
import ManageAllOrders from '../MangeAllOrders/ManageAllOrders';


const drawerWidth = 200;

function DashBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {/* <Link to="/home"><Button color="inherit">Appointment</Button></Link> */}
            <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>

            <Link to={`${url}/pay`}><Button color="inherit">Payment</Button></Link>
            <Link to={`${url}/myorders`}><Button color="inherit">My Orders</Button></Link>
            <Link to={`${url}/myreview`}><Button color="inherit">Reviews</Button></Link>
            <Link to="/login"><Button onClick={logout} color="inherit">Logout</Button></Link>
            <Link to={`${url}/addproducts`}><Button color="inherit">Add a Product</Button></Link>
            {admin && <Box>
                <Link to={`${url}/addproducts`}><Button color="inherit">Add a Product</Button></Link>
                <Link to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/manageallproducts`}><Button color="inherit">Manage  all Product</Button></Link>
                <Link to={`${url}/manageallorders`}><Button color="inherit">Manage  all Orders</Button></Link>

            </Box>}
            {/* <Link to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link>
            <Link to={`${url}/manageallproducts`}><Button color="inherit">Manage  all Product</Button></Link>
            <Link to={`${url}/manageallorders`}><Button color="inherit">Manage  all Orders</Button></Link> */}

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/myreview`}>
                        <AddReviews></AddReviews>
                    </Route>
                    <Route path={`${path}/addproducts`}>
                        <AddProducts></AddProducts>
                    </Route>
                    path={`${path}/makeadmin`}
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageallproducts`}>
                        <ManageAllProduct></ManageAllProduct>
                    </Route>
                    <Route path={`${path}/manageallorders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    {/* <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproducts`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute> */}
                </Switch>

            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;