import Loader from "../loader";
import ToTopButton from "../toTopButton";
import Footer from "../ui/footer";
import Navbar from "../ui/navbar";

function Layout({children}) {
    return (<>
        <Navbar/>
        {children}
        <Footer/>
        <ToTopButton/>
        <Loader/>
    </>)
}

export default Layout;