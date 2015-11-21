Ext.define('ExtMVC.controller.Produtos', {
    extend: 'Ext.app.Controller',
    stores: ['Produtos'],
    models: ['Produto'],
    views: ['produto.Formulario', 'produto.Grid'],
    refs: [{
            ref: 'produtoPanel',
            selector: 'panel'
        }, {
            ref: 'produtoGrid',
            selector: 'grid'
        }
    ],
    init: function () {
        this.control({
            'produtogrid dataview': {
                itemdblclick: this.editarProduto
            },
            'produtogrid button[action=add]': {
                click: this.editarProduto
            },
            'produtogrid button[action=delete]': {
                click: this.deleteProduto
            },
            'produtoform button[action=save]': {
                click: this.updateProduto
            }
        });
    },
    editarProduto: function (grid, record) {
        var edit = Ext.create('ExtMVC.view.produto.Formulario').show();

        if (record) {
            edit.down('form').loadRecord(record);
        }
    },
    updateProduto: function (button) {
        var win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();

        var novo = false;

        if (values.id > 0) {
            record.set(values);
        } else {
            record = Ext.create('ExtMVC.model.Produto');
            record.set(values);
            this.getProdutosStore().add(record);
            novo = true;
        }

        win.close();
        this.getProdutosStore().sync();

        if (novo) { //faz reload para atualziar
            this.getProdutosStore().load();
        }
    },
    deleteProduto: function (button) {
        var grid = this.getProdutoGrid(),
                record = grid.getSelectionModel().getSelection(),
                store = this.getProdutosStore();

        if (record.length === 0) {
            //Ext.Msg.alert('Erro', 'Nenhuma linha selecionada');
            Ext.Msg.show({
                title: 'Erro',
                msg: 'Nenhuma linha selecionada!',
                icon: Ext.MessageBox.ERROR,
                scope: this,
                width: 100
            });
        } else {
            Ext.Msg.show({
                title: 'ConfirmaÃ§Ã£o',
                msg: 'Tem certeza que deseja apagar o(s) registro(s) selecionado(s)?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.MessageBox.WARNING,
                scope: this,
                width: 450,
                fn: function (btn, ev) {
                    var grid = this.getProdutoGrid(),
                    record = grid.getSelectionModel().getSelection(),
                    store = this.getProdutosStore();
            
                    if (btn == 'yes') {
                        store.remove(record);
                        this.getProdutosStore().sync();
                        this.getProdutosStore().load();
                    }
                }
            });
        }
    }

});
