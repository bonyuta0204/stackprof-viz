/** Sidebar component */
// AGAIN, we use tailwind css

type SidebarProps = {
  items: string[];
  onClickItem?: (item: string) => void;
};

const Sidebar = ({ items, onClickItem }: SidebarProps) => {
  return (
    <div className="bg-gray-50 w-1/5 h-full">
      <div className="flex flex-col gap-4 p-4">
        {items.map((item) => (
          <div
            key={item}
            className="hover:bg-gray-100 cursor-pointer"
            onClick={() => onClickItem?.(item)}
          >
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
