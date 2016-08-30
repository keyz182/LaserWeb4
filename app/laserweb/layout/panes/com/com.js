;(function(lw) {

    /**
    * LaserWeb com module.
    *
    * Description...
    */
    lw.add_module('layout.panes.com', {

        // Autoload the module ?
        autoload: true,

        // Module version
        version: '0.0.1',

        // Module title
        title: 'Communication',

        // Module icon
        icon: 'plug',

        // Extends
        extends: ['layout.pane'],

        // Module initialization
        // Called once when all modules are setup.
        init: function() {
            // Add the dock entry
            this.add_dock();

            // Set dock active
            this.set_dock_active(true);

            // Notify module init is done.
            this.pub('module.init.done');
        }

    });

})(laserweb);
