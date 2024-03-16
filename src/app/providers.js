import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';

const config = getDefaultConfig({
  appName: 'Edu-id',
  chains: [],
  ssr: true,
});

const AppProviders = ({ children }) => {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
};

export default AppProviders;
