const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Dashboard',
      type: 'group',
      icon: 'feather icon-navigation',
      children: [
        {
          id: 'salesAnalytics',
          title: 'Sales Analytics',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/analytics'
        },
        {
          id: 'travelAnalytics',
          title: 'Travel Agency',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/TravelAgency'
        },
        {
          id: 'dailyProduction',
          title: 'Daily Production',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/DailyProduction'
        },
        {
          id: 'monthlyReport',
          title: 'Monthly Report',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/MontlyReport'
        }
      ]
    },
    {
      id: 'auth',
      title: 'Disposition Form',
      type: 'group',
      icon: 'feather icon-pages',
      children: [
        {
          id: 'sign in',
          title: 'Sales Disposition',
          type: 'item',
          icon: 'feather icon-log-in',
          url: 'https://shahul-github-s.github.io/AIMS-Disposition-Form/',
          target: true,
          breadcrumbs: false
        },
        {
          id: 'sign Up',
          title: 'Payment Disposition',
          type: 'item',
          icon: 'feather icon-log-in',
          url: 'https://shahul-github-s.github.io/AIMS-Payment-Detailed/',
          target: true,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'auth',
      title: 'Lead DataBase',
      type: 'group',
      icon: 'icon-box',
      children: [
        {
          id: 'salesAnalytics',
          title: 'Customer Details',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/CustomerDetails'
        },
        {
          id: 'daily',
          title: 'Repay List',
          type: 'item',
          icon: 'feather icon-help-circle',
          url: '',
          target: true,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'auth',
      title: '',
      type: 'group',
      icon: 'icon-box',
      children: []
    }
    // {
    //   id: 'utilities',
    //   title: 'Utilities',
    //   type: 'group',
    //   icon: 'icon-ui',
    //   children: [
    //     {
    //       id: 'component',
    //       title: 'Component',
    //       type: 'collapse',
    //       icon: 'feather icon-box',
    //       children: [
    //         {
    //           id: 'button',
    //           title: 'Button',
    //           type: 'item',
    //           url: '/basic/button'
    //         },
    //         {
    //           id: 'badges',
    //           title: 'Badges',
    //           type: 'item',
    //           url: '/basic/badges'
    //         },
    //         {
    //           id: 'breadcrumb-pagination',
    //           title: 'Breadcrumb & Pagination',
    //           type: 'item',
    //           url: '/basic/breadcrumb-pagination'
    //         },
    //         {
    //           id: 'collapse',
    //           title: 'Collapse',
    //           type: 'item',
    //           url: '/basic/collapse'
    //         },
    //         {
    //           id: 'typography',
    //           title: 'Typography',
    //           type: 'item',
    //           url: '/basic/typography'
    //         },
    //         {
    //           id: 'tooltip-popovers',
    //           title: 'Tooltip & Popovers',
    //           type: 'item',
    //           url: '/basic/tooltip-popovers'
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: 'auth',
    //   title: 'Authentication',
    //   type: 'group',
    //   icon: 'icon-pages',
    //   children: [
    //     {
    //       id: 'sign in',
    //       title: 'Login',
    //       type: 'item',
    //       icon: 'feather icon-lock',
    //       url: '/auth/signin-1',
    //       target: true,
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'sign Up',
    //       title: 'Register',
    //       type: 'item',
    //       icon: 'feather icon-log-in',
    //       url: '/auth/signup-1',
    //       target: true,
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'reset-pass',
    //       title: 'Reset Password',
    //       type: 'item',
    //       icon: 'feather icon-unlock',
    //       url: '/auth/reset-password-1',
    //       target: true,
    //       breadcrumbs: false
    //     }
    //   ]
    // },
    // {
    //   id: 'support',
    //   title: 'Support',
    //   type: 'group',
    //   icon: 'icon-support',
    //   children: [
    //     {
    //       id: 'sample-page',
    //       title: 'Sample Page',
    //       type: 'item',
    //       url: '/sample-page',
    //       classes: 'nav-item',
    //       icon: 'feather icon-sidebar'
    //     },
    //     {
    //       id: 'documentation',
    //       title: 'Documentation',
    //       type: 'item',
    //       icon: 'feather icon-help-circle',
    //       classes: 'nav-item',
    //       url: 'https://codedthemes.gitbook.io/gradient-able-react/',
    //       target: true,
    //       external: true
    //     }
    //   ]
    // }
  ]
};

export default menuItems;
