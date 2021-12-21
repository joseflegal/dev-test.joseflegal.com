from typing import Union

from playwright.sync_api import ElementHandle, Page

from tests.pom.locators.qa_form_locators import QAFormLocators


class QAPage:
    """
    Class for QA page containing methods to fill fields, submit the form and get the success message
    of the form submission

    ```python
    qa_form = QAForm(page = qa_page)
    qa_form.fill_name("Ana Dragan")
    """
    def __init__(self, page: Page) -> None:
        self.page = page

    def fill_name(self, name: str) -> None:
        """
        Args:
            name: the name to be filled

        Returns:
            None
        """

        self.page.fill(QAFormLocators.NAME_SELECTOR, name)

    def fill_email(self, email: str) -> None:
        """
        Args:
            email: the email to be filled

        Returns:
            None
        """

        self.page.fill(QAFormLocators.EMAIL_SELECTOR, email)

    def fill_age(self, age: str) -> None:
        """
        Args:
            age: the age to be filled

        Returns:
            None
        """

        self.page.fill(QAFormLocators.AGE_SELECTOR, age)

    def fill_phone(self, phone: str) -> None:
        """
        Args:
            phone: the phone to be filled

        Returns:
            None
        """

        self.page.fill(QAFormLocators.PHONE_SELECTOR, phone)

    def click_submit(self) -> None:
        """
        Returns:
             None
        """
        self.page.click(QAFormLocators.SUBMIT_BUTTON_SELECTOR)

    def fill_form_and_submit(self, name, email, age, phone) -> None:
        """
        Fill the form and submit it
         Args:
            name: the name to be filled
            email: the email to be filled
            age: the age to be filled
            phone: the phone to be filled

        Returns:
            None
        """
        self.fill_name(name)
        self.fill_email(email)
        self.fill_age(age)
        self.fill_phone(phone)
        self.click_submit()

    def form_success_message(self) -> str:
        """
        Get the success message after form submission

        Returns:
            The success message
        """
        return self.query_success_message().text_content()

    def query_success_message(self) -> Union[ElementHandle, None]:
        return self.page.query_selector(QAFormLocators.SUCCESS_MESSAGE)
