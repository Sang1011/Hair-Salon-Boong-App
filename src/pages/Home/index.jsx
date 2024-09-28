import { Outlet } from "react-router-dom";
import HomeContent from "../../components/HomeContent";
function Home() {
  return (
    <>
        <HomeContent />
        <Outlet/>
    </>
  );
}

export default Home;