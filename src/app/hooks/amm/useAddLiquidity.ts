import { Asset } from 'types/asset';
import { getTokenContract } from 'utils/blockchain/contract-helpers';
import { useSendContractTx } from '../useSendContractTx';
import { useAccount } from '../useAccount';
import { toWei } from 'web3-utils';

export function useAddLiquidity(
  asset: Asset,
  amount: string,
  minReturn: string,
) {
  const account = useAccount();
  const { send, ...rest } = useSendContractTx(
    'liquidityProtocol',
    'addLiquidity',
  );

  return {
    deposit: () => {
      return send(getTokenContract(asset).address, amount, minReturn, {
        from: account,
        value: asset === Asset.BTC ? amount : toWei('0'),
      });
    },
    ...rest,
  };
}
