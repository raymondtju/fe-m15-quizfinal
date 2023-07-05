import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <a className="navbar-brand" href="/">
          React Quiz
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toogle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/quiz1"
              >
                Quiz 1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/quiz2"
                aria-current="page"
              >
                Quiz 2
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;

// <main className="container">
//   <div className="row">
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-light">
//         <a className="navbar-brand" href="#">
//           <img
//             src="https://www.catalog.style/static/media/catalog_logo.2f0babb5.svg"
//             alt=""
//             width={140}
//             height={60}
//             className="d-inline-block align-top"
//           />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <Link to="/" className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/guest-book" className="nav-link">
//                 Guest Book
//               </Link>
//             </li>
//             <li className="nav-item active">
//               <Link to="/about" className="nav-link">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item active">
//               <Link to="/faq" className="nav-link">
//                 FAQ
//               </Link>
//             </li>
//             <li className="nav-item active">
//               <Link to="/ask-me" className="nav-link">
//                 Ask Me
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   </div>
// </main>
