import SideMenu from "./SideMenue";

function Layout(props: any) {
    return (
        <div className="d-flex" id="wrapper">
            <SideMenu />
            <div className="container-fluid">
                <main>{props.children}</main>
            </div>
        </div>
    );
}

export default Layout;
