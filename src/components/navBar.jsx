
const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                Shopping Cart <span className="badge badge-pill badge-primary m-3">{totalCounters}</span>
            </a>
        </nav>
    );
};
export default NavBar;