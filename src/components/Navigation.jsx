import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 在首页时根据滚动位置隐藏/显示导航栏
      if (location.pathname === '/') {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // 向下滚动时隐藏
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // 向上滚动时显示
          setIsVisible(true);
        }
      } else {
        // 在其他页面始终保持可见
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Projects', path: '/projects' },
    { name: 'People', path: '/people' },
    { name: 'Apply', path: '/apply' }
  ];

  return (
    <>
      {/* 桌面端导航栏 */}
      <nav className={`fixed top-0 right-0 z-50 bg-transparent transition-all duration-300 hidden md:block ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible h-0'
      }`}>
        <div className="flex justify-end p-4">
          <div className="flex space-x-6 px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;