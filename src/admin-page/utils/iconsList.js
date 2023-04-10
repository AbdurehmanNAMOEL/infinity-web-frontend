import {
 PersonSearchOutlined,
 DashboardOutlined,
 BarChart
} from '@mui/icons-material'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import FeedbackIcon from '@mui/icons-material/Feedback';
const style={
    iconStyle:{
        color:'#1977FC',
        fontWeight:'bold',
        marginLeft:'20px'
    }
}
export const sideBarIconList=[
   {
    "routeTo":'dashBoard', 
    "title":'DashBoard',
    "icon":<DashboardOutlined sx={style.iconStyle}/>
  },

   {
    "routeTo":'dashBoard/Chart', 
    "title":'Chart',
    "icon":<BarChart sx={style.iconStyle}/>
   },

   {
    "routeTo":'dashBoard/Users', 
    "title":'Users',
    "icon":<PersonSearchOutlined sx={style.iconStyle}/>
   },

    // {
    //  "routeTo":'dashBoard/course', 
    //  "title":'Course',
    //  "icon":<HowToRegIcon sx={style.iconStyle}/>
    // },

    // {
    //     "routeTo":'dashBoard/Question', 
    //     "title":'Question',
    //     "icon":<PlaylistAddCheckOutlinedIcon  sx={style.iconStyle}/>
    // },

    {
        "routeTo":'dashBoard/feedback', 
        "title":'FeedBack',
        "icon":<FeedbackIcon sx={style.iconStyle}/>
    },
    // {
    //     "routeTo":'dashBoard/setting', 
    //     "title":'Setting',
    //     "icon":<ManageAccountsIcon sx={style.iconStyle}/>
    // },
   
]


