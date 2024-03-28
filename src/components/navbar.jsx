import "./navbar.css"
function Navbar() {
  return (
    <nav className="flex justify-between h-14 px-8 items-center sticky top-0 bg-[#251D3A] text-[#E04D01]">
    <h1><b>Portofolio</b></h1>
    <div className="h-full flex">
        <div className="h-full hidden gap-3 md:flex items-center">
            <a href="">Profile</a>
            <a href="">About Me</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
        </div>
        <svg className="flex md:hidden width-full m-[10px] color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
    </div>
  </nav>
)}
export default Navbar
