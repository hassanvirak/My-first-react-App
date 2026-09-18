// /pages/Home.jsx
//This component repesent thoe Home page of the website

// function Home(){
//     return(
//         <div>
//             <h1>Home Page</h1>
//             <p>Welcome to the Home page of our website!</p>
//         </div>
//     )
// }

// export default Home;

import homeImg from "../assets/Home.jpg"

function Home(){
    return(
        <div className="page">
            <img src={homeImg} alt="Home" className="page-img"/>
            <h1>Home</h1>

            <p>Welcome to our Home Page</p>

            <button>Learn More</button>
        </div>
    )
}

export default Home;
