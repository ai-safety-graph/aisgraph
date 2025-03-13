import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// import aboutStyle from "./styles/about.scss"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default (() => {
  const FooterComponent = Footer()
  const NavbarComponent = Navbar()

  function About(componentData: QuartzComponentProps) {
    return (
      <div className="about-page">
        <NavbarComponent {...componentData} />
        <h1>About Page</h1>
        <FooterComponent {...componentData} />
      </div>
    )
  }

  // About.css = aboutStyle
  return About
}) satisfies QuartzComponentConstructor