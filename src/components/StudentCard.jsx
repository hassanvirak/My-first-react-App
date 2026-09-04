// function StudentCard(props) {
//   // React uses JSX (visual part of the component)
//   // Everything inside the return will be visible on the screen
//   return (
//     <div>
//       <h2>StudentCard, {props.name}</h2>
//       <p>Grade: {props.Grade} </p>
//       <p>Hobby: {props.Hobby}</p>
//     </div>
//   );
// }

// export default StudentCard;

// --------------------StudentCard----------------------------------
// function StudentCard(props) {
//   return (
//     <div
//       style={{
//         padding: "20px",
//         backgroundColor: "#ffffff",
//         borderRadius: "15px",
//         boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
//       }}
//     >
//       {/* Student Name */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "15px",
//           marginBottom: "20px",
//         }}
//       >
//         <div
//           style={{
//             width: "55px",
//             height: "55px",
//             borderRadius: "50%",
//             background: "linear-gradient(135deg, #667eea, #764ba2)",
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: "22px",
//             fontWeight: "bold",
//           }}
//         >
//           {props.name.charAt(0)}
//         </div>

//         <div>
//           <h2
//             style={{
//               margin: "0",
//               color: "#1e293b",
//               fontSize: "22px",
//             }}
//           >
//             {props.name}
//           </h2>

//           <p
//             style={{
//               margin: "5px 0 0",
//               color: "#667eea",
//               fontSize: "14px",
//               fontWeight: "bold",
//             }}
//           >
//             STUDENT
//           </p>
//         </div>
//       </div>

//       {/* Student Information */}
//       <div
//         style={{
//           display: "flex",
//           gap: "15px",
//         }}
//       >
//         <div
//           style={{
//             flex: 1,
//             padding: "15px",
//             backgroundColor: "#f1f5ff",
//             borderRadius: "10px",
//           }}
//         >
//           <p
//             style={{
//               margin: "0 0 5px",
//               color: "#64748b",
//               fontSize: "13px",
//             }}
//           >
//             GRADE
//           </p>

//           <strong
//             style={{
//               color: "#334155",
//               fontSize: "18px",
//             }}
//           >
//             {props.Grade}
//           </strong>
//         </div>

//         <div
//           style={{
//             flex: 1,
//             padding: "15px",
//             backgroundColor: "#fff7ed",
//             borderRadius: "10px",
//           }}
//         >
//           <p
//             style={{
//               margin: "0 0 5px",
//               color: "#64748b",
//               fontSize: "13px",
//             }}
//           >
//             HOBBY
//           </p>

//           <strong
//             style={{
//               color: "#334155",
//               fontSize: "16px",
//             }}
//           >
//             {props.Hobby}
//           </strong>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentCard;

