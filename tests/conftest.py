from typing import Generator

import pytest
from playwright.sync_api import (Browser, BrowserContext, Playwright,
                                 sync_playwright)

from tests.config import Config


@pytest.fixture(scope="session")
def playwright() -> Generator[Playwright, None, None]:
    pw = sync_playwright().start()  # Create the object that will handle the connection to the browser
    yield pw
    pw.stop()  # Close the connection when execution is finished


@pytest.fixture(scope="session")
def browser(playwright) -> Generator[Browser, None, None]:
    options = {"channel": Config.BROWSER_CHANNEL, "headless": Config.BROWSER_HEADLESS}

    browser = getattr(playwright, Config.BROWSER_ENGINE).launch(**options)  # Launch the browser
    yield browser
    browser.close()  # Close the browser when execution is finished


@pytest.fixture
def context(browser: Browser) -> Generator[BrowserContext, None, None]:
    # https://playwright.dev/python/docs/api/class-browser#browser-new-context
    context = browser.new_context(base_url=Config.URL)
    yield context
    context.close()  # Close the context when execution is finished


@pytest.fixture()
def page(context: BrowserContext):
    page = context.new_page()
    yield page


@pytest.fixture()
def qa_page(page):
    page.goto("/#/qa")  # "#" is required because the application redirects and base_url=Config.URL won't play nice
    return page
