function Navbar() {
  return (
    <header className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md: px-14 lg:px-24 w-full">
        <div className="text-lg font-bold">Henry Shi Jia Nguyen</div>
        <div className="hidden md:flex space-x-12 items-center">
          <a href="#" className="text-selected-text">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#work">My work</a>
          <a href="#contact">
            <button className="px-6 py-2 bg-theme font-bold">Contact me</button>
          </a>
        </div>
        <div className="md:hidden">burger menu</div>
      </div>
    </header>
  );
}

export default Navbar;
