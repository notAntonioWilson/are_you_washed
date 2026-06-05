import subprocess, time, os, signal
proc = subprocess.Popen(["npm","start"], cwd="/home/claude/project",
                        env={**os.environ,"PORT":"3100"},
                        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, preexec_fn=os.setsid)
try:
    import urllib.request
    up=False
    for _ in range(20):
        time.sleep(1.5)
        try: urllib.request.urlopen("http://127.0.0.1:3100/", timeout=2); up=True; break
        except Exception: pass
    if up:
        from playwright.sync_api import sync_playwright
        with sync_playwright() as p:
            b=p.chromium.launch()
            pg=b.new_page(viewport={"width":1440,"height":900})
            pg.goto("http://127.0.0.1:3100/", wait_until="commit", timeout=12000); time.sleep(3)
            pg.evaluate("window.scrollTo(0, 980)"); time.sleep(1.2)
            pg.screenshot(path="/home/claude/r_svc2.png")
            print("svc2 ok", flush=True)
            b.close()
finally:
    os.killpg(os.getpgid(proc.pid), signal.SIGKILL)
