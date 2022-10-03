import bgMainDesktop from "./assets/bg-main-desktop.png";
import bgMainMobile from "./assets/bg-main-mobile.png";
import UserForm from "./features/UserForm";

function App() {
  return (
    <div className="h-[100vh] flex justify-center items-center relative br3:flex-col-reverse br3:h-auto">
      <UserForm />
      <img
        className="absolute z-[-10] h-[100%] left-0 br2:rotate-180 br2:top-0 br2:w-[100%] br2:h-[400px] br3:hidden"
        src={bgMainDesktop}
        alt="background image"
      />
      <img
        className="hidden br3:flex br3:w-[100%] br3:top-0"
        src={bgMainMobile}
        alt="background image"
      />
    </div>
  );
}

export default App;
