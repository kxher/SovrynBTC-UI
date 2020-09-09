import React, { useEffect, useState } from 'react';
import { EventData } from 'web3-eth-contract';
import { weiTo18, weiTo4, weiToFixed } from 'utils/blockchain/math-helpers';
import { symbolByTokenAddress } from '../../../utils/blockchain/contract-helpers';
import { TradingHistoryItem } from '../TradingHistoryItem';
import { Tooltip } from '@blueprintjs/core';
import { bignumber } from 'mathjs';

interface Props {
  items: EventData[];
}

interface ItemState {
  prepared: boolean;
  loanId: string;
  loanToken: string;
  collateralToken: string;
  position: string;
  leverage: string;
  entryPrice: string;
  profit: string;
}

export function TradingHistoryListItems(props: Props) {
  const [items, setItems] = useState<EventData[]>([]);
  const [state, setState] = useState<ItemState>({
    prepared: false,
    loanId: '0x0',
    loanToken: null as any,
    collateralToken: null as any,
    position: '0',
    leverage: '0',
    entryPrice: '0',
    profit: '0',
  });

  // const { value: loan, getLoan } = useGetLoan();

  useEffect(() => {
    const sorted = props.items.sort((a, b) => b.blockNumber - a.blockNumber);
    setItems(sorted);

    const tradeEvent = sorted.find(item => item.event === 'Trade');
    let loanId = '0x0';

    let profit = '0';
    if (tradeEvent) {
      loanId = tradeEvent.returnValues.loanId;
      setState(prev => ({
        ...prev,
        ...{
          prepared: true,
          loanId: tradeEvent.returnValues.loanId,
          loanToken: symbolByTokenAddress(tradeEvent.returnValues.loanToken),
          collateralToken: symbolByTokenAddress(
            tradeEvent.returnValues.collateralToken,
          ),
          position: tradeEvent.returnValues.positionSize,
          entryPrice: tradeEvent.returnValues.entryPrice,
          leverage: tradeEvent.returnValues.currentLeverage,
        },
      }));

      profit = bignumber(tradeEvent.returnValues.positionSize)
        .minus(
          bignumber(tradeEvent.returnValues.positionSize).div(
            tradeEvent.returnValues.entryPrice,
          ),
        )
        .toFixed(0);
    }

    const sellEvents = sorted.filter(item => item.event === 'CloseWithSwap');
    if (sellEvents.length) {
      sellEvents.forEach(ev => {
        loanId = ev.returnValues.loanId;

        profit = bignumber(profit)
          .add(
            bignumber(ev.returnValues.positionCloseSize).div(
              ev.returnValues.exitPrice,
            ),
          )
          .toFixed(0);

        //   // todo calculation is needed here.
        //   const priceRate = bignumber(ev.returnValues.exitPrice).minus(
        //     entryPrice,
        //   );
        //   profit = profit.add(
        //     bignumber(ev.returnValues.positionCloseSize),
        //   );
        //   setState(prev => ({
        //     ...prev,
        //     ...{
        //       position: bignumber(prev.position)
        //         .minus(ev.returnValues.positionCloseSize)
        //         .toString(),
        //     },
        //   }));
      });
      // setState(prev => ({ ...prev, ...{ profit: profit.toString() } }));
    }

    setState(prev => ({
      ...prev,
      ...{ loanId: loanId, profit: profit },
    }));
    setItems(sorted);
    // getLoan(loanId);
  }, [props.items /*, getLoan*/]);

  // collateral: "0"
  // collateralToken: "0xE631653c4Dc6Fb98192b950BA0b598f90FA18B3E"
  // currentMargin: "0"
  // endTimestamp: "1598635465"
  // interestDepositRemaining: "0"
  // interestOwedPerDay: "0"
  // loanId: "0xa3f4144ddb82f9be5c3ed791ab6253a18d0f15746e8b436460eeed91daa4298b"
  // loanToken: "0xE53d858A78D884659BF6955Ea43CBA67c0Ae293F"
  // maintenanceMargin: "15000000000000000000"
  // maxLiquidatable: "0"
  // maxLoanTerm: "2419200"
  // maxSeizable: "0"
  // principal: "0"
  // startMargin: "50000000000000000000"
  // startRate: "100000000000000"

  if (!state.prepared) {
    return <></>;
  }

  return (
    <div
      className={`container bg-secondary mb-3 ${
        !state.prepared ? 'bp3-skeleton' : ''
      }`}
    >
      {state.prepared && (
        <div className="row py-3 align-items-center">
          <div className="col-2">
            <strong>
              {state.loanToken}/{state.collateralToken}
            </strong>
          </div>
          <div className="col-2">
            <div>
              <strong>Position</strong>
            </div>
            <Tooltip content={<>{weiTo18(state.position)}</>}>
              {weiTo4(state.position)}
            </Tooltip>
          </div>
          <div className="col-2">
            <div>
              <strong>Leverage</strong>
            </div>
            <Tooltip content={<>{weiTo18(state.leverage)}</>}>
              <>x{weiToFixed(state.leverage, 0)}</>
            </Tooltip>
          </div>
          <div className="col-2">
            <div>
              <strong>Entry Price</strong>
            </div>
            <Tooltip content={<>{weiTo18(state.entryPrice)}</>}>
              {weiTo4(state.entryPrice)}
            </Tooltip>
          </div>
          <div className="col-2">
            <div>
              <strong>Profit</strong>
            </div>
            <Tooltip content={<>{weiTo18(state.profit)}</>}>
              {weiTo4(state.profit)}
            </Tooltip>
          </div>
        </div>
      )}

      <div>
        {items.map((item, index) => (
          <TradingHistoryItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
