import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';


export default () => {
  return (
    <Menu style={{ marginTop: '10px'}}>
    <Menu.Menu>
    <Link route="/">
     <a className="item">Disease early warning and surveillance</a>
    </Link>
    </Menu.Menu>
    <Menu.Menu>

    <Link route="/ ">
     <a className="item">--------------------------------Ethiopian Public Health Emergency Managment--------------------------------</a>
    </Link>
     </Menu.Menu>

     <Menu.Menu >

     <Link route="/ ">
      <a className="item">Reports</a>
     </Link>

     <Link route="/campaigns/new">
      <a className="item">+</a>
     </Link>

     </Menu.Menu>
   </Menu>
      );
};
