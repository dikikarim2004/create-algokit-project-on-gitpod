/* eslint-disable no-console */
import * as algokit from '@algorandfoundation/algokit-utils';
import algosdk from 'algosdk';
async function main() {
    const alice = algosdk.generateAccount()
    console.log(alice.addr)
}

main();
