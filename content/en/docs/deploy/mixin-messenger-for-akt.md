---
title: "Mixin Messenger for AKT"
key: "mixin-messenger-for-akt"
description: ""
lead: ""
date: Thu Dec 29 2022 03:03:46 GMT-0800 (Pacific Standard Time)
lastmod: Thu Dec 29 2022 03:03:46 GMT-0800 (Pacific Standard Time)
draft: false
images: []
weight: 1
toc: true

menu:
    docs:
        parent: "tokens-and-wallets"

---
Mixin Messenger for AKT
=======================

The Mixin Messenger app provides an ultra user friendly wallet, with support for almost all popular cryptocurrencies. The app is available on both Google Play Store and App Store.

Mixin Messenger’s name comes from the app not only providing a cryptocurrency wallet but also a secure messaging platform.

We will review the steps to get the Mixin Messenger up and running using an iPhone example. Once the app is active, the process to obtain AKT easily from your mobile device is covered.

iPhone Mixin Messenger
----------------------

In the steps to come we will take the journey from App Store download through initial app set up.

### App Install

*   As with any iPhone app install, begin by opening the App Store
*   Search for “mixin messenger” and press the Download icon
*   When the app install completes, press the OPEN icon to launch the app

![](/images/.gitbook/mixinInstallAndLaunch.png)

*   On initial launch of the app you will be prompted to enter your mobile phone number
*   The number entered will be used for authorization codes sent by the app for added security
*   A prompt will allow confirmation of the phone number after entry
*   Input the confirmation code received via text to this phone number when requested

![](/images/.gitbook/phoneNumberEntry%20(1).png)

*   Make a selection to allow or don’t allow Mixin Messenger notifications
*   The choice regarding notifications will not change the experience when using the app

![](/images/.gitbook/notificationConfirm.png)

*   The Mixin Messenger home screen following initial setup

![](/images/.gitbook/mixinInitialScreen.png)

### Transfer of ATOM into Wallet

In this series of steps we will transfer ATOM into Mixin Messenger with the eventual goal to swap ATOM into AKT (Akash token).

*   Press the Wallet button

![](/images/.gitbook/accessWallet.png)

*   When the wallet is first used you will be prompted to create a PIN
*   Note and store the PIN as it will be necessary in the future for wallet related activities

![](/images/.gitbook/createPIN.png)

*   Following successful PIN entry, we are brought into our wallet
*   If this is your first time logging in your balance will be $0.00
*   Press the Search button to ready for our next step

![](/images/.gitbook/initialWalletView%20(1).png)

*   Enter a search of “atom” and select “ATOM/Cosmos” from the search results

![](/images/.gitbook/searchATOM.png)

*   Press the Receive button
*   Our goal in this step is to receive ATOM from another account that holds some (I.e. an external wallet or exchange account you hold with ATOM)

![](/images/.gitbook/receiveATOM%20(1)%20(1).png)

*   You will see a popup suggesting a minimum amount be used in your initial transaction for safety
*   Select “Got it” to proceed

![](/images/.gitbook/atomDeposit1%20(1).png)

*   From the Deposit screen select “Copy” to copy your address to clipboard
*   We will use the copied Cosmos address to transfer funds from your pre-existing, external wallet or exchange
*   Following the copy of the Cosmos address, visit the external wallet that has ATOM funds and send a minimal amount (I.e. 1 ATOM for initial deposit) to the copied Mixin Messenger address

![](/images/.gitbook/atomDeposit2%20(1).png)

*   You should now see the ATOM in your Mixin Messenger wallet

![](/images/.gitbook/atomDepositComplete%20(1).png)

### Mixin Messenger Bot - 4Swap

In the following steps we will install a bot named 4Swap to change the ATOM into AKT. The bot only acts when we request a swap.

*   We begin the bot install by pressing the Contacts button from the Mixin Messenger home screen

![](/images/.gitbook/contactsInitial.png)

*   Select the “Add Contact” option

![](/images/.gitbook/contactsAdd.png)

*   Bots are added within the app via Mixin IDs
*   The ID for the 4SWAP bot is:
    *    7000103537
    *    Enter this ID in the contacts search box and press the Search button
*   Press the bot icon to ready for the next step

![](/images/.gitbook/search4Swap%20(1).png)

*   Select the Swap button located on the bottom of the screen

![](/images/.gitbook/navigateToSwap.png)

*   We want to allow 4Swap to access and manage our Mixin Messenger wallet. Select the Connect Wallet option

![](/images/.gitbook/walletButton.png)

*   We are presented with an authorization screen. Choose the Authorize button to allow 4Swap access to our wallet.

![](/images/.gitbook/authorizeWallet.png)

*   Follow these steps to swap ATOM for AKT
    1.  Select the drop down arrow next to the first currency and search/select ATOM
    2.  Select the drop down arrow next to the second currency and search/select AKT
    3.  Following currency choices a number pad is displayed to enter the amount of ATOM to swap
*   Select the Swap button to complete the transaction

![](/images/.gitbook/specifySwapDetails%20(1).png)

*   Exit the 4Swap bot

![](/images/.gitbook/fourSwapExitScreen.png)

*   You will now be brought back to the Mixin wallet home screen where you should see the new balances.

![](/images/.gitbook/aktBalanceUpdated.png)

*   When we need to re-enter the 4Swap for future needs, we can select the bots icon from the Mixin Messenger home screen
*   Select the 4Swap icon from the list

![](/images/.gitbook/reenterBot%20(1).png)