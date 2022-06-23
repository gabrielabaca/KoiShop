import React, { useEffect } from 'react'
import HeaderView from './index.view'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const HeaderContainer = () =>{

    const {
        productos:{cart}
    } = useSelector((state: RootState) => state )
    
    

    return (
        <HeaderView cart={cart}/>
    )
};
export default HeaderContainer;