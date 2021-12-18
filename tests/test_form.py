import pytest
from tests.pom.qa_form import QAForm


@pytest.mark.parametrize("name, email, age, phone", [
    ["Ana Dragan", "ana_1998_maria@yahoo.com", "23", "0724347040"],
    ["This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. This is a very long text. ",
     "ana_1998_maria@yahoo.com", "23", "0724347040"]
    ])
def test_successful_submission(qa_page, name, email, age, phone):
    qa_form = QAForm(page=qa_page)
    qa_form.fill_form_and_submit(name, email, age, phone)
    success_message = qa_form.form_success_message()
    assert success_message == f' Form submited: {name}({email}), age of {age}, tel: {phone} ✅ '


@pytest.mark.parametrize("name, email, age, phone", [
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
    qa_form = QAForm(page=qa_page)
    qa_form.fill_form_and_submit(name, email, age, phone)
    success_message = qa_form.query_success_message()
    assert success_message is None
