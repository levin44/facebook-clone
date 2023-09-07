import React from 'react'
import "./leftPane.css"
import CommentIcon from '@mui/icons-material/Comment';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
        <div className="leftPaneContainer"></div>
            <div className="leftPaneMenu"></div>
                <li className="leftPaneMenuItem">
                    <CommentIcon className='leftPaneMenuIcon' />
                    <span className="leftPaneMenuText">Message</span>
                </li>
                <li className="leftPaneMenuItem">
                    <GroupIcon className='leftPaneMenuIcon' />
                    <span className="leftPaneMenuText">Group</span>
                </li>
                <li className="leftPaneMenuItem">
                    <RssFeedIcon className='leftPaneMenuIcon' />
                    <span className="leftPaneMenuText">Feed</span>
                </li>
                <li className="leftPaneMenuItem">
                    <FlagIcon className='leftPaneMenuIcon' />
                    <span className="leftPaneMenuText">Pages</span>
                </li>
                <li className="leftPaneMenuItem">
                    <CalendarMonthIcon className='leftPaneMenuIcon' />
                    <span className="leftPaneMenuText">Events</span>
                </li>
                <li className="leftPaneMenuItem">
                    <BuildIcon className='leftPaneMenuIcon' />
                    <span className="leftPaneMenuText">Settings</span>
                </li>
                <li className="leftPaneMenuItem">
                    <SportsEsportsIcon className='leftPaneMenuIcon' />
                    <span className="leftPaneMenuText">Games</span>
                </li>
                <li className="leftPaneMenuItem">
                    <NewspaperIcon className='leftPaneMenuIcon' />
                    <span className="leftPaneMenuText">News</span>
                </li>
                <li className="leftPaneMenuItem">
                    <WorkOutlineIcon className='leftPaneMenuIcon' />
                    <span className="leftPaneMenuText">Jobs</span>
                </li>
                <li className="leftPaneMenuItem">
                    <AddShoppingCartIcon className='leftPaneMenuIcon' />
                    <span className="leftPaneMenuText">Market</span>
                </li>
                <hr/>
                <div className="pagesYouLiked">
                    <h3>Pages you liked</h3>
                </div>
                <div className="pageList">
                    <li className="pageListItem">
                        <img src="/images/1.png" alt="" className="pagePic" />
                        <span className="PageName">profile picture update</span>
                    </li>
                    <li className="pageListItem">
                        <img src="/images/1.png" alt="" className="pagePic" />
                        <span className="PageName">profile picture update</span>
                    </li>
                    <li className="pageListItem">
                        <img src="/images/1.png" alt="" className="pagePic" />
                        <span className="PageName">profile picture update</span>
                    </li>
                    <li className="pageListItem">
                        <img src="/images/1.png" alt="" className="pagePic" />
                        <span className="PageName">profile picture update</span>
                    </li>
                    <li className="pageListItem">
                        <img src="/images/1.png" alt="" className="pagePic" />
                        <span className="PageName">profile picture update</span>
                    </li>
                    <li className="pageListItem">
                        <img src="/images/1.png" alt="" className="pagePic" />
                        <span className="PageName">profile picture update</span>
                    </li>
                    <li className="pageListItem">
                        <img src="/images/1.png" alt="" className="pagePic" />
                        <span className="PageName">profile picture update</span>
                    </li>
                    <li className="pageListItem">
                        <img src="/images/1.png" alt="" className="pagePic" />
                        <span className="PageName">profile picture update</span>
                    </li>
                    <li className="pageListItem">
                        <img src="/images/1.png" alt="" className="pagePic" />
                        <span className="PageName">profile picture update</span>
                    </li>
                </div>
    </div>
  )
}
