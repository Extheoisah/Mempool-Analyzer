#[macro_use]
extern crate lazy_static;
#[macro_use]
extern crate rocket;
extern crate bitcoincore_rpc;

use bitcoincore_rpc::{
    bitcoin::{hash_types::Txid, hashes::sha256d::Hash},
    json::{self, GetMempoolEntryResult},
    Auth, Client, RpcApi,
};

use rocket::http::Header;
use rocket::{
    fairing::{Fairing, Info, Kind},
    serde::json::Json,
    Build, Rocket,
};
use rocket::{Request, Response};
use serde::{Deserialize, Serialize};
use std::{collections::HashMap, vec};
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

pub struct CORS;

#[rocket::async_trait]
impl Fairing for CORS {
    fn info(&self) -> Info {
        Info {
            name: "Attaching CORS headers to responses",
            kind: Kind::Response,
        }
    }

    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new(
            "Access-Control-Allow-Methods",
            "POST, GET, PATCH, OPTIONS",
        ));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}

#[derive(Serialize)]
struct StatusMessage {
    message: String,
}

#[derive(Debug, Serialize)]
struct MemData {
    txn_ids: HashMap<Txid, json::GetMempoolEntryResult>,
}

#[derive(Debug, Serialize, Deserialize)]
struct TxnInput {
    txn_id: String,
}

#[get("/")]
fn index() -> &'static str {
    "Welcome!"
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

#[post("/txn-data", data = "<txn_id>", format = "application/json")]
fn fetch_txn_data(txn_id: Json<TxnInput>) -> Json<json::GetMempoolEntryResult> {
    let id: String = txn_id.txn_id.clone();
    let txnid_hash: Hash = id.parse().unwrap();
    let tx_id: Txid = Txid::from_hash(txnid_hash);
    let data: GetMempoolEntryResult = RPC.get_mempool_entry(&tx_id).unwrap();
    Json(data)
}

#[post("/tx-id", data = "<txn_id>", format = "application/json")]
fn fetch_txn(txn_id: Json<TxnInput>) -> Json<TxnInput> {
    let txid: String = txn_id.txn_id.clone();
    Json(TxnInput { txn_id: txid })
}

#[launch]
fn rocket() -> Rocket<Build> {
    //computes all routes for launch to server
    rocket::build().attach(CORS).mount(
        "/",
        routes![index, fetch_mempool_data, fetch_txn_data, fetch_txn],
    )
}
