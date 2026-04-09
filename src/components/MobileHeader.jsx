import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const MobileHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 向下滚动时隐藏，向上滚动时显示
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // 处理点击页面其他区域关闭菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && event.target.closest('.mobile-menu') === null && event.target.closest('.mobile-header') === null) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Projects', path: '/projects' },
    { name: 'People', path: '/people' },
    { name: 'Apply', path: '/apply' }
  ];

  return (
    <>
      <div 
        className={`md:hidden fixed top-4 left-4 right-4 z-40 flex justify-between items-center transition-all duration-300 mobile-header ${
          isVisible ? 'opacity-100 visible' : 'opacity-0 invisible h-0'
        }`}
      >
        <Link to="/" className="text-red-600 font-avenir text-xl font-bold">
          ECASA
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-red-600 focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 移动端菜单面板 */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white/80 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out z-50 mobile-menu ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-16">
          <div className="flex-1 flex flex-col items-end py-2 px-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 text-right w-full text-lg font-medium transition-colors ${
                  window.location.pathname === item.path
                    ? 'text-red-600 border-r-2 border-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;