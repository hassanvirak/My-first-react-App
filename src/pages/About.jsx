//This component Represents the About page.

// function About(){
//     return(
//         <div>
//             <h1>About page</h1>
//             <p>We are a group of students learning Reactjs at Aptech.</p>
//         </div>
//     )
// }
// export default About;
import aboutImg from "../assets/About.jpg";

function About() {
  return (
    <div className="page">
      <img src={aboutImg} alt="About" className="page-img" />
      <h1>About Us</h1>
      <p>We are learning React JS Routing</p>
      <button>Learn More</button>
    </div>
  );
}

export default About;
