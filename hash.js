const argon2 = require('argon2')
const readline = require('readline')

const rl =  readline.createInterface({
input: process.stdin,
output: process.stdout
})

rl.question('Enter Your Password:', async(password)=>{
   const hash = await argon2.hash(password,{type:argon2.argon2id})
   console.log(`hash:${hash}`)

rl.question('Re-Enter Your Password', async(pw)=>{
    const recheck = await argon2.verify(hash,pw)
    console.log(recheck? 'Correct':'incorrect');
    process.exit(0);
} )
})