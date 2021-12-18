class QAForm:

    NAME_SELECTOR = "input[name='name']"
    EMAIL_SELECTOR = "input[name='email']"
    AGE_SELECTOR = "input[name='age']"
    PHONE_SELECTOR = "input[name='phone']"
    SUBMIT_BUTTON_SELECTOR = "button[type='submit']"
    SUCCESS_MESSAGE = "p >> nth=4"

    def __init__(self, page):
        self.page = page

    def fill_name(self, name):
        self.page.fill(QAForm.NAME_SELECTOR, name)

    def fill_email(self, email):
        self.page.fill(QAForm.EMAIL_SELECTOR, email)

    def fill_age(self, age):
        self.page.fill(QAForm.AGE_SELECTOR, age)

    def fill_phone(self, phone):
        self.page.fill(QAForm.PHONE_SELECTOR, phone)

    def click_submit(self):
        self.page.click(QAForm.SUBMIT_BUTTON_SELECTOR)

    def fill_form_and_submit(self, name, email, age, phone):
        self.fill_name(name)
        self.fill_email(email)
        self.fill_age(age)
        self.fill_phone(phone)
        self.click_submit()

    def form_success_message(self):
        return self.query_success_message().text_content()

    def query_success_message(self):
        return self.page.query_selector(QAForm.SUCCESS_MESSAGE)

