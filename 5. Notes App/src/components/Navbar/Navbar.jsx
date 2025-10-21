const Navbar = () => {
  return (
    <nav className="top-0 w-full py-10 bg-black/90 backdrop-blur-sm shadow-lg z-50">
      <div className="flex justify-center items-center">
        <h1 className={`text-3xl font-bold text-white`}>
          My Notes App 📝
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;