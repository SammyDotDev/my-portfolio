import Home from "./components/main/Home";
import SideNavigation from "./components/SideNavigation";
function App() {
  return (
    <div className="app">
      <SideNavigation />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;
