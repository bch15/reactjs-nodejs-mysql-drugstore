import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import { Box, IconButton, Link } from '@material-ui/core'
import Icon from '@mdi/react'

//icons
import {
  mdiFacebook as FacebookIcon,
  mdiTwitter as TwitterIcon,
  mdiGithub as GithubIcon,
} from '@mdi/js'

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts/ChartList";

// context
import { useLayoutState } from "../../context/LayoutContext";
import NewPage from "../../pages/newPage/NewPage";
import DrugsList from "../../pages/drugList/DrugsList";
import EditDrugs from "../../pages/drugList/EditDrugs";
import DrugApi from "../../pages/drugs/DrugApi";
import FactorForm from './../../pages/drugList/FactorForm';
import AddPrice from "../../pages/drugList/AddPrice";
import { DrugProvider } from "../../context/DrugContext";
import ProductsList from "../../pages/reports/ProductsList";
import StuffList from "../../pages/reports/StuffList";
import Factor from "../../pages/reports/Factor";
import RizFactorList from "../../pages/reports/RizFactorList";
import EditeRizFactor from "../../pages/reports/EditRizFactor";
import NoskheList from "../../pages/reports/NoskheList";
import ReportStuff from "../../pages/reports/ReportStuff";
import ReportTolidkonande from "../../pages/reports/ReportTolidkonande";
import ReportFactor from "../../pages/reports/ReportFactor";
import ReportRizFactor from "../../pages/reports/ReportRizFactor";
import ReportProduct from "../../pages/reports/ReportProduct";
import ReportRizFactorByIdList from "../../pages/reports/ReportRizFactorByIdList";
import ChartList from "../../pages/charts/ChartList";
import ChartTedad from "../../pages/charts/ChartTedad";
import CartTolidkonande from "../../pages/charts/CartTolidkonande";
import ChartFactor from "../../pages/charts/ChartFactor";
import ChartStuff from "../../pages/charts/ChartStuff";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <DrugProvider>
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/tables" component={Tables} />
              <Route path="/app/notifications" component={Notifications} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/new" component={NewPage} />
              <Route path="/app/drugList" component={DrugsList} />
              <Route path="/app/editDrug" component={EditDrugs} />
              <Route path="/app/drugsApi" component={DrugApi} />
              <Route path="/app/factor" component={FactorForm} />
              <Route path="/app/factor-price" component={AddPrice} />
              <Route path="/app/Products-list" component={ProductsList} />
              <Route path="/app/stuff-list" component={StuffList} />
              <Route path="/app/factor-list" component={Factor} />
              <Route path="/app/rizfactor-list" component={RizFactorList} />
              <Route path="/app/edit-rizfactor" component={EditeRizFactor} />
              <Route path="/app/noskhe-list" component={NoskheList} />
              <Route path="/app/report-stuff" component={ReportStuff} />
              <Route path="/app/report-tolidkonande" component={ReportTolidkonande} />
              <Route path="/app/report-factor" component={ReportFactor} />
              <Route path="/app/report-rizfactor" component={ReportRizFactor} />
              <Route path="/app/report-rizfactorById" component={ReportRizFactorByIdList} />
              <Route path="/app/report-product" component={ReportProduct} />
              <Route path="/app/chart-lst" component={ChartList} />
              <Route path="/app/chart-tedad" component={ChartTedad} />
              <Route path="/app/chart-tolidkonande" component={CartTolidkonande} />
              <Route path="/app/chart-factor" component={ChartFactor} />
              <Route path="/app/chart-stuff" component={ChartStuff} />
            </Switch>
          </DrugProvider>
          <Box
            mt={5}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
           
          </Box>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
