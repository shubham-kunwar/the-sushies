import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,

} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from '@solana/web3.js';


import React, { FC, ReactNode, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import { Navbar } from "./comp/Navbar"
import { Footer } from "./comp/Footer"

//pages
import { Home } from "./pages/Homepage"
import { Mint } from "./pages/Mint"
import { Blog } from "./pages/Blog"
import { Career } from "./pages/Career"
import { PageNotFound } from "./pages/PageNotFound"
import  Test  from "./pages/Test"

require('./App.css');

require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
    return (
        <Context>
            <Router>

                <Navbar />
                
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/mint" element={<Mint />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="*" element={<PageNotFound />} />

                </Routes>

               
                    
                    <Footer></Footer>

                
            </Router>
        </Context>
    );
};
export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);


    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new SlopeWalletAdapter(),
            new SolletWalletAdapter({ network }),
            new SolletExtensionWalletAdapter({ network }),
           

        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};


