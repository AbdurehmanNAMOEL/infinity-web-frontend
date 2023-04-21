import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';
import StarIcon from '@mui/icons-material/Star';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MeresaHiluf from '../../assets/image/Meresa-Hiluf.jpg'
import SamuelGebremariam from '../../assets/image/Samuel-Gebremariam.jpg'
import KirosWelduImage from '../../assets/image/KirosWeldu.jpg'
import Investment from '../../assets/image/Investment.svg'
import development from '../../assets/image/development.svg'
import product from '../../assets/image/product.svg'
import Consultancy from '../../assets/image/Consultancy.svg'
const iconStyle={
    icon:{
        color:'#1A6CE8'
    }
}
export const whyUsData=[
 {
    "Title":'No withdrawal threshold',
    'body':`Infinity survey has no withdrawal threshold. 
            Once you complete a survey you get paid for 
            it almost instantly! There's no points system. 
            Complete a survey, choose a reward, and cash-out 
            by choosing your preferred gift card.`,
    'icon':<MoneyOffCsredIcon sx={iconStyle.icon}/>
 },

 {
    "Title":'Rewards',
    'body':`On Infinity, all surveys were born equal. Whether 
            the survey took you 5 minutes or 15 minutes, 
            if you complete the survey you'll get rewarded with
            $1 USD.`,
    'icon':<StarIcon sx={iconStyle.icon}/>
 },
 
 {
    "Title":'Never Miss a New Survey',
    'body':`Infinity keeps you updated. We make sure to notify
            you (in your preferred method) whenever we have a 
            new relevant survey for you, so you'll never miss 
            out on a chance to complete surveys for money.`,
    'icon':<NotificationsActiveIcon sx={iconStyle.icon}/>
 },
 
]

export const foundersData=[
  {
    'name':'Kiros Weldu',
    'position':'Co-founder & CEO',
    'facebookUrl':'',
    'linkedInUrl':'',
    'telegramUrl':'',
    'imageUrl':KirosWelduImage
},

{
    'name':'Meresa Hiluf ',
    'position':'Co-founder & COO',
    'facebookUrl':'',
    'linkedInUrl':'',
    'telegramUrl':'',
    'imageUrl':MeresaHiluf 
},

{
    'name':'Samuel-Gebremariam',
    'position':'Co-Founder & CSO',
    'facebookUrl':'',
    'linkedInUrl':'',
    'telegramUrl':'',
    'imageUrl':SamuelGebremariam
},
]

export const roadMapData=[
  {
    'year':'2023',
    'userCount':'100k contributor',
    'work':'100 survey and observation',
    'animationDuration':1
},

  {
    'year':'2024',
    'userCount':'250+ contributor',
    'work':'Service to south Sudan and Kenya',
    'animationDuration':2
},

  {
    'year':'2025',
    'userCount':'500k contributor',
    'work':'2k survey and observation',
    "animationDuration":2.5
},
  {
    'year':'2026',
    'userCount':'1M contributor',
    'work':'10k survey and observation',
    "animationDuration":3
},
]

export const ourWorkData=[
 {'title':'Market Research' ,'imageUrl':Investment},
 {'title':'Business Development Research' ,'imageUrl':development},
 {'title':'Product validitytes' ,'imageUrl':product},
 {'title':'Consultant' ,'imageUrl':Consultancy},
]

