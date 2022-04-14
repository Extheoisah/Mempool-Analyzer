#[macro_use]
extern crate lazy_static;
#[macro_use]
extern crate rocket;
extern crate bitcoincore_rpc;

use bitcoincore_rpc::{bitcoin::Txid, json, Auth, Client, RpcApi};

use rocket::{serde::json::Json, Build, Rocket};
use serde::Serialize;
use std::collections::HashMap;
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
    txn_ids: HashMap<Txid, json::GetMempoolEntryResult>,
}

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[get("/mempool-data")]
fn fetch_mempool_data() -> Json<MemData> {
    // Send "All" mempool data to endpoint @localhost:8000
    let datum: MemData = get_mempool_txns().unwrap();
    Json(datum)
}

fn get_mempool_txns() -> Result<MemData, String> {
    // Check if a wallet is loaded in bitcoin core,
    // if loaded,
    // Get all transaction ID's in the mempool
    let wallets: Result<Vec<String>, bitcoincore_rpc::Error> = RPC.list_wallets();
    match wallets {
        Ok(wallet) => {
            println!("All wallets: {:?}", wallet)
        }
        Err(_) => return Err(String::from("Failed to fetch wallets")),
    }

    let raw_mem_pool: Result<HashMap<Txid, json::GetMempoolEntryResult>, bitcoincore_rpc::Error> =
        RPC.get_raw_mempool_verbose();

    match raw_mem_pool {
        Ok(data) => {
            println!("mempool data: {:#?}", (data));
            Ok(MemData { txn_ids: data })
        }
        Err(_) => return Err("No data found! {}".into()),
    }
}

#[launch]
fn rocket() -> Rocket<Build> {
    //computes all routes for launch to server
    rocket::build().mount("/", routes![index, fetch_mempool_data])
}
