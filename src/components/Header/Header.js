import Logo from "./Logo";
import Navigation from "./Navigation";
import './Header.css';
export default function Header(){
    return (
        <header className="app-header">
            <Logo />
            <Navigation />
        </header>
    );
}