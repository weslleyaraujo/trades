Magnetis front-end-test
==============
Insert/Edit Trades

In order to update my portfolio
As an investor
I want to view and edit my trades

Acceptance criteria:
Implement the interface using any preferred approach.
The interface should be fast and make as few server requests as necessary.
The interface should work on all browsers (IE8 and above).
The interface does not need to be responsive or mobile-ready.
The app API will provide:
list of all funds
 GET /funds.json
 information of a specific fund
  GET /funds/:id.json
  list all prices from a fund
   GET /funds/:id/prices
   price of a specific date
    GET/funds/:id/prices?date=yyyy-mm-dd
    POST /trades
    fields
    date (date)
    kind (int. 0 = subscription, 1 = redemption, 2 = redemption for shares)
    shares (decimal)
    fund_id (int)
    The user can insert as many trades as he wants.
    The date must be in brazilian date format (dd/mm/yyyy).
    Validate that the date selected by user is included in hash. If not, display error message.
    When the user types the date and it is valid, the correct prices is already displayed ("Valor da Cota")
    The icon on the left side should reflect the trade type ("Aplicação, Resgate, Resgate por IR"). 
    The shares amount ("Quantidade de Cotas") and total value ("Valor Total") must be in proper number format, using the comma as the number separator.
    If the user types the shares amount, the total value is automatically calculated (shares amount * price). If the user type the total value, the shares amount is automatically calculated (total value / price). The number should be recalculated as each new char is typed, to be responsive to user.
    When the user clicks on the Add New Trade button ("Adicionar Nova Transação"), a line blank row  is added, but the previous rows should remain editable.
    When the user clicks on the bin icon, the row is removed.
    When the user clicks on the Submit button ("Salvar Movimentações"), the trades are persisted to database.
    When the user clicks on the Cancel link, the trades should reset back to the current state in database (remove any changes that were not saved).
    The header should show the most current date in hash, total shares, corresponding price for this date and total value, respectively. These values should be updated in real-time, as the user changes the inputs below.

    Bonus:
    Validate whether the partial total values are correct. For example, if the user adds a trade where he buys 1.000 shares and then adds a trade where he sells 2.000 shares, it will create a negative total, which is impossible.
    The validation should happen row by row and when a negative total amount is caught, all the previous lines are marked as potential errors (see PSD).
    The user must change any previous row that makes the total positive again. Only then, will the error message disappear.
    The other field validations remain valid.
