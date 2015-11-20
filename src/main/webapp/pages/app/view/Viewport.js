/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',
    requires: [
        'ExtMVC.view.produto.Grid',
        'ExtMVC.view.produto.Formulario'
    ],
    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            items: [
                {
                    xtype: 'produtogrid'
                }
            ]
        });

        me.callParent(arguments);
    }
});