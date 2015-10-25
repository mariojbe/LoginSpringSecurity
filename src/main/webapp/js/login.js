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
                fieldLabel: 'Usuário',
                name: 'j_username',
                id: 'nome',
                allowBlank: false,
                /* Definine o foco no primeiro campo do formulário */
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
                inputType: 'checkbox'
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
                        //url: 'j_spring_security_check',
                        waitMsg: 'Autenticando...',
                        method: 'POST',
                        success: function (form, action, url) {
                            window.location.href = '/LoginSpringSecurity/pages/admin.jsp';
                            //console.log(action.response.responseText);
                            //window.location.href = 'url';
                            /*
                             Ext.Msg.alert('Status', 'Login Successful!', function (btn, text) {
                             if (btn == 'ok') {
                             window.location = '/LoginSpringSecurity/pages/main.jsp';
                             }
                             });
                             */
                        },
                        failure: function (form, action) {
                            Ext.Msg.show({
                                title: 'Error!',
                                msg: 'Usuário ou Senha Inválidos',
                                icon: Ext.Msg.ERROR,
                                buttons: Ext.Msg.OK
                            });
                            login.getForm().reset();
                        }
                    });
                }
            }
        ]
    });
    login.render('login');
});