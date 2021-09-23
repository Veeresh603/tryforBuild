import React from "react"
import PropTypes from "prop-types"
import SwipeableViews from "react-swipeable-views"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Curriculum from "../Curriculum/index"
import Overview from "../Overview/overview"
import styled from "styled-components"
import Author from "../Author/author"



function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    fontFamily: "var(--family)",
    fontSize: 20,
    fontWeight: 800,
  },
}))

export default function CourseTab(props) {
  const { overview, curriculum, author, title, slug, button ,id } = props
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  return (
    <Wrapper>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Overview" {...a11yProps(0)} />
            <Tab label="Curriculum" {...a11yProps(1)} />
            <Tab label="Instructor" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Overview overview={overview} title={title} slug={slug} button={button}  />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Curriculum curriculum={curriculum} title={title}  slug={slug} button={button} id={id}/>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Author author={author} button={button}/>
          </TabPanel>
       
  
       
        </SwipeableViews>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /*        
        .MuiTab-wrapper{
            color:white;
        }
         */
  width: 100%;
  height: auto;

  .MuiTabs-scroller {
    width: 50%;
    position: absolute;
    right: 0;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background: var(--secondaryColor);
    z-index: 2;
    @media (max-width: 991px) {
      width: 100%;
    }
  }
  .MuiPaper-elevation4 {
    box-shadow: none !important;
  }
  .MuiPaper-root {
    margin-top: -21px;
  }
  .MuiTab-textColorPrimary.Mui-selected {
    color: #fff;
  }
  .PrivateTabIndicator-colorPrimary-33 {
    background-color: #fff;
  }
  .MuiTab-root {
    font-weight: 500;
  }
  .MuiTab-textColorPrimary {
    color: #fff;
  }
  .MuiTabs-root {
    background: #fff;
  }
  .MuiBox-root{
    padding: 30px 0px !important;

  }
`
