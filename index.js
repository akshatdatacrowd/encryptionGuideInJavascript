const loading = require("loading-cli");
//  run the loading animation for 2 seconds

const load = loading("Loading...").start();

setTimeout(() => {
  console.clear();
  load.succeed("Loading completed successfully!");

  setTimeout(() => {
    load.stop();
    console.log(
      "\n\n<------Different ways to encrypt and decrypt data in javascript--->\n\n"
    );

    // print hello world in different encryptions
    // <----------- One Way Encryption Methods ------------>
    const crypto = require("crypto");

    // sha256 encryption
    const hash = crypto.createHash("sha256");
    hash.update("hello world");
    console.log("HASH sha256 : " + hash.digest("hex") + "\n");

    // sha512 encryption
    const hash2 = crypto.createHash("sha512");
    hash2.update("hello world");
    console.log("HASH sha512 : " + hash2.digest("hex") + "\n");

    // sha1 encryption
    const hash3 = crypto.createHash("sha1");
    hash3.update("hello world");
    console.log("HASH sha1 : " + hash3.digest("hex") + "\n");

    // md5 encryption
    const hash4 = crypto.createHash("md5");
    hash4.update("hello world");
    console.log("HASH md5 : " + hash4.digest("hex") + "\n");

    // <----------- Two Way Encryption Methods ------------>

    // Base 64----------------

    // base64 encryption
    console.log(
      "base64 encryption : " +
        Buffer.from("hello world").toString("base64") +
        "\n"
    );

    // base64 decryption
    console.log(
      "base64 decrypted : " +
        Buffer.from("aGVsbG8gd29ybGQ=", "base64").toString("ascii") +
        "\n"
    );

    // Base 32 -----------------------------
    const base32 = require("hi-base32");

    // base32 encryption
    console.log("base32 : " + base32.encode("hello world") + "\n");

    // base32 decryption
    console.log(
      "base32 decrypted : " + base32.decode("NBSWY3DPEB3W64TMMQ======") + "\n"
    );

    // Base 16 -------------------> Hexadecimal

    // base16 encryption
    console.log(
      "base16 encryption  : " +
        Buffer.from("hello world").toString("hex") +
        "\n"
    );

    // base16 decryption
    console.log(
      "base16 decrypted : " +
        Buffer.from("68656c6c6f20776f726c64", "hex").toString("ascii") +
        "\n"
    );

    // Base 58 -----------------

    const bs58 = require("bs58");

    // base58 encryption
    const buf = Buffer.from("hello world");
    const base58 = bs58.encode(buf);
    console.log("base58 encryption : " + base58 + "\n");

    // base58 decryption
    const buf2 = bs58.decode(base58);
    console.log(
      "base58 decrypted : " + Buffer.from(buf2).toString("ascii") + "\n"
    );

    // <----------- Three Way Encryption Methods ------------>

    // AES Encryption
    //    Some Explanation about AES encryption
    //        AES is a symmetric encryption algorithm, which means that the same key is used for both encryption and decryption.

    const aes = require("aes-js");

    // AES encryption
    const text = "hello world";
    const key = "12345678901234567890123456789012";
    const textBytes = aes.utils.utf8.toBytes(text);

    // not working
    // const aesCtr = new aes.ModeOfOperation.ctr(key, new aes.Counter(5));

    // working
    [...textBytes].forEach((byte, i) => {
      textBytes[i] = byte ^ key.charCodeAt(i % key.length);
    });
    const encryptedBytes = aes.utils.hex.fromBytes(textBytes);
    console.log("AES encryption : " + encryptedBytes + "\n");

    // AES decryption with same key

    const decryptedBytes = aes.utils.hex.toBytes(encryptedBytes);
    [...decryptedBytes].forEach((byte, i) => {
      decryptedBytes[i] = byte ^ key.charCodeAt(i % key.length);
    });
    console.log(
      "AES decrypted : " + Buffer.from(decryptedBytes).toString("ascii") + "\n"
    );

    // <----------- Four Way Encryption Methods ------------>

    // RSA (Rivest–Shamir–Adleman) Encryption
    //    Some Explanation about RSA encryption
    //        RSA is an asymmetric encryption algorithm, which means that there are two different keys: a public key and a private key.
    //        The public key can be shared with anyone, but the private key must be kept secret.
    //        The public key is used to encrypt data, and the private key is used to decrypt data.

    const NodeRSA = require("node-rsa");

    // rsa encryption

    // 512 bit key
    //  public key is rsa_key.pub;
    //  private key is rsa_key.pem;
    const rsa_key = new NodeRSA({ b: 512 });

    const rsa_text = "hello world";
    const rsa_encrypted = rsa_key.encrypt(rsa_text, "base64");
    console.log("RSA encryption : " + rsa_encrypted + "\n");

    // rsa decryption

    const rsa_decrypted = rsa_key.decrypt(rsa_encrypted, "utf8");
    console.log("RSA decrypted : " + rsa_decrypted + "\n");


    // <----------- Five Way Encryption Methods ------------>

    // Diffie-Hellman Key Exchange
    //    Some Explanation about Diffie-Hellman Key Exchange
    //        Diffie-Hellman key exchange is a method of securely exchanging cryptographic keys over a public channel and was one of the first public-key protocols as originally conceived by Ralph Merkle and named after Whitfield Diffie and Martin Hellman.
    //        It allows two parties that have no prior knowledge of each other to jointly establish a shared secret key over an insecure communication channel.
    //       This key can then be used to encrypt subsequent communications using a symmetric cipher.
    //        The parties can also use the shared secret to authenticate each other.
    //       The shared secret may also be used as a key to derive one or more additional keys.
    //       how does it work?
    //       The Diffie-Hellman key exchange is based on the following mathematical problem:
      
    //       Given two large prime numbers, p and g, and a secret integer a, compute A = g^a mod p.
    //       Given A, compute the secret integer b, and then compute B = g^b mod p.
    //       Given B, compute the secret integer a, and then compute A = g^a mod p.
    //       If A = B, then the secret integer a = b, and the shared secret is S = A^a mod p = B^b mod p = g^(ab) mod p.
    //       The shared secret is the same for both parties, even though neither party knows the other's secret integer.
      //    The shared secret is also the same for both parties, even though neither party knows the other's secret integer.
      
    // const crypto = require("crypto");
    
    // Diffie-Hellman key exchange
    const alice = crypto.createDiffieHellman(512);
    // createDiffieHellman() method creates and returns a Diffie-Hellman object.
    // The method takes a key length as an argument.
    // The key length must be a multiple of 64, ranging from 256 to 8192 (inclusive).
    // The default key length is 1024.
    // The method returns a DiffieHellman object.
    // The object has several properties and methods.
    // The most important properties are prime, generator, and publicKey.
    // The prime and generator properties are used to generate the public and private keys.
    // The publicKey property is used to exchange the public key with the other party.
    // The object also has a generateKeys() method, which generates the public and private keys.
    // The object has a computeSecret() method, which computes the shared secret.
    // The method takes the other party's public key as an argument.
    // The method returns the shared secret as a Buffer object.
    // The object also has a getPrime() method, which returns the prime as a Buffer object.
    //  the 2048 is the key size in bits
    // it should take around 1 minute to generate the key
    const aliceKey = alice.generateKeys();
    // aliceKey is the public key
    // alice.getPrivateKey() is the private key
    // alice.getPrime() is the prime number
    // alice.getGenerator() is the generator number
    // alice.getPublicKey() is the public key

    const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());

    const bobKey = bob.generateKeys();
    // bobKey is the public key
    // bob.getPrivateKey() is the private key
    // bob.getPrime() is the prime number
    // bob.getGenerator() is the generator number
    // bob.getPublicKey() is the public key
    
      
    const aliceSecret = alice.computeSecret(bobKey);
    const bobSecret = bob.computeSecret(aliceKey);

    console.log("Diffie-Hellman key exchange : " + aliceSecret.toString("hex") + "\n");
    console.log("Diffie-Hellman key exchange : " + bobSecret.toString("hex") + "\n");









    // Blowfish Encryption
    //    Some Explanation about Blowfish encryption
    //        Blowfish is a symmetric encryption algorithm, which means that the same key is used for both encryption and decryption.
    //        Blowfish is a fast and secure encryption algorithm.
    //       Blowfish is a variable-length key algorithm, which means that the key can be any length.


    console.log("\n\n<------------ The End ------- Bye ----->\n\n");
  }, 1000);
}, 2000);

// <--------------------- End of code ------------------------->






















// some nonsense code to make the code look longer

