

// import Welcome from "./components/Welcome";

// function App() {
//   const studentName = "Ahmed";
//   const marks = 85;
//   return (
//     <div>
//       <h1>Student Information</h1>
//       <p>Student: {studentName}</p>


//       {/* <Welcome name='Ahad' age={12} subject='Mathematics' />
//             <Welcome name='Ali' age={13} subject='English' />
//             <Welcome name='Hammad' age={14} subject='Urdu' /> */}
//     </div>
//   );
// }

// export default App;

// import ProfileCard from "./components/ProfileCard";
// function App(){
//   return(
//   <div>
//     <h1>Student profile</h1>
//       <ProfileCard firstName="ubaid" lastName="khan" age={14}/>
//       < ProfileCard firstName="omar" lastName="Ali" age={20} />

//   </div>
//   )
// }
// export default App;

// import SubjectList from "./components/SubjectList";
//  function App(){
//     const mySubjects = ['urdu','Maths','science','computer science','social studies'];
//     return(
//         <div>
//             <h1>School Timetable</h1>
//             <SubjectList mysubjects={mySubjects}/>
//         </div>
//     )
//  }
//  export default App;
// import Welcome from "./components/Welcome";

// function App(){
//   return (
//     <div style={{border:'1px solid blue',
//         padding:'10px', margin:'200px'}}>
   
//     <h1>My React Application</h1>
//     {}
//     <Welcome name= ' Muhammad Hassan' age={21} subject='Python Lead Manager'/>
//     <Welcome name= 'Abdul Wadood' age={30} subject='Python Instructor'/>
    
//     </div>
//   )
// }

// export default App;

//------------------------Task StudentCard-------------------------------------------------

// import StudentCard from "./components/StudentCard";

// function Student(){
//   return (
//     <div style={{border:'1px solid Red',
//         padding:'10px', margin:'200px'}}>
   
//     <h1>Ny Student Card</h1>
//     {}
//     <StudentCard name= ' Muhammad Hassan' Grade={21} Hobby='Playing Cricket'/>
//     <StudentCard name= 'Abdul Wadood' Grade={30} Hobby='Watching Sereies'/>
    
//     </div>
//   )
// }

// export default StudentCard;


// import StudentCard from "./components/StudentCard";

// function Students() {
//   return (
//     <div style={{ border: "2px solid green",padding: "20px",margin: "50px",
//                  backgroundColor: "lightblue",borderRadius: "15px",}}
//     >
//       <h1>My Student Card</h1>
      
//       <div style={{display: "flex", flexDirection: "column",gap: "20px 0", }} >
//         <StudentCard name="Muhammad Hassan"Grade={21}  Hobby="Playing_Cricket" />
//         <StudentCard name="Abdul Wadood" Grade={30} Hobby="Watching_Series" />

//       </div>
//     </div>
//   );
// }

// export default Students;

//           StudentCard 

// import StudentCard from "./components/StudentCard";

// function Students() {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         padding: "50px",
//         background: "linear-gradient(135deg, #667eea, #764ba2)",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1000px",
//           margin: "auto",
//           padding: "35px",
//           backgroundColor: "rgba(255,255,255,0.95)",
//           borderRadius: "25px",
//           boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             marginBottom: "35px",
//             paddingBottom: "20px",
//             borderBottom: "2px solid #eee",
//           }}
//         >
//           <div>
//             <p
//               style={{
//                 color: "#667eea",
//                 fontWeight: "bold",
//                 margin: "0 0 5px",
//               }}
//             >
//               STUDENT PORTAL
//             </p>

//             <h1
//               style={{
//                 margin: "0",
//                 color: "#1e293b",
//                 fontSize: "34px",
//               }}
//             >
//               My Students 🎓
//             </h1>
//           </div>

//           <div
//             style={{
//               backgroundColor: "#667eea",
//               color: "white",
//               padding: "12px 18px",
//               borderRadius: "30px",
//               fontWeight: "bold",
//             }}
//           >
//             2 Students
//           </div>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//           }}
//         >
//           <div
//             style={{
//               padding: "5px",
//               borderLeft: "6px solid #667eea",
//               borderRadius: "12px",
//               backgroundColor: "#f8f9ff",
//             }}
//           >
//             <StudentCard
//               name="Muhammad Hassan"
//               Grade={21}
//               Hobby="Playing_Cricket"
//             />
//           </div>

//           <div
//             style={{
//               padding: "5px",
//               borderLeft: "6px solid #f97316",
//               borderRadius: "12px",
//               backgroundColor: "#fff8f3",
//             }}
//           >
//             <StudentCard
//               name="Abdul Wadood"
//               Grade={30}
//               Hobby="Watching_Series"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Students;


// import ProfileCard from "./components/ProfileCard";

// function App() {
//   return (
//     <div>
//         <h1>Student Profile</h1>
//       <ProfileCard firstName="Sara" lastName="Khan" age={14} />

//       <ProfileCard firstName="Omer"  lastName="Ali"  age={20} />
//     </div>
//   )
// }

// export default App;


// import SubjectList from './components/SubjectList';

// function App() {
//   // Define an array of subjects
//   const mySubjects = ['Mathematics', 'Science', 'English', 'Computer Science'];

//   return (
//     <div>
//       <h1>School Timetable</h1>

//       {/* Pass the array as a prop called 'subjects' */}
//       <SubjectList subjects={mySubjects} />
//     </div>
//   );
// }

// export default App;

import Counter from "./components/Counter";

function App(){
    return(
        <div>
            <h1>Event Handling Demo</h1>
            <Counter/>
        </div>
    )
}

export default App






