import "./App.css";
import ExtraInfo from "./assets/components/ExtraInfo";
import Header from "./assets/components/Header";
import UserInfo from "./assets/components/UserInfo";

function App() {
  return (
    <div className="gobalpadding relative w-[100vw] overflow-hidden">
      <Header />

      <div className="MainUserInfo mt-[80px]">
        {" "}
        <UserInfo />
      </div>
      <div className="mt-[20px]">
        <ExtraInfo />
      </div>
      <div className="circle h-24 w-24 bg-red-500 absolute rounded-full top-[50vh] -left-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-[#e3d7df] "></div>
    </div>
  );
}

export default App;
