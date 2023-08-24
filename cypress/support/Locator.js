const locators = {

    LOGIN:{
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN:'.btn'
    },
    MENU:{
        SETTINGS: '[data-test="menu-settings"]',
        CONTAS: '[data-test="menu-settings"]',
        RESET_ACCOUNT:'[href="/reset"]',
        SAIR:'[href="/logout"]'
    },
    CONTAS:{
        NOME:'[data-test="nome"]',
        BTN_SALVAR: '[.btn]',
        BTN_ALTERAR_XP: "//table//td[contains(., 'Conta de teste')]/..//i[@class='far fa-edit']"
    }

}

export default locators;