import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
const DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="default" onClick={showDrawer}>
        Works
      </Button>
      <Drawer 
        title="Art Works" 
        placement="right" 
        onClose={onClose} 
        open={open}
      >
        <p>Alice In Wonderland</p>
        <p>Lenore</p>
        <p>Red in my Ledger</p>
      </Drawer>
    </>
  );
};
export default DrawerComponent;