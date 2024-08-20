import Navigation from "../../routes/navigation/navigation.component";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}