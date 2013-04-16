CKEDITOR.plugins.add( 'rubedolink', {
    icons: 'rubedolink',
    init: function( editor ) {
        editor.addCommand( 'insertRubedolink', {
            exec: function( editor ) {
            		editor.popup("link-finder?ckinstance="+editor.name,200,200);
            }
        });
        editor.ui.addButton( 'Rubedolink', {
            label: 'Lien interne',
            command: 'insertRubedolink',
            toolbar: 'insert'
        });
    }
});