// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-successfully-defended-ph-d-thesis",
          title: 'Successfully defended Ph.D. thesis.',
          description: "",
          section: "News",},{id: "news-sonata-accepted-to-vldb-2025",
          title: 'Sonata accepted to VLDB 2025.',
          description: "",
          section: "News",},{id: "news-grewriter-accepted-to-vldb-2025",
          title: 'GRewriter accepted to VLDB 2025.',
          description: "",
          section: "News",},{id: "news-graduated-with-sjtu-zhiyuan-honors-doctorate-distinction",
          title: 'Graduated with SJTU Zhiyuan Honors Doctorate Distinction.',
          description: "",
          section: "News",},{id: "news-dindex-accepted-to-icde-2026",
          title: 'DIndex accepted to ICDE 2026.',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
