require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile property hunt problem obscure survey'; 
let testAccounts = [
"0xad675330231643fec45b2109dc0bcde6bdc2a9b69fff99824f41850bccb8fe98",
"0xdf4c73aca49cda4768b8204730557dcd9e3d2f021131a8a4cc94e0cd1743ce03",
"0x28abf0631f47eff3c28f1b692af018a226ccbcd6476abad00ec43d9096ee8f9d",
"0xf3a77a7d11813096fd961b8036c6cd4286b293d875bcfa96aec9f5c540d0bf36",
"0x886be0115526c9530420cfe9e21de60faf210bd8d65587642d131198ac853728",
"0xb03d9d61cbd1e589b7dc1adff840d9bdfcf53c443994662c27cb7c8fa2a727d7",
"0x22f13fe466d62c94a509a80b227d11896bc0c76fb30be0d9bd74e02643dac443",
"0x063c8b5d215d92f2ea5e383ebab26995a288732c0e2460364b68a69b0fcebc71",
"0x50f4e5f3579b75fd630720463e7c4b768a78a18b869c7ee84c986f9a99d26c20",
"0x2cb0005c306524fda310135109984589f49276f2659a06f0d831ce71c1b161c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

