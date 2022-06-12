import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

// import EarthSwapLogo from '../../assets/images/earth-swap.png'
// import ICOLogo from '../../assets/images/ico.png'
// import PapersLogo from '../../assets/images/papers.png'
import Row from '../../components/Row'

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  ${({ theme }) => theme.flexRowNoWrap}
  cursor: pointer;
  color: ${({ theme }) => theme.text2};
  justify-content: center;
  margin: auto;
`

export default function LandingPage() {
  return (
    <Row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5%' }}>
      <StyledNavLink id={`swap-nav-link`} to={'/earth-swap'}>
        {/* <img src={EarthSwapLogo} alt={'earthswap'} width={'100%'} /> */}
        <h1>Swap</h1>
      </StyledNavLink>
      <StyledNavLink id={`swap-nav-link`} to={'/pool'}>
        {/* <img src={EarthSwapLogo} alt={'earthswap'} width={'100%'} /> */}
        <h1>Pool</h1>
      </StyledNavLink>
      {/* <StyledNavLink id={`ico-link`} to={'/ico'}>
        <img src={ICOLogo} alt={'ico'} width={'100%'} />
      </StyledNavLink>
      <StyledNavLink id={`paper-link`} to={'/ico'}>
        <img src={PapersLogo} alt={'paper'} width={'100%'} />
      </StyledNavLink> */}
    </Row>
  )
}
