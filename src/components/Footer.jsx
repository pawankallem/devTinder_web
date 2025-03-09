import logo from "../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 fixed bottom-0">
      <aside className="grid-flow-col items-center m-auto">
        <img className="w-[28px] h-[28px] rounded-[50%]" src={logo} alt="" />
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved to
          DevTinder and www.codehub.world
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
