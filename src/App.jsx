import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() { return <h2>Home Page</h2>; }
function Dashboard() { return <h2>Dashboard - SPA Routing works!</h2>; }

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}