import React from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components/macro';

import error_alert from '../../../../assets/images/error_outline-24px.svg';
import liquality from '../../../../assets/wallet_icons/liquality.svg';
import metamask from '../../../../assets/wallet_icons/Metamask.svg';
import nifty from '../../../../assets/wallet_icons/nifty.svg';
import netData from './network.json';

import '../_networkRibbon.scss';

interface Props {
  onStart: () => void;
  walletType: string;
}
export function DetectionScreen(props: Props) {
  var logo: any = null;
  var netName: string = '';
  const { ethereum } = window as any;
  const chainId = parseInt(ethereum.chainId as string);
  const walletName =
    props.walletType.charAt(0).toUpperCase() + props.walletType.slice(1);
  // eslint-disable-next-line array-callback-return
  netData.map(item => {
    if (item.chainId === chainId) {
      netName = item.name;
      return 0;
    }
  });
  if (props.walletType === 'metamask') {
    logo = metamask;
  } else if (props.walletType === 'liquality') {
    logo = liquality;
  } else if (props.walletType === 'nifty') {
    logo = nifty;
  }
  return (
    <>
      <div className="d-flex my-3 justify-content-center flex-row pt-3 pb-5 font-family-montserrat">
        <div className="mr-2">
          <img src={error_alert} alt="1" />
        </div>
        <div className="text-left subtitle">
          We detected that you are on {netName}
          <br /> Please switch to RSK Mainnet in your {walletName} wallet
        </div>
      </div>
      <div className="d-flex mt-3 mb-5 justify-content-center flex-row pb-5 font-family-montserrat">
        <div className="d-flex flex-row justify-content-center align-items-center logo">
          <img alt="1" src={logo} className="text-center" />
        </div>
        {props.walletType === 'metamask' && (
          <div className="d-flex flex-column ml-5">
            <SettingsTitle> RSK Mainnet Settings</SettingsTitle>

            <Details>
              <SubLeftDetails>
                <DetailTitle>Network Name:</DetailTitle>
                <DetailTitle>New RPC Url:</DetailTitle>
                <DetailTitle>Chain Id:</DetailTitle>
                <DetailTitle>Symbol:</DetailTitle>
                <DetailTitle>Block Explorer URL:</DetailTitle>
              </SubLeftDetails>
              <SubRightDetails>
                <DetailTitle>RSK Mainnet</DetailTitle>
                <DetailTitle>https://public-node.rsk.co</DetailTitle>
                <DetailTitle>30</DetailTitle>
                <DetailTitle>RBTC</DetailTitle>
                <DetailTitle>https://explorer.rsk.co</DetailTitle>
              </SubRightDetails>
            </Details>
          </div>
        )}
      </div>
      <div className="d-flex my-5 justify-content-center align-items-center text-center">
        <a onClick={props.onStart} className="titleTut font-family-montserrat">
          How to connect to RSK Mainnet with {walletName}
        </a>
      </div>
    </>
  );
}
const Details = styled.div`
  width: 120%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const SubLeftDetails = styled.div`
  width: 50%;
  display: flex;
  height: 160px;
  justify-content: space-evenly;
  flex-direction: column;
  /* justify-content: start; */
`;
const SubRightDetails = styled.div`
  width: 60%;
  display: flex;
  height: 160px;
  justify-content: space-evenly;
  flex-direction: column;
  /* justify-content: start; */
`;
const SettingsTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  text-align: left;
  color: white;
`;
const DetailTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  color: white;
`;
