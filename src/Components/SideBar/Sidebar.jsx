import React from 'react'

import { Link } from 'react-router-dom';

import "./sidebar.css"

import { LineStyle,
         Timeline, 
         TrendingUp, 
         PersonOutlineOutlined, 
         StorefrontOutlined, 
         AttachMoneyOutlined,
         BarChartOutlined,
         MailOutlineOutlined,
         DynamicFeedOutlined,
         ChatBubbleOutlineOutlined,
         WorkOutlineOutlined,
         ReportOutlined
        } from '@material-ui/icons'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Dashboard</div>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarAvatar"/> Home
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarAvatar"/> Analytics 
                        </li>

                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarAvatar"/> Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <div className="sidebarTitle">Quick Menu</div>
                    <ul className="sidebarList">

                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PersonOutlineOutlined className="sidebarAvatar"/> Users
                            </li>
                        </Link>

                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <StorefrontOutlined className="sidebarAvatar"/> Products 
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                            <AttachMoneyOutlined className="sidebarAvatar"/> Transactions
                        </li>

                        <li className="sidebarListItem">
                            <BarChartOutlined className="sidebarAvatar"/> Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <div className="sidebarTitle">Notifications</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineOutlined className="sidebarAvatar"/> Mail
                        </li>

                        <li className="sidebarListItem">
                            <DynamicFeedOutlined className="sidebarAvatar"/> Feedback 
                        </li>

                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlined className="sidebarAvatar"/> Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <div className="sidebarTitle">Staff</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineOutlined className="sidebarAvatar"/> Manage
                        </li>

                        <li className="sidebarListItem">
                            <Timeline className="sidebarAvatar"/> Analytics 
                        </li>

                        <li className="sidebarListItem">
                            <ReportOutlined className="sidebarAvatar"/> Reports
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar
