This is an app that visualizes the mempool activities in bitcoin core.
The main branch contains the client side (frontend code) and the server branch contains the endpoints (backend code).

#### Languages:
            -   Typescript
            -   Rust

#### Libraries:
            -   Nextjs
            -   Chakra UI
            -   ChartJs
            -   bitcoinrpc
            -   bitcoinrpc-json
            -   Serde
            -   Rocket

## Getting Started

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



