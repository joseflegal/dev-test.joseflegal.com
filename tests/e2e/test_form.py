from random import randint

import pytest
from faker import Faker

from tests.pom.pages.qa_page import QAPage


def generate_fake_data(iterations: int = 1):
    fake = Faker()
    data = []

    # Might use list comprehension but it sacrifices readability
    for _ in range(iterations):
        data.append(
            [f"{fake.first_name()} {fake.last_name()}", fake.email(), str(randint(1, 100)), fake.phone_number()])
    return data


@pytest.mark.parametrize("name, email, age, phone", [
    # --- Random data
    *generate_fake_data(10),
    # --- Hand picked test data
    ["Ana Dragan", "ana_1998_maria@yahoo.com", "23", "0724347040"],
    ["This is a very long text." * 10, "ana_1998_maria@yahoo.com", "23", "0724347040"]
])
def test_successful_submission(qa_page, name, email, age, phone):
    qa_form = QAPage(page=qa_page)
    qa_form.fill_form_and_submit(name, email, age, phone)
    success_message = qa_form.form_success_message()
    assert success_message == f' Form submited: {name}({email}), age of {age}, tel: {phone} ✅ '


@pytest.mark.parametrize("name, email, age, phone", [
    # --- Hand picked test data
    ["", "ana_1998_maria@yahoo.com", "23", "0724347040"],
    ["Ana Dragan", "", "23", "0724347040"],
    ["Ana Dragan", "ana_1998_maria@", "23", "0724347040"],
    ["Ana Dragan", "ana_1998_maria.com", "23", "0724347040"],
    ["Ana Dragan", "ana_1998_maria@yahoo.com", "", "0724347040"],
    # ["Ana Dragan", "ana_1998_maria@yahoo.com", "-1", "0724347040"], # should not work - bug
    # ["Ana Dragan", "ana_1998_maria@yahoo.com", "120", "0724347040"], # should not work - bug
    ["Ana Dragan", "ana_1998_maria@yahoo.com", "23", ""],
    # ["Ana Dragan", "ana_1998_maria@yahoo.com", "23", "alosihxoa"] # should not work - bug
    # ["Ana Dragan", "ana_1998_maria@yahoo.com", "23", "0"]  # should not work - bug
])
def test_unsuccessful_submission(qa_page, name, email, age, phone):
    qa_form = QAPage(page=qa_page)
    qa_form.fill_form_and_submit(name, email, age, phone)
    success_message = qa_form.query_success_message()
    assert success_message is None
