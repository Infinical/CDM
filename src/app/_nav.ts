interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const defaultNavItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-home'
  },
  {
    name: 'System Setup',
    url: '',
    icon: 'icon-grid',
    children: [
      {
        name: 'New User Group',
        url: '/setup/new',
        icon: 'icon-star'
      }
      // {
      //   name: 'Edit User Group',
      //   url: '/setup/update',
      //   icon: 'icon-note'
      // }
    ]
  },

  {
    name: 'Users',
    url: '',
    icon: 'icon-user',
    children: [
      {
        name: 'New Users',
        url: '/users/register',
        icon: 'icon-star'
      },
      // {
      //   name: 'Edit User',
      //   url: '/users/update',
      //   icon: 'icon-note'
      // },
      {
        name: 'List of Users',
        url: '/users/view',
        icon: 'icon-list'
      },
    ]
  },
  {
    name: 'CDM Maintenance',
    url: 'cdm',
    icon: 'icon-screen-desktop',
    children: [
      {
          name: 'New CDM',
          url: '/cdm/new',
          icon: 'icon-star'
        }
        // {
        //   name: 'Edit CDM',
        //   url: '/cdm/update',
        //   icon: 'icon-note'
        // },
    ]
  },
  {
    name: 'Reports',
    url: 'reports',
    icon: 'icon-graph',
    children: [
      {
          name: 'New Report',
          url: '/cdm/new',
          icon: 'icon-star'
        }
        // {
        //   name: 'View Report',
        //   url: '/cdm/update',
        //   icon: 'icon-note'
        // },
    ]
  },
  {
    name: 'Vendors',
    url: 'vendors',
    icon: 'icon-user',
    children: [
      {
          name: 'New Vendor',
          url: '/vendors/new',
          icon: 'icon-star'
        }
    ]
  }
];
