import ReactDOM from 'react-dom';
import React from 'react';
import {
  ThemeProvider,
  VerticalNavigation,
  NavigationMenuGroup,
  NavigationMenuItem,
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Text
} from '@hawkins/components';
import { createStyles, makeStyles, useTheme } from '@hawkins/styles';

const ThemedApp = () => {
  const [theme, setTheme] = React.useState('dark');
  return (
    <ThemeProvider theme={theme}>
      <App setTheme={setTheme} />
    </ThemeProvider>
  );
};

const App = ({ setTheme }) => {
  const theme = useTheme();
  console.log(theme);
  return (
    <div className='app-root' style={{ height: '100vh', display: 'flex', flexDirection: 'row' }}>
      <LeftNavigation />
      <Box
        display='flex'
        alignItems={'flex-start'}
        flexGrow='1'
        backgroundColor={theme.hawkins.ui.backgroundColor0}
      >
        <ToggleButtonGroup
          defaultValue="dark"
          onChange={(ev, newValue) => {
            setTheme(newValue);
          }}
        >
          <ToggleButton value="dark">Dark Theme</ToggleButton>
          <ToggleButton value="light">Light Theme</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </div>
  );
}

const LeftNavigation = () => {

  return (
    <VerticalNavigation>
      <NavigationMenuGroup>
        <LeftSidebarNavigationItem
          href='https://netflix.com'
          label='News'
          rel='nofollow noopener'
          target='_blank'
        />
        <LeftSidebarNavigationItem
          href='https://netflix.com'
          label='Tutorials'
          rel='nofollow noopener'
          target='_blank'
        />
      </NavigationMenuGroup>
      <Text>
        Some random user component
      </Text>
    </VerticalNavigation>
  );
}

const LeftSidebarNavigationItem = (props) => {
  const customStyles = makeStyles((theme) => {
    return createStyles({
      label: {
        fontSize: theme.hawkinsVariables.fontSizes.fontSize6,
      },
      rootHoverable: {
        '&:hover': {
          backgroundColor: theme.hawkins.ui.backgroundColor4,
        }
      }
    });
  })();
  return <NavigationMenuItem {...props} classes={{ label: customStyles.label, rootHoverable: customStyles.rootHoverable }} />
}

ReactDOM.render(<ThemedApp />, document.getElementById('app'));