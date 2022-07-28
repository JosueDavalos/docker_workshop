from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

PORT = 8000


@app.route("/test")
def get_test():
    return jsonify({"message": "TODO Posi :D"})


if __name__ == "__main__":
    app.run(debug=False, port=PORT, host="0.0.0.0")
