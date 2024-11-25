import { Outlet } from "react-router-dom"
import Navbar from "../components/Mainmenu"

export default function DefaultLayout() {
    return (
        <>

            <header>
                <h1>title</h1>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Copiright at fede2024</p>
            </footer>
        </>
    )
}