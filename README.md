# PIPE NETWORK GUARDIAN

Pipe Network | The decentralized CDN redefining data delivery 🌍 | Faster bandwidth, lower latency ⚡ | Built on @Solana [https://pipecdn.app](https://pipecdn.app/signup)
Pipe Network is taking decentralized content delivery to the next level with a two-tier node system that ensures high performance and reliability. PoP Nodes and Guardian Nodes.

![pipe-network](assets/image-1.png)

## GUARDIAN NODES

Sitting above the PoP nodes, Guardian Nodes act like watchdogs. They continuously monitor network health, gather telemetry data, and optimize routing to ensure users get the fastest and most reliable data paths.

## HOW IT WORKS

Guardian Nodes collect real-time metrics like latency, bandwidth, and uptime from PoP nodes.
With these insights, they can reroute traffic dynamically to avoid bottlenecks, improving overall network performance.

## OKE its enough for that intro , lets dive into the code. I will show you how to deploy a simple Guardian Node using CLI BETA VERSION.

## BOT FEATURE

- Register New Accounts.
- Login To Existing Accounts.
- Accounts Management.
- Support Multy Accounts.
- Support Proxy.

## PREREQUISITE

- Git
- Node.js (20+)

## FILE STRUCTURE

- **account.json** it save your account info like email and password
- **proxy.txt** to store proxy you want to use, each line for 1 proxy
  ```
  http://username:pass@ip:port
  ```
- **tokenz.json** it save access token after you login

## INSTALLATION

1. Clone this repository:
   ```bash
   git clone https://github.com/Rambeboy/pipe-network-bot.git && cd pipe-network-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run The Script: Make sure you already fill proxy in `proxy.txt` before start the bot
   
   ```bash
   npm run start
   ```

4. Follow the instructions in the terminal to complete the setup.
- Choose `1` to Register new accounts.
- You need login after you register accounts to get your access token.
- choose `2` to Login to accounts.
- Finally choose `3` to run the bot.

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---