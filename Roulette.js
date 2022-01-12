console.log("My first NodeJS application");
const web3 = require("@solana/web3.js");
const connection=new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
//For checking whether the connection is successfully made
console.log(connection);
const userWallet=web3.Keypair.fromSecretKey(Uint8Array.from(userSecretKey));
const transaction=new web3.Transaction().add(
    web3.SystemProgram.transfer({
        fromPubkey:new web3.PublicKey(from.publicKey.toString()),
        toPubkey:new web3.PublicKey(to.publicKey.toString()),
        lamports:web3.LAMPORTS_PER_SOL
    })
);
const signature=await web3.sendAndConfirmTransaction(
    connection, 
    transaction,
    [fromWalletInstance]
);
console.log('Signature is ',signature);