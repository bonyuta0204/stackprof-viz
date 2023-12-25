// Navbar component for the application

type NavbarProps = {
  onClickFlamegraph?: () => void;
};

const Navbar = ({ onClickFlamegraph }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-50 p-2">
      <div className="flex items-center flex-shrink-0 mr-6 ml-4 gap-6 cursor-pointer">
        <span className="font-semibold text-lg tracking-tight">
          StackProf Viz
        </span>
        <div className="flex items-center" onClick={onClickFlamegraph}>
          <span className="text-sm hover:underline">Flamegraph</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
