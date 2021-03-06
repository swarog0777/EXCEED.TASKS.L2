const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const NavLink = ReactRouterDOM.NavLink;







class Nav extends React.Component {
    render() {
        return <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <NavLink exact to={"/"} activeStyle={{color: "red", fontWeight: "bold"}}> Новый профиль {"  "} </NavLink>
            <NavLink to={"/profile"} activeStyle={{color: "green", fontWeight: "bold"}}> Редактирование
                профиля{"  "}  </NavLink>
            <NavLink to={"/input"} activeStyle={{color: "yellow", fontWeight: "bold"}}> Вход{"  "}  </NavLink>
            <NavLink to={"/home"} activeStyle={{color: "pink", fontWeight: "bold"}}> Дома{"  "} </NavLink>
        </nav>
    }
}

ReactDOM.render(<Router>
    <div>
        <Nav/>
        <Switch>
            <Route exact path={"/"} component={register}/>
            <Route path={"/profile"} component={profile}/>
            <Route path={"/input"} component={input}/>
            <Route path={"/home"} component={home}/>
        </Switch>
    </div>
</Router>, document.getElementById("App"))