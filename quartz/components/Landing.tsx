import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/landing.scss"
import Search from "./Search"
import Graph from "./Graph"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default (() => {

  const customGraphOptions = {
    localGraph: {
      drag: true,  // Disable dragging in the local graph
      zoom: true,
      depth: 2.1,     // Increase the depth for the local graph
      scale: 2.5,
      repelForce: 0.8,
      centerForce: 0.4,
      linkDistance: 120,
      fontSize: 1.2,
      opacityScale: 0, // high opacity makes node text show with slightest graph interaction
      removeTags: [],
      showTags: true,
      focusOnHover: true,
    },
    globalGraph: {
      drag: true,
      zoom: true,
      depth: 4,     // Set depth for the global graph
      scale: 0.8,
      repelForce: 0.6,
      centerForce: 0.4,
      linkDistance: 50,
      fontSize: 0.6, 
      opacityScale: 0,
      removeTags: [],
      showTags: true,
      focusOnHover: true,
    }
  }

  const SearchComponent = Search()
  const GraphComponent = Graph(customGraphOptions)
  const FooterComponent = Footer()
  const NavbarComponent = Navbar()

  function Landing(componentData: QuartzComponentProps) {
    return (
      <div className='landing-page'>
        <NavbarComponent {...componentData} />
        <section class="hero">
          <div class="container hero-content" style="display: flex; flex-direction: column; align-items: center;">
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Navigate AI Safety Research</h2>
            <p style="font-size: 1.2rem; max-width: 600px; text-align: center; margin-bottom: 2rem;">
              Explore the interconnected landscape of AI alignment through our interactive knowledge graph.
            </p>
            <div style="width: 100%; max-width: 900px;">
              <GraphComponent {...componentData} />
              <div class="legend">
                <div class="node-container">
                  <div class="legend-node node-1"></div>
                  <p style="font-size: 0.9rem;">Previously visited</p>
                </div>
                <div class="node-container">
                  <div class="legend-node node-2"></div>
                  <p style="font-size: 0.9rem;">Not yet visited</p>
                </div>
                <div class="node-container">
                  <div class="legend-node node-3"></div>
                  <p style="font-size: 0.9rem;">Current Page</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="search-content">
          <div class="container">
            <h2>Search through hundreds of research papers on AI Safety</h2>
            <div class="search-wrapper-alt">
              {/* <SearchComponent {...componentData} /> */}
            </div>
          </div>
        </section>
        <section class='content'>
          <div class="content-container narrow">
            <h2 style='border-left: solid 3px #23d5c0; padding-left: 10px; font-size: 1.8rem; margin-bottom: 1.5rem;'>How to Use This Site</h2>
            <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.2rem;">Explore the vast landscape of AI Safety topics through our interactive knowledge graph. Our intuitive interface makes navigation simple:</p>
            <ul style="list-style-type: none; padding-left: 0; margin-bottom: 2rem;">
              <li style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                <span style="font-size: 1.5rem;">🔍</span>
                <div>
                  <strong style="color: #23d5c0;">Zoom</strong>
                  <p style="margin: 0;">Use your mouse wheel or trackpad to zoom in and out, revealing different levels of detail in the knowledge graph</p>
                </div>
              </li>
              <li style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                <span style="font-size: 1.5rem;">🖱️</span>
                <div>
                  <strong style="color: #23d5c0;">Navigate</strong>
                  <p style="margin: 0;">Click and drag nodes or the background to pan around and reorganize your view of the network</p>
                </div>
              </li>
              <li style="display: flex; align-items: center; gap: 12px; margin-bottom: 1rem;">
                <span style="font-size: 1.5rem;">👆</span>
                <div>
                  <strong style="color: #23d5c0;">Explore</strong>
                  <p style="margin: 0;">Click on any node to access detailed information and discover connected topics and research</p>
                </div>
              </li>
            </ul>
            
            <h2 style='border-left: solid 3px #23d5c0; padding-left: 10px; font-size: 1.8rem; margin: 2rem 0 1.5rem;'>Getting Started</h2>
            <div style="background: rgba(35, 213, 192, 0.1); padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
              <p style="font-size: 1.1rem; line-height: 1.6; margin: 0;">New to AI Safety? You're in the right place. Our comprehensive knowledge graph connects over 400 topics from the <a style="color: #23d5ab; text-decoration: underline;" href="https://github.com/moirage/alignment-research-dataset" target="_blank">alignment research dataset</a>, creating an intuitive map of the field. Below, you'll find carefully selected starting points that introduce key concepts and fundamental ideas in AI Safety research.</p>
            </div>
            <p style="font-size: 1.1rem; line-height: 1.6;">Whether you're a researcher, student, or simply curious about AI Safety, our interactive platform helps you:</p>
            <ul style="list-style-type: none; padding-left: 0;">
              <li style="margin-bottom: 0.8rem;">📚 Access curated research papers and resources</li>
              <li style="margin-bottom: 0.8rem;">🔗 Understand connections between different concepts</li>
              <li style="margin-bottom: 0.8rem;">🎯 Follow your interests through related topics</li>
            </ul>
          </div>
        </section>
        <section class="jump-to-basics-content">
          <div class="container">
            <h2>What is AI Safety?</h2>
            <div class="get-started">
              <a href="basics"> 
                <div class="get-started-button">
                  <p>Learn Here</p>
                </div>
              </a>
            </div>
          </div>
          <img src="/AISafetyGraph/static/medicine-crosses.svg" alt="" />
        </section>
        <section class="feedback-section" style="display: flex; justify-content: space-between; padding: 4rem 2rem; gap: 20px;">
          <div class="themed-card" style="flex: 1; padding: 2rem 3rem; border-radius: 12px;">
            <h2 style='border-left: solid 3px #23d5c0; padding-left: 15px; font-size: 1.8rem; margin-bottom: 1.5rem;'>We value your feedback</h2>
            <p style="line-height: 1.6;">AI Research Graph is a work in progress and we would love to hear from you during any stage of development. We appreciate all kinds of feedback so please don't hesitate to 
              </p> 
            <a style="width: fit-content; display: block; margin-top: 40px;" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSc3M7jUr1cmcBUn1wMlHgOFtEs96H1LbHkBgJ58Q3xlnSY_Qw/viewform?usp=header">
              <div class="get-started-button" style='border-color: #23d5ab; transition: all 0.2s; hover: {transform: scale(1.02)};'>
                <p style='color: #23d5ab; font-weight: 500;'>Feedback Form</p>
              </div>
            </a>
          </div>
          <div class="themed-card" style="flex: 1; padding: 2rem 3rem; border-radius: 12px;">
            <div style="display: flex; flex-direction: column; align-items: center;">
              <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">Join our Community</h2>
              <div style="display: flex; gap: 25px; justify-content: center; margin-top: 20px;">
                <a href="https://github.com/ai-safety-graph/AISafetyGraph" target="_blank" style="display: flex; align-items: center; gap: 12px; padding: 12px 24px; border-radius: 8px; transition: all 0.2s; text-decoration: none; color: inherit; border: 1px solid #e9ecef;">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div>
                    <div style="font-weight: 600; font-size: 1.1rem;">GitHub</div>
                    <div style="font-size: 0.9rem; opacity: 0.8">Contribute to the project</div>
                  </div>
                </a>
                <a href="https://discord.gg/skqQ8y4quR" target="_blank" style="display: flex; align-items: center; gap: 12px; padding: 12px 24px; border-radius: 8px; transition: all 0.2s; text-decoration: none; color: inherit; border: 1px solid #e9ecef;">
                  <svg width="28" height="28" viewBox="0 0 71 55" fill="currentColor">
                    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/>
                  </svg>
                  <div>
                    <div style="font-weight: 600; font-size: 1.1rem;">Discord</div>
                    <div style="font-size: 0.9rem; opacity: 0.8">Join the discussion</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section class='footer' style="padding: 1rem 0; text-align: center;">
          <div class="container" style="display: flex; flex-direction: column; align-items: center;">
            <div style="margin-bottom: 0.5rem; font-size: 0.8rem; color: #636e72; letter-spacing: 0.5px;">
              Made with ❤️ in London
            </div>
            <FooterComponent {...componentData} />
          </div>
        </section>
      </div>
    )
  }

  Landing.css = landingStyle
  return Landing
}) satisfies QuartzComponentConstructor