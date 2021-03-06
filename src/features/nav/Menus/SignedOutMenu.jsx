import React from 'react'
import {Menu, Button} from 'semantic-ui-react';

const SignedOutMenu = ({signIn}) => {
  return (
    <div>
      <Menu.Item position="right">
            <Button basic inverted content="Login" onClick={signIn} />
            <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
        </Menu.Item>
    </div>
  )
}

export default SignedOutMenu
