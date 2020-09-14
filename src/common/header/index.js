import React from 'react';
import {connect }from 'react-redux';

import {actionCreators} from './store';
import {HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    Addition,
    Button,
    SearchWrapper,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    SearchInfo,
    NavSearch} from "./style";
const getListArea=(show)=>{
    if (show){

        return (<SearchInfo>
            <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>
                换一批
            </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                <SearchInfoItem>技术</SearchInfoItem>
                <SearchInfoItem>技术</SearchInfoItem>
                <SearchInfoItem>技术</SearchInfoItem>
                <SearchInfoItem>技术</SearchInfoItem>
                <SearchInfoItem>技术</SearchInfoItem>

                <SearchInfoItem>技术</SearchInfoItem>
            </SearchInfoList>
        </SearchInfo>)
    }else{
        return null;
    }
}
const Header =(props)=>{
    return (
<HeaderWrapper>
    <Logo />
    <Nav>
        <NavItem className='left active' >首页</NavItem>
        <NavItem className='left'>下载APP</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className="right iconfont">&#xe636;</NavItem>
        <SearchWrapper>
        <NavSearch className={props.focused?'focused':''}
        onFocus={props.handleInputFocus}
        onBlur={props.handleInputBlur}
        >
        </NavSearch>
        <i className = {props.focused?'focused iconfont':'iconfont'}>
        &#xe60c;
        </i>
        {getListArea(props.focused)}
        </SearchWrapper>
    </Nav>
    <Addition>
        <Button className="writting">
            <i className="iconfont">&#xe708;</i>
            写文章</Button>
        <Button className='reg'>注册</Button>
        
    </Addition>
</HeaderWrapper>
    )
}
const mapStateToProps=(state)=>{
    return {
        focused:state.getIn(['header','focused'])
    }

}
const mapDispathToProps=(dispatch)=>{
    return {
            handleInputFocus(){
            
                dispatch(actionCreators.searchFocus());
            },
            handleInputBlur(){
           
                dispatch(actionCreators.searchBlur());
            }
    }
}
export default connect (mapStateToProps,mapDispathToProps)(Header);