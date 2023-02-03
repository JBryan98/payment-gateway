Feature: Shopping mother elephant
    @skip
    Scenario: Shopping mother elphant with babies
        Given The source web page is operative
        When The card number is generated
        And selects the quantity of "5"
        And fill out the form with his card info
        And pays for the product
        Then the user will see the message "Payment successfull!"

    @Test
    Scenario Outline: Shopping mother elphant with babies with multiple quantities
        Given The source web page is operative
        When The card number is generated
        And selects the quantity of "<quantity>"
        And fill out the form with his card info
        And pays for the product
        Then the user will see the message "<message>"
        Examples:
            | quantity | message              |
            | 2        | Payment successfull! |
            | 4        | Payment successfull! |
            | 6        | Payment successfull! |
            | 8        | Payment successfull! |