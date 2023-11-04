import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Sections from "./Sections";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar id={"topbar"} />
      <div className="flex flex-grow">
        <Sidebar />
        <Sections />
      </div>
    </div>
  );
};

export default Main;
