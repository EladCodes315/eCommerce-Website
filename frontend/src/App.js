// React Hooks
import { useState } from 'react';
// CSS
import './App.css';
// Dependencies
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Components Folder
import NavBarComp from './components/NavBarComp';
import BackdropComp from './components/BackdropComp';
import SideDrawerComp from './components/SideDrawerComp';
// Screens Folder
import HomeScreenComp from './screens/HomeScreenComp';
import ProductScreenComp from './screens/ProductScreenComp';
import CartScreenComp from './screens/CartScreenComp';

function App(){
	const [ sideToggle, setSideToggle ] = useState(false);
	return (
		<BrowserRouter>
			{/* The web will be divided to 2 parts. */}
			{/* The first is the Navigation Bar which is also divided to 3: */}
			{/* The NavBar itself */}
			<NavBarComp click={() => setSideToggle(true)} />
			{/* A Backdrop for the SideDrawer's Background  */}
			<BackdropComp click={() => setSideToggle(false)} show={sideToggle} />
			{/* A SideDrawer for small viewports */}
			<SideDrawerComp click={() => setSideToggle(false)} show={sideToggle} />

			{/* After That we have the main content of the page that is divided to 3 Screens: */}
			<main>
				<Switch>
					{/* The HomeScreen */}
					<Route exact path="/" component={HomeScreenComp} />
					{/* The ProductScreen */}
					<Route exact path="/product" component={ProductScreenComp} />
					{/* The CartScreen */}
					<Route exact path="/cart" component={CartScreenComp} />
				</Switch>
			</main>
		</BrowserRouter>
	);
}

export default App;
