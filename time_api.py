from flask import Flask, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route("/time")
def get_time():
    now = datetime.now()
    return jsonify({
        "time": now.strftime("%Y-%m-%d %H:%M:%S")
    })

app.run(port=5000)