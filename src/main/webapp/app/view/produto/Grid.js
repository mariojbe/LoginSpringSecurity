Ext.define('ExtMVC.view.produto.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.produtogrid',
    requires: ['Ext.toolbar.Paging'],
    iconCls: 'icon-grid',
    title: 'Produtos',
    store: 'Produtos',
    columns: [{
            header: 'ID',
            width: 40,
            flex: 1,
            dataIndex: 'id'
        },
        {
            header: "NAME",
            width: 170,
            flex: 1,
            dataIndex: 'name'
        }, {
            header: "PRICE",
            width: 160,
            flex: 1,
            dataIndex: 'price'
        }],
    initComponent: function () {

        this.dockedItems = [{
                xtype: 'toolbar',
                items: [{
                        iconCls: 'icon-save',
                        itemId: 'add',
                        text: 'Adicionar',
                        action: 'add'
                    }, {
                        iconCls: 'icon-delete',
                        text: 'Excluir',
                        action: 'delete'
                    }]
            },
            {
                xtype: 'pagingtoolbar',
                dock: 'top',
                store: 'Produtos',
                displayInfo: true,
                displayMsg: 'Mostrando Produtos {0} - {1} de {2}',
                emptyMsg: "Nenhum produto encontrado."
            }];

        this.callParent(arguments);
    },
    listeners: {
        afterlayout: function (grid) {
            if ((this.store.getCount() == 0)) {
                setTimeout(function () {
                    grid.el.unmask();
                }, 100);
                grid.el.mask('Carregando...');
                this.store.load({
                    callback: function () {
                        grid.el.unmask();
                    }
                });
            }
        }
    }

});
