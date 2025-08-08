
import { useState, useEffect } from 'react'
import * as React from 'react';
import './home.css'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ChatBubbleSharpIcon from '@mui/icons-material/ChatBubbleSharp';



const drawerWidth = 240;

const menuItems = [
  { text: 'New chat', icon: <ChatBubbleSharpIcon /> },
  { text: 'Search chats', icon: <SearchRoundedIcon /> },
  { text: 'Library', icon: <CollectionsRoundedIcon /> },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  let [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const savedData = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    setTask([...task, inputValue.trim()]);
    setInputValue('');

  };

  

  let list = task.map((value, index, key) => {
    return (
      <TaskList  value={value} key={index} indexNumber={index} task={task} setTask={setTask} />
    )
  })

  list.reverse();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: "white", color: "gray" }}
        position="fixed" open={open}>
        <Toolbar >
          <IconButton

            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5, width: 50
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader  >
          <IconButton onClick={handleDrawerClose} sx={{ position: 'fixed', marginTop: '' }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}

          </IconButton>
        </DrawerHeader>


        <List className='fixedList' sx={{ position: 'fixed', marginTop: '55.5px' }} >
          <Divider className='h-0.2 bg-gray-300 w-[240px]' />
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={[
                  {

                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                      justifyContent: 'initial',
                    }
                    : {
                      justifyContent: 'center',
                    },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                        mr: 3,
                      }
                      : {
                        mr: 'auto',
                      },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                        opacity: 1,
                      }
                      : {
                        opacity: 0,
                      },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


        <Divider className='w-[240px] h-0.2 border-gray-400' sx={{ marginTop: '150px' }} />

        <List className='overflow-auto '  >

          {[<p className='font-extrabold'>Chats</p>, list].map((text, index) => (

            <ListItemText
              key={text}
              className='text-left ml-2'
              primary={text}
              sx={[
                open
                  ? {
                    opacity: 1,
                  }
                  : {
                    opacity: 0,
                  },
              ]}
            />

          ))}
        </List>
      </Drawer>


      <Box component="main" sx={{ flexGrow: 1, width: 100 }}>

        <div className=' w-[100%]  h-full flex flex-col justify-center   mt-[150px] input-body  ' >

          <div className='homeHeading'>
            <h1 className='   text-[40px]'>What's on your mind today?</h1>
          </div>

          <div className='w-[100%] flex  border-1 border-[gray] rounded-4xl pr-3 mt-5 bg-[gray] grayBackground  '>

            <form className='w-[100%] flex gap-5  ' onSubmit={savedData}>
              <input className=' rounded-4xl p-5 homeInput mx-auto my-2  '
                placeholder='Ask anything'
                type="text" name="title" id="textSearch"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type='submit'
                className={`hover:bg-gray-400 rounded-4xl p-4 my-3 font-semibold text-white ${inputValue.trim() === '' ? 'bg-gray-400' : 'bg-blue-500'
                  } enterButton`}
                disabled={inputValue.trim() === ''}
              >
                <ArrowCircleRightIcon />
              </button>
            </form>
          </div>
        </div>
      </Box>
    </Box>
  );
}


function TaskList({ value, indexNumber, task, setTask }) {

  let deleteRow = () => {
    let afterDeleteTask = task.filter((v, i) => i != indexNumber)
    setTask(afterDeleteTask)
  }
  return (
    <div className='flex '>
      <p
        className=' w-[250px]   truncate '>{value}
      </p>
      <span onClick={deleteRow} className='ml-3 mr-3 manualLicross cursor-pointer rounded-2xl hover:font-black '> &times; </span>
    </div>
  )
}


































