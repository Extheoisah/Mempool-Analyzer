This is an app that visualizes the mempool activities in bitcoin core.
The main branch contains the client side (frontend code) and the server branch contains the endpoints (backend code).

#### Languages:
            -   Typescript (client)
            -   Rust (server)

#### Libraries:
            -   Nextjs (client)
            -   Chakra UI (client)
            -   ChartJs (client)
            -   Framer motion (client)
            -   bitcoinrpc (server)
            -   bitcoinrpc-json (server)
            -   Serde (server)
            -   Rocket (server)

## Getting Started

#### Note:
    This app works with Bitcoin core, So you must have it running on your machine.
    Before running the server, modify your bitcoin.conf file to use the following rpc configurations:
    ```
    rpcuser=lnd
    rpcpassword=lightning

    [signet]
    rpcport=18332
    ```

First, run the backend server:

```bash
cargo run
#or
cargo build && ./target/debug/server
```

Next start the client development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes] server can be accessed on [http://localhost:8000/](http://localhost:8000/). 



