/**
 * Ext JS Library 4.1.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 
 * @author Mário Jorge
 * 
 * 
 */
Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'ExtMVC',
    controllers: [
        'Produtos'
    ],
    autoCreateViewport: true
});
