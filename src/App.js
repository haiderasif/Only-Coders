import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NewMembers from "./components/new_members";
import Section3 from "./components/section3";
import Section2 from "./components/section2";

function App() {
  return (
    <div className="app">
      <header className="header">
        <Header />
      </header>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <nav
            className="col-md-1 d-none d-md-block sidebar"
            style={{ height: "100vh" }}
          >
            {/* Sidebar content goes here */}
            <Sidebar />
          </nav>
          {/* Main Content */}
          <main className="col-md-11 ms-sm-auto col-lg-11 px-md-4 main-container">
            <div className="row">
              {/* Column 1 */}
              <div className="col-md-3">
                <div>
                  <div className="card-body">
                    <NewMembers />
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-md-6">
                <div>
                  <Section2 />
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-md-3">
                <div>
                  <div className="card-body">
                    <Section3 />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
