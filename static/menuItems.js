import ContentIcon from '../components/svg/MenuIcon/ContentIcon';
import ProductIcon from '../components/svg/MenuIcon/ProductIcon';
import UserIcon from '../components/svg/MenuIcon/UserIcon';

export const menuItems = [
  {
    id: 1, label: 'Product Management', icon: <ProductIcon />, link: '/productManagement',
  },
  {
    id: 2, label: 'Content Management', icon: <ContentIcon />, link: '/contentManagement',
  },
  {
    id: 3, label: 'User Management', icon: <UserIcon />, link: '/userManagement',
  },
];
