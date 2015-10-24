Ext.onReady(function () {
    Ext.QuickTips.init();
    var login = new Ext.FormPanel({
        labelWidth: 80,
        url: 'j_spring_security_check',
        frame: true,
        title: 'Login',
        defaultType: 'textfield',
        width: 300,
        height: 150,
        monitorValid: true,
        items: [{
                fieldLabel: 'Usu�rio',
                name: 'j_username',
                id: 'nome',
                allowBlank: false,
                /* Definine o foco no primeiro campo do formul�rio */
                listeners: {
                    afterrender: function (field) {
                        field.focus();
                    }
                }
            }, {
                fieldLabel: 'Senha',
                name: 'j_password',
                inputType: 'password',
                allowBlank: false
            },
            {
                xtype: 'checkbox',
                boxLabel: 'Lembrar-Me?',
                name: '_spring_security_remember_me',
                checked: false,
                inputType:'checkbox'
            }
        ],
        buttons: [{
                text: 'Limpar',
                border: true,
                handler: function () {
                    login.getForm().reset();
                    Ext.get("nome").focus();
                }
            },
            {
                text: 'Entrar',
                formBind: true,
                border: true,
                handler: function () {
                    login.getForm().submit({
                        method: 'POST',
                        success: function () {
                            Ext.Msg.alert('Status', 'A autentica��o bem sucedida!', function (btn, text) {

                                if (btn == 'ok') {
                                    window.location = 'pages/main.jsp';
                                }
                            });

                        },
                        failure: function (form, action) {
                            Ext.Msg.show({
                                title: 'Error!',
                                msg: 'Usu�rio ou Senha Inv�lidos',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            login.getForm().reset();
                        },
                    });
                }
            }
        ]
    });

    login.render('login');

});