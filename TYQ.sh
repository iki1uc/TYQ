#!/bin/bash
echo "TYQ BOOT (Knoppix)"
echo "[1/3] RAM Memory Reservieren..."
mount -t tmpfs -o size=2g tmpfs /tmp/tyq
echo "[2/3] Starte Python Server..."
python3 -m http.server 8080 &
sleep 2
echo "[3/3] Starte Chromium..."
chromium --app=http://localhost:8080/TYQ.html --use-gl=swiftshader &
echo "TYQ SYSTEM: ONLINE"
