import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import navbarStyle from "./styles/navbar.scss"
import Darkmode from "./Darkmode"
import Search from "./Search"


export default(() => {
  const DarkmodeComponent = Darkmode()
  const SearchComponent = Search()

  function Navbar(componentData: QuartzComponentProps) {
    return (
      <nav className="navbar" style={{
        boxShadow: 'var(--shadow)',
        borderBottom: '1px solid var(--lightgray)',
        backgroundColor: 'var(--light)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div class="container">
          <a href="/">
          <h1 class="logo" style="font-family: 'Montserrat', sans-serif; font-weight: 800; letter-spacing: -0.5px; font-size: 1.5rem; background: linear-gradient(45deg, #284b63, #84a59d); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Alignment Graph</h1></a>
          {/* <div class="nav-search" style="min-width: 400px; max-width: 500px"> */}
          <SearchComponent {...componentData}/>
          {/* </div> */}
          <ul class="nav-links" style="display: flex; align-items: center;">
          <li>
          <a style="width: fit-content; display: block;" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc3M7jUr1cmcBUn1wMlHgOFtEs96H1LbHkBgJ58Q3xlnSY_Qw/viewform?usp=header" >
          <div class="feedback-button" style='border-color: #23d5ab; transition: all 0.2s; hover: {transform: scale(1.02)};'>
              <p style='color: #23d5ab; font-weight: 500; font-size: 15px'>Tell Us What You Think!</p>
            </div>
            </a>
            </li>
            <li>
              <a href="/about" style="display: flex; align-items: center; gap: 5px;">
              <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
    fill="currentColor"
  />
</svg>
              <p class="nav-link-text">About</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/ai-safety-graph/AISafetyGraph" target="_blank" style="display: flex; align-items: center; gap: 5px;">
                <svg height="24" width="24" viewBox="0 0 16 16" version="1.1" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <p class="nav-link-text">Star us</p>
              </a>
            </li>
            <li>
              <a href="https://discord.gg/skqQ8y4quR" target="_blank" style="display: flex; align-items: center; gap: 5px;">
                <svg width="24" height="24" viewBox="0 0 71 55" fill="currentColor">
                  <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/>
                </svg>
                <p class="nav-link-text">Discord</p>
              </a>
            </li>
            <li class="darkmode-icon" style="display: flex; align-items: center; margin-right: 10px">
                <DarkmodeComponent {...componentData} />
              </li>
          </ul>
        </div>
      </nav>
    )
  }
  Navbar.css = navbarStyle
  return Navbar
}) satisfies QuartzComponentConstructor