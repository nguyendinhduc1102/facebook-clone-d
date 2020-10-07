import { Chat, EmojiFlags, LocalHospital, People, Store } from '@material-ui/icons';
import userEvent from '@testing-library/user-event';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://lh3.googleusercontent.com/a-/AOh14GjjCqloBYoWXXZJLjfnPoRR98O1KFa4S4JMKOFG=s88-c-k-c0x00ffffff-no-rj-mo' title='NDDDDD' />
            <SidebarRow Icon={LocalHospitalIcon} 
                title="COVID-19 Information center"
            />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
        </div>
    )
}

export default Sidebar;
