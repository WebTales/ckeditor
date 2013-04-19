CKEDITOR.plugins.add( 'rubedolink', {
    icons: 'rubedolink',
    init: function( editor ) {
        editor.addCommand( 'insertRubedolink', {
            exec: function( editor ) {
            		editor.popup("/backoffice/link-finder?ckinstance="+editor.name,"300px","300px");
            }
        });
        editor.ui.addButton( 'Rubedolink', {
            label: 'Lien interne',
            command: 'insertRubedolink',
            toolbar: 'insert'
        });
    }
});