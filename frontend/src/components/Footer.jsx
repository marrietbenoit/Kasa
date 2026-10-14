import footerLogo from '../assets/footerLogo.svg'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt="Kasa" />
      <p>© 2026 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer