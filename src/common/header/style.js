import styled from 'styled-components'
import logoPic from '../../static/logo.png'
export const HeaderWrapper=styled.div`
position:relative;
height:58px;
border-bottom: 1px solid #f0f0f0;
`
//a标签内联标签
export const Logo=styled.a.attrs({href:'/'})`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:58px;
background:url(${logoPic});
background-size:contain;
`
export const Nav=styled.div`
width: 960px;
height:100%;
margin:0 auto;
padding-right:70px;
box-sizing:border-box;
`
export const NavItem=styled.div`
line-height:58px;
padding:0 15px;
front-size:17px
color:#333
&.left{
    float:left;
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color: #ea6f5a;
}


`
export const NavSearch= styled.input.attrs({
    placeholder: '搜索'
})`
margin-top:9px
padding:0 30px 0 30px;
box-sizing:border-box;
margin-left:30px;
width:160px;
height:38px;
border:1px solid #eee;
outline:none;
font-size: 14px;
border-radius:40px;
background: #eee;
#color:#777;
&::placeholder{
color:#999;
}
&.focused{
    width:200px;

}

`
export const SearchInfo=styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
box-shadow:0 0 8px rgba(0,0,0,.2);


`
export const SearchInfoTitle=styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;

`
export const SearchInfoSwitch=styled.span`
float:right;
font-size:13px;
`
export const SearchInfoList=styled.div`
overflow:hidden;`
export const SearchInfoItem=styled.a`
display:block;
float:left;
line-height:20px;
margin-right:10px;
margin-bottom:10px;
padding:0 5px;
font-size:12px;
border: 1px solid #ddd;
color:#969696;
border-radius:3px;
`


export const Addition=styled.div`
position:absolute;
right:0;
top:0;
height:56px;`

export const Button=styled.div`
float:right;
line-height:38px;
border-radius:19px;
margin-top:9px;
border:1px solid #ec6149;
margin-left:20px;
padding:0 20px;
front-size:14px;
&.reg{
    color:#ec6149
}
&.writting{
    color:#fff;
    background:#ec6149;
}

`
export const SearchWrapper =styled.div`
position:relative;
float:left;

.iconfont{
    position:absolute;
    right: 5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
        background:#777;
        color:#fff;
    }
}
`