#[macro_use]
extern crate lazy_static;
#[macro_use]
extern crate rocket;
extern crate bitcoincore_rpc;

use bitcoincore_rpc::{
    bitcoin::{self, BlockHash},
    Auth, Client, Error, RpcApi,
};
use rocket::{serde::json::Json, Build, Rocket};
use serde::Serialize;
// use serde_json::{json, Result};

lazy_static! {
    // Default Auth and configurations for already loaded wallet
    static ref RPC: Client = Client::new(
        &"http://localhost:38332".to_string(),
        Auth::UserPass("lnd".to_string(), "lightning".to_string()),
    )
    .unwrap();
    // TO-DO: Allow users to load and unload wallet
}

#[derive(Serialize)]
struct StatusMessage {
    message: String,
}

#[derive(Debug, Serialize)]
struct MemData {
    txn_ids: Vec<bitcoincore_rpc::bitcoin::Txid>,
}

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[get("/mempool-data")]
fn fetch_mempool_data() -> &'static str {
    "All, data!"
}

fn get_mempool_txns() {
    // Check if a wallet is loaded in bitcoin core,
    // if loaded,
    // Get all transaction ID's in the mempool
    let wallets = RPC.list_wallets().unwrap();
    println!("All wallets: {:?}", wallets);

    let mem_pool_data = MemData {
        txn_ids: RPC.get_raw_mempool().unwrap(),
    };
    println!("mempool data: {:#?}", mem_pool_data);
}

#[launch]
fn rocket() -> Rocket<Build> {
    get_mempool_txns();
    rocket::build().mount("/", routes![index, fetch_mempool_data])
}
