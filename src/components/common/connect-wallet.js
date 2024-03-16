import React, { useState, useEffect } from 'react';
import {
  avlNetwork,
  checkMetaMask,
  connectWallet,
  switchNetwork,
} from '../../lib/web3';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

const ConnectWalletButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [network, setNetwork] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        const { chainId, name } = await checkMetaMask();
        setNetwork({ chainId, name });
        setIsConnected(false); // Assuming initial connection exists
      } catch (error) {
        // Handle initial connection check error gracefully
        console.error('Error checking initial connection:', error);
        setErrorMessage('An error occurred while connecting to your wallet.');
      }
    };

    initialize();
  }, []);

  const handleConnectWallet = async () => {
    try {
      const newAccounts = await connectWallet();
      setAccounts(newAccounts);
      setIsConnected(true);

      // Handle network switching if necessary
      const desiredChainId = 1001; // Replace with desired chain ID
      if (network.chainId !== avlNetwork[desiredChainId].chainId) {
        try {
          await switchNetwork(desiredChainId);
          setNetwork({
            chainId: desiredChainId,
            name: avlNetwork[desiredChainId].chainName,
          });
        } catch (error) {
          // Handle network switching error gracefully
          console.error('Error switching network:', error);
          setErrorMessage('An error occurred while switching the network.');
        }
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setErrorMessage(
        error.message === 'User rejected request'
          ? 'Wallet connection rejected.'
          : 'An error occurred while connecting your wallet.'
      );
    }
  };

  return (
    <div className="">
      {isConnected ? (
        <Popover>
          <PopoverTrigger asChild>
            <Button>Dogima</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom" align="end" sideOffset={16}>
            <div className="flex flex-col items-start justify-center gap-2 mb-4">
              <p>Account: {accounts[0]}</p>
              <p>Network: {network.name}</p>
            </div>
            <Button className="bg-red-500">Disconnect</Button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button onClick={handleConnectWallet}>Connect Wallet</Button>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ConnectWalletButton;
