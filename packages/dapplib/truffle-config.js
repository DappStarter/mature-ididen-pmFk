require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan regret museum clutch grace immense army gauge'; 
let testAccounts = [
"0x38963d0f9cf6e8936d9d3fbe4faf94379b2128f776b7e6fb4a7b97b6bca498e1",
"0xe6df0b910ed42a7544a24125372a5a3b38331497f10f02ce1056dc4bf366e786",
"0xf03b06fc8c18b34e29a7150a849d624f4d9cdb9d6990b7cf5b6bf9f512a1e04d",
"0xbfcde735dcc6416b834c1daab16cc099b986cec678a1a2adb178c6cb167dc7ba",
"0x650336c9d70b52db306ac962b99e88ecacbf0f00138fd81cb4e4e8737681c468",
"0xf0f419038a2c81180402b61c4f8e6149fb5f8334a3c329a197f8186db9aa3778",
"0x31f7e4e5b152ff69a9eb2183125880a4d11674a056b1cb296aa780712fdf7145",
"0x52c4fcfa20e43de1283c6590b4cc1c9547cc9f8e8d9de2dd4e0c00f9bbcf2983",
"0x9ab271fcd806d32f166f2f0dd1a158cd0f90e0bae3dd2237dbcbb072b35d13ae",
"0xb69fa74cfd00a53f45f073bc162c7584cacdd4a013175aa288ea4c88f75f966d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

