import "./index.scss";
import Header from "./Header";
import Tabs from "./Tabs";
import SidePanel from "./SidePanel";
import { Fragment, useEffect } from "@wordpress/element";

const loader = document.querySelector(".loader");
// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

const App = ({ hideLoader }) => {
	useEffect(hideLoader, []);

	return (
		<Fragment>
			<Header />
			<div className="grid grid-cols-3">
				<Tabs />
				<SidePanel />
			</div>
		</Fragment>
	);
};

/**
 * WordPress Dependencies
 */

import { render } from "@wordpress/element";

setTimeout(() => {
	render(
		<App hideLoader={hideLoader} showLoader={showLoader} />,
		document.getElementById("sd-setting-root")
	);
}, 0);
