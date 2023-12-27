// import assets
import HeaderAppLogo from '../../assets/investment-calculator-logo.png'
import HeaderStyles from '../../styles/Header.module.css'

function HeaderApp() {
    return (
        <header className={`${HeaderStyles.header}`}>
            <img src={HeaderAppLogo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default HeaderApp;