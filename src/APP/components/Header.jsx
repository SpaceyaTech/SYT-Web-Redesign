import logo from "../../assets/images/sytLogo.png";

function Header() {
  return (
    <header className="hidden md:block text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} className="h-24 mx-8" alt="Logo" />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">About Us</a>
          <a className="mr-5 hover:text-gray-900">Resources</a>
          <a className="mr-5 hover:text-gray-900">Community</a>
          <a className="mr-5 hover:text-gray-900">Products</a>
          <a className="mr-5 hover:text-gray-900">Blog</a>
          <a className="mr-5 hover:text-gray-900">Shop</a>
          <a className="mr-5 hover:text-gray-900">Donate</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
