import Searchinput from "../navigation/Searchinput";
import Navlinks from "../navigation/Navlinks";
import ProfileInfo from "../navigation/ProfileInfo";

const HeaderNav = () => {
  return (
    <div className="w-full justify-between flex items-center">
      <div className="flex gap-10 items-center">
        <Searchinput />
        <Navlinks />
      </div>
      <ProfileInfo />
    </div>
  );
};

export default HeaderNav;
