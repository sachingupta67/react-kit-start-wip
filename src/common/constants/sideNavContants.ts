import { routesConstansts } from './routesConstants';

const { manageAttributes, dashboard , manageAssets } = routesConstansts;

const sideNav = [
  { id: 1, module: 'Dashboard', path: dashboard, iconClass: 'fas fa-th-large' },
  {
    id: 2,
    module: 'Manage Attributes',
    path: manageAttributes,
    iconClass: 'fas fa-list'
  },
  {
     id: 3,
     module: 'Asset Upload',
     path: manageAssets,
     iconClass: 'fas fa-cloud-upload-alt'
  },
  // {
  //   id: 4,
  //   module: 'Manage Assets',
  //   path: manageAssets,
  // },
];

export { sideNav };
