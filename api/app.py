import os
from flask import Flask, jsonify
from pathlib import Path
from datetime import datetime, timezone


def create_app():
    app = Flask(__name__)

    # Directorio de videos configurable por variable de entorno
    video_dir = os.environ.get("VIDEO_DIR", "/media/seguridad")

    @app.get("/api/health")
    def health():
        return {"status": "ok"}

    @app.get("/api/videos")
    def list_videos():
        p = Path(video_dir)
        if not p.exists() or not p.is_dir():
            return jsonify({"videos": [], "video_dir": video_dir, "exists": False})

        exts = {".mp4", ".mov", ".avi", ".mkv", ".webm"}
        items = []
        for entry in sorted(p.iterdir()):
            if entry.is_file() and entry.suffix.lower() in exts:
                stat = entry.stat()
                items.append({
                    "name": entry.name,
                    "size": stat.st_size,
                    "mtime": datetime.fromtimestamp(stat.st_mtime, tz=timezone.utc).isoformat(),
                    "url": f"/videos/{entry.name}"
                })
        return jsonify({"videos": items, "count": len(items)})

    return app


app = create_app()
