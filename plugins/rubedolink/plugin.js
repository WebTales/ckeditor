CKEDITOR.plugins.add( 'rubedolink', {
    icons: 'rubedolink',
    init: function( editor ) {
        editor.addCommand( 'insertRubedolink', {
            exec: function( editor ) {
            		editor.popup("linkfinder",300,300);
            }
        });
        editor.ui.addButton( 'Rubedolink', {
            label: 'Lien interne',
            command: 'insertRubedolink',
            toolbar: 'insert'
        });
    }
});