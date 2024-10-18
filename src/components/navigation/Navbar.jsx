import { LogoImage } from "../../constants/constants";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowLeft,
  ChevronRight,
  PhoneCall,
  ShoppingCart,
} from "lucide-react";
import { icon } from "../../constants/constants";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const size = useWindowSize();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMobileServices = (e) => {
    e.preventDefault();
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (size.width >= 768 && isMobileServicesOpen) {
      setIsMobileServicesOpen(false);
    }
  }, [size.width, isMobileServicesOpen]);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Chi siamo", href: "/chi-siamo" },
    {
      title: "Servizi",
      href: "/servizi",
      subItems: [
        {
          title: "I nostri servizi",
          href: "/servizi",
          icon: icon.List,
        },
        {
          title: "Edilizia civile ed industriale",
          href: "/servizi/edilizia-civile-industriale",
          icon: icon.House,
        },
        {
          title: "Realizzazione e manutenzione di reti ed impianti",
          href: "/servizi/realizzazione-manutenzione-reti-impianti",
          icon: icon.Wrench,
        },
        {
          title: "Infrastrutture stradali e ponti",
          href: "/servizi/infrastrutture-stradali-ponti",
          icon: icon.Road,
        },
        {
          title: "Bonifiche Ambientali e Demolizioni",
          href: "/servizi/bonifiche-ambientali-demolizioni",
          icon: icon.Excavator,
        },
        {
          title:
            "Operazioni fluviali, di difesa, di sistemazione idraulica e di bonifica",
          href: "/servizi/operazioni-fluviali-difesa-sistemazione-idraulica-bonifica",
          icon: icon.Waves,
        },
        {
          title: "Restauro e risanamento conservatorio",
          href: "/servizi/restauro-risanamento-conservatorio",
          icon: icon.Hammer,
        },
      ],
    },
    { title: "Lavora con noi", href: "/lavora-con-noi" },
    { title: "Contatti", href: "/contatti" },
    { title: "Vetrina", href: "/vetrina" },
  ];

  return (
    <nav className="w-full h-[4.5rem] bg-white text-[#121212] shadow fixed top-0 left-0 z-50">
      <div className="h-full px-4 xl:px-[5%] 2xl:px-[10%]">
        <div className="h-full flex items-center justify-between">
          <div className="h-full flex items-center">
            <a href="#" className="text-xl font-bold flex items-center">
              <img className="w-36 md:w-44" src={LogoImage} alt="" />
            </a>
          </div>
          <div className="h-full hidden lg:block">
            <div className="h-full flex items-baseline">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="h-full flex flex-col justify-center relative"
                  ref={item.subItems ? servicesRef : null}
                >
                  <a
                    onClick={item.subItems ? toggleServices : undefined}
                    href={item.href}
                    className="h-full px-4 flex items-center text-sm font-medium hover:bg-[#00000010] hover:text-[--g-sky-blue]"
                  >
                    {item.title}
                    {item.subItems && (
                      <ChevronDown className="inline-block ml-1 w-4 h-4" />
                    )}
                  </a>
                  {item.subItems && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="w-[400px] top-[4.5rem] border border-t-0 border-black/10 bg-white absolute left-0"
                        >
                          <div className="py-1">
                            {item.subItems.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                className="px-4 py-2 text-sm text-[#121212] hover:bg-[#00000009] flex items-center gap-4"
                              >
                                {subItem.icon && (
                                  <img
                                    className="w-8"
                                    src={subItem.icon}
                                    alt=""
                                  />
                                )}
                                {subItem.title}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
          <a
            href="tel:3401228035"
            className="hidden lg:flex items-center gap-4 p-2"
          >
            <PhoneCall className="text-[--g-sky-blue] w-6 h-6" />
            <div>
              <p className="text-sm">Bisogno di chiamare?</p>
              <span className="text-[--g-sky-blue]">340 122 8035</span>
            </div>
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-[50%] lg:hidden bg-white shadow"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-[#121212] hover:bg-gray-100"
                    onClick={item.subItems ? toggleMobileServices : undefined}
                  >
                    {item.title}
                    {item.subItems && (
                      <ChevronRight className="inline-block ml-1 w-4 h-4" />
                    )}
                  </a>
                </div>
              ))}

              <a
                href="tel:3401228035"
                className="flex items-center gap-4 p-2 lg:hidden hover:bg-gray-100"
              >
                <PhoneCall className="text-[--g-sky-blue] w-6 h-6" />
                <div>
                  <p className="text-sm">Bisogno di chiamare?</p>
                  <span className="text-[--g-sky-blue]">340 122 8035</span>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileServicesOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 overflow-y-auto md:hidden"
          >
            <div className="px-4 py-6">
              <button
                onClick={toggleMobileServices}
                className="mb-4 flex items-center text-[#121212]"
              >
                <ArrowLeft className="mr-2" /> Back
              </button>
              <h2 className="text-2xl font-bold mb-4 text-[#121212]">
                Servizi
              </h2>
              {menuItems
                .find((item) => item.title === "Servizi")
                ?.subItems?.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href={subItem.href}
                    className="px-3 py-4 rounded-md text-base font-medium text-[#121212] hover:bg-gray-100 flex items-center"
                  >
                    {subItem.icon && (
                      <img className="w-8 mr-4" src={subItem.icon} alt="" />
                    )}
                    {subItem.title}
                  </a>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-2 md:bottom-5 right-2 md:right-5 bg-[#ffffff] py-2 px-2 sm:px-4 rounded-full shadow-xl">
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/3401228035"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 font-bold"
        >
          <span className="hidden sm:block">Chatta con noi</span>
          <img
            className="w-10 h-10"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png"
            alt="Whatsapp "
          />
        </a>
      </div>
    </nav>
  );
}
