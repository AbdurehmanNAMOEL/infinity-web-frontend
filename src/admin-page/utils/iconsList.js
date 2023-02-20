import {
 PersonSearchOutlined,
 DashboardOutlined,
 BarChart,
 QuestionMarkOutlined,
 DocumentScanner
} from '@mui/icons-material'

const style={
    iconStyle:{
        color:'#1977FC',
        fontWeight:'bold',
        marginLeft:'20px'
    }
}
export const sideBarIconList=[
    {"routeTo":'dashBoard/adminHome', "title":'DashBoard',"icon":<DashboardOutlined sx={style.iconStyle}/>},
    {"routeTo":'dashBoard/Chart', "title":'Chart',"icon":<BarChart sx={style.iconStyle}/>},
    {"routeTo":'dashBoard/Users', "title":'Users',"icon":<PersonSearchOutlined sx={style.iconStyle}/>},
    {"routeTo":'dashBoard/adminBlog', "title":'Blog',"icon":<DocumentScanner sx={style.iconStyle}/>},
    {"routeTo":'dashBoard/Question', "title":'Question',"icon":<QuestionMarkOutlined sx={style.iconStyle}/>}
]


