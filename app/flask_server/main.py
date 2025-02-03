from flask import Flask, request, jsonify
from flask_cors import CORS
from gitingest import ingest
import html

app = Flask(__name__)

# Add CORS support
CORS(app, resources={r"/*": {"origins": "*"}})

summary, tree, content = ingest("https://github.com/cyclotruc/gitingest")

@app.route("/", methods=["GET"])
def root():
    return jsonify({"message": "Welcome to Flask"})

@app.route("/analyze", methods=["GET"])
def get_summary():
    url = request.args.get('url')
    if not url:
        return jsonify({"error": "URL parameter is missing"}), 400

    summary, tree, content = ingest(url)
    cleaned_summary = html.escape(summary)
    cleaned_tree = html.escape(tree)
    cleaned_content = html.escape(content)

    content_length = len(cleaned_content)
    print('Content length:', content_length)
    
    # Limit the content to the last 1000 characters if it's too long
    if content_length > 1000:
        cleaned_content = cleaned_content[-1000:]

    return jsonify({"summary": cleaned_summary, "tree": cleaned_tree, "content": cleaned_content})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
