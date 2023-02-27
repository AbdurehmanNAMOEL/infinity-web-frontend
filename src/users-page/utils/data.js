import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';
import StarIcon from '@mui/icons-material/Star';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
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
