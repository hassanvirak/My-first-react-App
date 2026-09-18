// This component represents the Contact page of the website

// function Contact(){
//     return(
//         <div>
//             <h1>Contact Page</h1>
//             <p>This is the Contact page of our website. Feel free to reach out to us!</p>
//         </div>
//     )
// }

// export default Contact;

import contactImg from "../assets/Contact.jpg"

function Contact(){
    return(
        <div className="page">
            <img src={contactImg} alt="Contact" className="page-img"/>
            <h1>Contact Us</h1>

            <p>You can contact us through this page.</p>

            <button>Contact Now</button>
        </div>
    )
}

export default Contact;
