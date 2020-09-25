import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.walletProvider || initialState;

export const selectWalletProvider = createSelector(
  [selectDomain],
  walletProviderState => walletProviderState,
);
