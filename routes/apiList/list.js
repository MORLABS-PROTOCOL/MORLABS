import { Router } from "express";
export let list = Router()

list.get("/payments/api", (req, res) => {
    res.send({
        category: "payments",
        network: "solana",
        type: "api",
        items: [
            {
                api_name: "Solana Pay",
                description: "A decentralized payment protocol for instant, no-fee blockchain payments on Solana.",
                endpoint: "https://docs.solanapay.com/",
                authentication: "no authentication required"
            },
            {
                api_name: "Stripe Solana Integration",
                description: "Stripe's integration with Solana allows businesses to accept USDC payments via Solana.",
                endpoint: "https://stripe.com/docs/crypto/solana",
                authentication: "api key"
            },
            {
                api_name: "Project Serum Payments",
                description: "Serum provides decentralized APIs for handling Solana-based payments and transactions.",
                endpoint: "https://projectserum.com/",
                authentication: "token authentication"
            },
            {
                api_name: "Sollet Payment API",
                description: "Enables wallet-to-wallet payments via Sollet wallet on Solana.",
                endpoint: "https://www.sollet.io/",
                authentication: "wallet authentication"
            },
            {
                api_name: "Coinbase Solana Payment API",
                description: "Coinbase API allows for accepting crypto payments via Solana blockchain with USDC integration.",
                endpoint: "https://developers.coinbase.com/docs/solana",
                authentication: "oauth"
            },
            {
                api_name: "MoonPay Solana Payment API",
                description: "MoonPay offers fiat-to-crypto payment gateways for Solana applications.",
                endpoint: "https://www.moonpay.com/",
                authentication: "api key"
            },
            {
                api_name: "Ramp Network Solana API",
                description: "Provides an easy fiat-to-Solana on-ramp with integrated payment options.",
                endpoint: "https://ramp.network/",
                authentication: "api key"
            },
            {
                api_name: "Phantom Wallet Payment Integration",
                description: "Facilitates payments and transactions using Phantom wallet on Solana.",
                endpoint: "https://phantom.app/",
                authentication: "wallet authentication"
            },
            {
                api_name: "Wyre Solana Payment API",
                description: "Wyre API enables crypto payments on Solana with fiat on-ramp and off-ramp.",
                endpoint: "https://www.sendwyre.com/",
                authentication: "api key"
            },
            {
                api_name: "Mercuryo Solana Payment API",
                description: "Mercuryo API facilitates fiat-to-crypto transactions for Solana dApps.",
                endpoint: "https://mercuryo.io/",
                authentication: "oauth"
            }
        ]
    }
    )
})
