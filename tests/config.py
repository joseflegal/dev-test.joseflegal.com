from os import environ


class Config:
    PROTOCOL = environ.get("PROTOCOL", "http")
    HOSTNAME = environ.get("HOSTNAME", "localhost")
    PORT = environ.get("PORT", 9001)
    URL = f"{PROTOCOL}://{HOSTNAME}:{PORT}"
    BROWSER_ENGINE = environ.get("BROWSER_ENGINE", "chromium")
    BROWSER_CHANNEL = environ.get("BROWSER_CHANNEL", "chromium")
    BROWSER_HEADLESS = environ.get("BROWSER_HEADLESS", False)
