import pytest
from playwright.sync_api import sync_playwright


@pytest.fixture(scope="session")
def page():
    pw = sync_playwright().start()
    browser = pw.chromium.launch(headless=False)
    page = browser.new_page()
    return page


@pytest.fixture()
def qa_page(page):
    page.goto("http://localhost:9001/#/qa")
    return page
