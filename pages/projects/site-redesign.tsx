import heroImage from "../../public/assets/project_thumbnails/redesign_long.png";
import problemsImg from "../../public/assets/troop/usability_problems.svg";
import desktopWf from "../../public/assets/troop/wireframes/desktop.svg";
import tabletWf from "../../public/assets/troop/wireframes/tablet.svg";
import mobileWf from "../../public/assets/troop/wireframes/mobile.svg";
import styleGuideImg from "../../public/assets/troop/style_guide.svg";
import desktopHifi from "../../public/assets/troop/hifi/desktop.png";
import tabletHifi from "../../public/assets/troop/hifi/tablet.png";
import mobileHifi from "../../public/assets/troop/hifi/mobile.svg";
import siteGif from "../../public/assets/troop/site.gif";
import interiorImg from "../../public/assets/troop/interior.jpeg";
import HeaderSection from "../../components/HeaderSection";
import ProjectBanner from "../../components/ProjectBanner";
import ImageSection from "../../components/ImageSection";
import SeeMoreButton from "../../components/SeeMoreButton";
import Image from "next/image";
import Head from "next/head";

const TroopRedesign = () => {
  const headerInfo = {
    title: "Troop PVD's Landing Page",
    tldr: "I redesigned a restaurant's landing page to be responsive and elegant on desktop, tablet, and mobile screens. To begin, I identified the usability problems with the original page. I then used lofi wireframes to ideate a new design that would address these problems. I used Figma to create hifi mockups of the website, and finally built the page using handcoded HTML/CSS!",
    tools: ["Figma", "Balsamiq", "HTML/CSS"],
    team: ["just me!"],
    timeline: "2 weeks",
    buttonLabel: "View the final redesign!",
    buttonLink: "https://sillysloth888.github.io/cs130-responsive-redesign/",
  };

  return (
    <>
      <Head>
        <title>{headerInfo.title} | lizzy zhang</title>
      </Head>
      <main>
        <ProjectBanner img={heroImage} />
        <div className="project-content">
          <HeaderSection headerInfo={headerInfo} />
          <div className="project-section">
            <h2 className="small-section-title">problem</h2>
            <h2 className="big-section-title">
              Troop's Original Website has Poor Usability
            </h2>
            <p>
              Troop is a website in Providence, RI which Google describes as a{" "}
              <i>
                "chill hangout with funky decor for eclectic street food fare &
                cheekily named craft cocktails."
              </i>
            </p>

            <p>
              If you look up pictures of the restaurant and bar online, you'll
              see a ton of care was put into the Troop's interior design, with
              grafitti and other artwork lining the walls, with cool light
              fixtures hanging from the ceiling.
            </p>

            <ImageSection
              data={[
                {
                  id: interiorImg.src,
                  img: interiorImg,
                  caption: "An image of Troop's interior.",
                },
              ]}
              width={"70%"}
              separate={false}
              frame={false}
            />

            <p>
              The same cannot be said for its website. The oversaturated orange
              color scheme and floating vertical layout is aesthetically
              unpleasant, and the site faces a laundry list of usability issues
              that make it difficult to navigate.
            </p>

            <p>
              Ultimately, the <b>poor usability</b> of Troop's website creates a{" "}
              <b>bad impression</b> and could frustrate and{" "}
              <b>drive away potential customers</b> who might have otherwise
              reserved a table.
            </p>

            <p>
              So, I decided to <b>redesign</b> Troop's homepage to make it{" "}
              <b>more usable and responsive across device sizes</b>, bringing
              the website in line with the amount of care that was put into the
              restaurant's interior. In the end, I created an improved design
              language that could be expanded across the site.
            </p>
          </div>
          <div className="project-section">
            <h2 className="small-section-title">research</h2>
            <h2 className="big-section-title">What makes Troop hard to use?</h2>

            <p>
              To build the foundation for an effective redesign, I first
              identified the specific aspects of the interface that hindered the
              site's usability. When identifying problems, I specifically
              thought about usability along the axes of{" "}
              <b>learnability, memorability,</b> and <b>efficiency.</b>
            </p>

            <ImageSection
              data={[{ id: problemsImg.src, img: problemsImg }]}
              separate={true}
              width={"100%"}
            />
          </div>
          <div className="project-section">
            <h2 className="small-section-title">ideation</h2>
            <h2 className="big-section-title">
              Brainstorming Design Solutions
            </h2>
            <p>
              Having identified seven major usability concerns in the site's
              interface, I began ideating designs that would address all seven
              issues. Since I wanted to ensure the site was{" "}
              <b>responsive on a range of screen sizes</b>, I created wireframes
              for <b>desktop, tablet,</b> and <b>mobile</b> versions of the
              site.
            </p>
            <ImageSection
              data={[{ id: desktopWf.src, img: desktopWf }]}
              width={"100%"}
              separate={true}
              frame={false}
            />
            <ImageSection
              data={[
                { id: tabletWf.src, img: tabletWf },
                { id: mobileWf.src, img: mobileWf },
              ]}
              width={"50%"}
              separate={true}
              frame={false}
            />
          </div>
          <div className="project-section">
            <h2 className="small-section-title">visual design style</h2>
            <h2 className="big-section-title">
              Finding Troop's Visual Identity
            </h2>
            <p>
              Next, I created a visual design style guide to define the overall
              look and feel of the site. The style guide also includes the{" "}
              <b>base states</b> and <b>interaction states</b> of the interface
              components, so that a future designer could pick up my redesign
              without wondering what a button that's moused over should look
              like.
            </p>
            <ImageSection
              data={[
                {
                  id: styleGuideImg.src,
                  img: styleGuideImg,
                  caption:
                    "The visual design style guide for Troop's homepage.",
                },
              ]}
              width={"80%"}
              separate={false}
              frame={false}
            />
            <p>
              I took inspiration from the restaurant's decor, incorporating the
              rich blues found on Troop's walls. Otherwise, I opted to keep the
              visual design fairly simple to keep the <b>focus</b> on the site's{" "}
              <b>core business-driving tasks</b>, such as reserving a table.
            </p>
          </div>
          <div className="project-section">
            <h2 className="small-section-title">high-fidelity prototyping</h2>
            <h2 className="big-section-title">Mocking up the Redesigns</h2>
            <p>
              Once I had created the visual style guide. I combined the guide
              with my wireframes to create <b>high-fidelity mockups</b> in
              Figma. I created mockups for each screen size so I would know what
              CSS media queries I would have to use to ensure the site felt
              great on every device.
            </p>
            <ImageSection
              data={[{ id: desktopHifi.src, img: desktopHifi }]}
              width={"80%"}
              separate={false}
              frame={false}
            />
            <div className="inline-section img-and-text">
              <div className="text-wrapper-left">
                <h2 className="small-section-title">tablet mockup</h2>
                <p>
                  Since a tablet is much narrower than a desktop screen, I chose
                  to overlay the text on the splash page on top of the photo
                  rather than leaving them side by side. Similarly, I laid out
                  the event calendar and accent image vertically rather than
                  horizontally.
                </p>
              </div>
              <div className="img-wrapper img-wrapper-right">
                <Image src={tabletHifi} alt="high fidelity tablet prototype" />
              </div>
            </div>
            <div className="inline-section img-and-text">
              <div className="text-wrapper-left">
                <h2 className="small-section-title">mobile mockup</h2>
                <p>
                  There's even less space on a phone screen, so I decided to
                  overlay the restaurant title directly over the splash image. I
                  moved the info that used to be available below the
                  order/reserve buttons into an "Hours & Info" overlay found on
                  the navbar.
                </p>

                <p>
                  As a result, I also removed the gray footer, as all the
                  information it contained was now always accessible via the
                  "Hours & Info" overlay.
                </p>
              </div>
              <div className="img-wrapper img-wrapper-right">
                <Image src={mobileHifi} alt="high fidelity mobile prototype" />
              </div>
            </div>
          </div>
          <div className="project-section">
            <h2 className="small-section-title">front-end development</h2>
            <h2 className="big-section-title">Building the Final Website</h2>
            <p>
              Finally, I followed my Figma mockups to code the homepage using
              hand-build HTML/CSS.
            </p>

            <p>
              Although it took a lot of classes and media queries, I'm really
              happy with how the final result turned out! A responsive website
              was this project's primary goal, and I feel that I achieved that.
            </p>

            <div className="inline-section rounded-section">
              <div className="img-wrapper">
                <Image
                  src={siteGif}
                  alt="gif showing site responsiveness at various sizes"
                />
              </div>
            </div>

            <div className="inline-section">
              <a
                className="card-button"
                href="https://sillysloth888.github.io/cs130-responsive-redesign/"
              >
                View the final redesign!
              </a>
            </div>
          </div>
          <div className="project-section">
            <h2 className="small-section-title">reflection</h2>
            <h2 className="big-section-title">Takeaways</h2>
            <p>
              Redesigning Troop's website taught me important lessons about
              design and web development.
            </p>
            <ol>
              <li>
                <b>Taking away info is as important as adding it.</b> Many of
                the improvements to the interface were based around removing,
                rather than adding additional information (for example, by
                distilling down the navbar options). I think the end result is a
                sleeker interface that is much less confusing to use.
              </li>
              <li>
                <b>There are many time sucks in interface design.</b> I spent
                too long on UI decisions that were ultimately inconsequential,
                such as font type or the specific shade of blue I should use for
                the background. In the end, many of these decisions only
                marginally impacted the aethestic impact of the site, and had no
                bearing whatsover on its usability. These choices can easily
                derail your project, so I learned I had to ruthlessly
                prioritize.
              </li>
            </ol>
            <SeeMoreButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default TroopRedesign;