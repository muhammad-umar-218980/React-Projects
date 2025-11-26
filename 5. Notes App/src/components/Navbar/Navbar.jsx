import { StickyNote } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 flex items-center gap-2">
        <div className="bg-yellow-400 p-2 rounded-lg">
          <StickyNote className="text-white" size={24} />
        </div>
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">
          Notes
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;