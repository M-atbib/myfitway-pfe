import React from 'react';
import {Sidebarcontainer , Icon , CloseIcon,SideBtnWrap ,SidebarLink} from './Sideelements';

const sidebar = () => {
  return (
<SidebarContainer>
    <Icon>
    <CloseIcon/>
    </Icon>
    <SidebarWrapper>
    <SidebarMenu > 
    < SidebarLink to = " about ">About</SidebarLink>  
    < SidebarLink to = " discover " > Discover</SidebarLink > 
    < SidebarLink to = " services " > Services </SidebarLink > 
    < SidebarLink to = "signup" > Sign Up </SidebarLink> 

    </SidebarMenu>
    <SideBtnWrap>
        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
    </SideBtnWrap>
    </SidebarWrapper>

      
    </SidebarContainer>
  )
}

export default sidebar
