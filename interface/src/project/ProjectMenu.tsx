import React, { Component } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';

import { PROJECT_PATH } from '../api';

import { t } from "@lingui/macro"
import { I18n } from "@lingui/react";

class ProjectMenu extends Component<RouteComponentProps> {

  render() {
    const path = this.props.match.url;
    return (
      <List>
        <ListItem to={`/${PROJECT_PATH}/demo/`} selected={path.startsWith(`/${PROJECT_PATH}/demo/`)} button component={Link}>
          <ListItemIcon>
            <SettingsRemoteIcon />
          </ListItemIcon>

          <I18n>
            {({ i18n }) => (
              <ListItemText primary={i18n._(t`demo_project`)} />
            )}
          </I18n>

        </ListItem>
      </List>
    )
  }

}

export default withRouter(ProjectMenu);
