import template from './tpl/index';

import root, {module} from './app/components/application-root/application.root';

import leftMenu from './app/components/left-menu/left.menu';

angular.module('browser', [template, module])
    .component('applicationRoot', root)
    .component('leftMenu', leftMenu)
;