import React from 'react';

import styled from 'styled-components';
import {AppBar, Toolbar} from "@material-ui/core";
import {env} from "../env";
import {AuthContext} from "../AuthContext";

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;
const StyledHeaderUrl = styled.a`
  color: #fff;
  text-decoration: none;
  padding-right: 10px;
`;

const routes = [{
  href: env.AUTHORIZED_APP_1_URL,
  title: 'Authorized 1'
}, {
  href: env.AUTHORIZED_APP_2_URL,
  title: 'Authorized 2'
}]

export function AppHeader() {
  return (
      <AppBar position="static">
        <StyledToolbar>
          <div>
            {routes.map((route) => (
              <StyledHeaderUrl href={route.href} key={route.href}>
                {route.title}
              </StyledHeaderUrl>
            ))}
          </div>
          <AuthContext.Consumer>
            {contextValues => (
              <StyledHeaderUrl href={env.LOGIN_APP_URL}>{contextValues.user ? `Logout (${contextValues?.user?.email}` : 'Login'}</StyledHeaderUrl>
            )}
          </AuthContext.Consumer>
        </StyledToolbar>
      </AppBar>
  );
}

export default AppHeader;
