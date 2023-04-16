import { ChakraProvider } from "@chakra-ui/react";
import Routes from "./routes/Routes";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider, midnightTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, provider } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID || '' }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'Credit Score',
  chains
});
const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})

const App = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} initialChain={5} theme={midnightTheme() } coolMode>
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
    </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
