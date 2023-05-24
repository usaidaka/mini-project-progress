import AsideLeft from "./Sub Components/HomePage/AsideLeft";
import SettingProfile from "./Sub Components/Setting/SettingProfile";

const SettingPage = () => {
  return (
    <div>
      <main className="grid grid-cols-6 justify-center gap-2">
        <AsideLeft />
        <SettingProfile />
        <aside className="columns-1 border-2 border-green-500">
          <h1>ASIDE RIGHT</h1>
        </aside>
      </main>
    </div>
  );
};

export default SettingPage;
