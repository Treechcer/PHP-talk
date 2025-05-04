This app is small "social media" app, where you can send messages with any name that you can change, that'll be store on the server in `db.txt` file and every `200 ms` (0.2s) it refreshes will all new messages. You need to host it though because it's server based (whou would've guessed that "social media" uses servers, right?). This is my small project to learn PHP integration with JS and HTML.

# PHP Talk -> Simple Web Chat

**PHP Talk** is a small and lightweight web application that allows users to send and display messages in almost real-time. It was created as a practice project to learn integration between PHP and JS.

## Features

- Submit messages with a username and text of the message you want to send.
- Serer stores the messages and author in a text file (`db.txt`) on the server.
- Automatically fetches and displays new messages every `200` milliseconds which makes it almost refresh in real-time.
- No database required - it's powered by plain PHP and `.txt` file.

## Project Structure

```
## Project Structure
/
├── db.txt          # Simple message storage file the "database"
├── get.php         # Fetches messages from the server  
├── send.php        # Receives and saves new messages to "database"
├── index.html      # Main page with the message form and display area  
├── main.js         # Handles sending and live updates via JavaScript
```

## How to Run

1. Copy the project to your PHP server (XAMPP, Laragon etc.).
2. Make sure `db.txt` is writable by the server.
3. Open `index.html` in your browser.
4. Enter a name and message - it will be saved and displayed near instantaneously.