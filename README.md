# 🚀 GitLM - Git Language Model

GitLM is an AI-powered tool that lets you explore any GitHub repository effortlessly! Just enter a GitHub username, and GitLM will fetch:

- 👥 **Followers & Following**
- 📦 **Repositories** (with descriptions & sizes)
- 💬 **Chat with Repositories**

## 🔍 How It Works

1. Enter a GitHub username.
2. Fetch user data: Followers, Following, and Repositories.
3. Click on any repository to open a **chat-powered modal**.
4. **Interact with the repository** using AI to understand its codebase easily!

## 🏗️ Behind the Scenes

When you click on a repository:

1. 🔄 A **Flask server** processes the request.
2. 🔗 It sends the repository URL to **GitIngest**, which generates a **summary** of the entire repo.
3. 🧠 The summary is passed to an **LLM (Large Language Model)** for context.
4. ⚡ GitLM leverages **Modus + Hypermode + Dgraph + GraphQL** to enable a seamless **chat experience** with repositories and users.
5. 🤖 AI helps understand the repository structure and content effortlessly!

## 🛠️ Tech Stack

- **Frontend**: Vite + React ⚛️
- **Backend**: Flask 🐍 + Express ⚡
- **AI Stack**: LLM, GitIngest, Modus, Hypermode, Dgraph, GraphQL 🧠

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/93e1bd59-a70c-4d8b-ae82-1bc206b855d2)
![image](https://github.com/user-attachments/assets/ab34439f-972a-4500-8478-772a168a1e8b)


## 📌 Future Enhancements
- 🌐 Multi-user collaboration
- 🔍 Advanced repository insights
- 🏷️ Tag-based search for repos

## 🏁 Get Started
Clone the repo and install dependencies:
```sh
# Clone the repository
git clone https://github.com/git-language-model/gitlm
cd gitlm

# open terminal for each component
1. For Client
    cd app
    cd client
    npm install
    npm run dev

2. For Server
    cd app
    cd server
    npm install
    hyp link
    modus dev

3. For Flask_Server
    cd app
    cd flask_server
    python -m venv venv
    ./venv/script/activate
    pip install -r requirements.txt
    flask run or python main.py

```

## 📎Refernce Links

https://docs.hypermode.com/work-locally <br/>
https://docs.hypermode.com/deploy <br/>
https://docs.hypermode.com/create-project <br/>
https://docs.hypermode.com/hosted-models<br/>
https://docs.hypermode.com/hyp-cli

## 📢 Contribute
Feel free to contribute and improve GitLM! Open issues and pull requests are welcome. 🚀

## 📜 License
MIT License © 2025 GitLM

