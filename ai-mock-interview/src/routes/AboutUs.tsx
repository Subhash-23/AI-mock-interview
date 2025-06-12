import Marquee from "react-fast-marquee";
import { MarqueImg } from "@/components/marquee-img";
export const AboutUs = () => {
  return (
    <div>
      {/* Header */}
      <header style={{ background: "#333", color: "white", padding: "20px", textAlign: "center" }}>
        <h1>About Our Application</h1>
      </header>

      {/* Hero Section */}
      <section style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#f4f4f4" }}>
        <h2>Welcome to Our Application</h2>
        <p>
        Our platform aims to make the entire recruitment process seamless, efficient, 
        and user-friendly for both employers and candidates. By leveraging advanced 
        technology and artificial intelligence, we provide an enhanced experience for 
        hiring managers, recruiters, and job seekers alike.Whether you're a hiring manager 
        looking to streamline your recruitment or a job seeker preparing for success, our platform
        empowers you to take control of your hiring and career development process.
        </p>
      </section>

      {/* Core Values */}
      {/* <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Our Core Values</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li><strong>Efficiency:</strong> Streamlining processes to save time.</li>
          <li><strong>Innovation:</strong> Bringing new ideas to simplify hiring.</li>
          <li><strong>User-Centered Design:</strong> Prioritizing user needs in every feature.</li>
        </ul>
      </section> */}

      {/* Team Information */}
      <section style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
        {/* marquee section */}
        <div className=" w-full my-0">
          <Marquee pauseOnHover>
            <MarqueImg img="/assets/img/logo/firebase.png" />
            <MarqueImg img="/assets/img/logo/tailwindcss.png" />
            <MarqueImg img="/assets/img/logo/gemini.png" />
            <MarqueImg img="/assets/img/logo/reactjs.png" />
            <MarqueImg img="/assets/img/logo/clerk.png" />
            <MarqueImg img="/assets/img/logo/firebase.png" />
            <MarqueImg img="/assets/img/logo/tailwindcss.png" />
            <MarqueImg img="/assets/img/logo/gemini.png" />
            <MarqueImg img="/assets/img/logo/reactjs.png" />
            <MarqueImg img="/assets/img/logo/clerk.png" />
          </Marquee>
        </div>
      </section>

      </div>
  )
}
