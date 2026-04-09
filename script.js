// 导航栏页面切换
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);

    // 移除所有激活状态
    navLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));

    // 激活当前目标
    link.classList.add('active');
    document.getElementById(targetId).classList.add('active');

    // 手机端点击后关闭菜单
    navMenu.classList.remove('active');
  });
});

// 手机端汉堡菜单
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
