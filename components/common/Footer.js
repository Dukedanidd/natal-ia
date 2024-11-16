import config from "@/config";

const navItems = [
  { label: "Terms of Service", href: "/tos" },
  { label: "Privacy Policy", href: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-5">
      <nav className="grid grid-flow-col">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="link link-hover">
            {item.label}
          </a>
        ))}
          <p className="text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
          {config.appName}
        </p>
      </nav>
     
      
      
    </footer>
  );
};

export default Footer; 