angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("application-root/application.root.tpl.html","<div id=\"okno\">\n    <!-- todo componeneta -->\n    <div id=\"left_menu\">\n        <ul>\n            <li ng-show=\"$ctrl.dir\" ng-click=\"$ctrl.loadDirLeft($event);\" data-dirName=\"{{$ctrl.dir.location}}\" style=\"font-weight: bold; font-size: 18px;\">Nadradeny adresar</li>\n            <li ng-repeat=\"dir in $ctrl.dirs_data\" ng-click=\"$ctrl.loadDirLeft($event)\" data-dirName=\"{{dir.location}}/{{dir.name}}\">{{dir.name}}</li>\n        </ul>\n    </div>\n\n    <left-menu></left-menu>\n\n    <div id=\"obsah\">\n        <div id=\"header2\">\n            <h2>Files / Images</h2>\n        </div>\n\n        <div style=\"margin-left:20px; margin-right: 30px\">\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-show=\"$ctrl.dir\" ng-click=\"$ctrl.loadDir($event)\" data-dirName=\"{{$ctrl.dir.location}}\">\n                <img class=\"img_icon\" src=\"img/adresar.png\">\n                <div class=\"nazov_suboru\">Nadradeny adresar</div>\n            </div>\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-repeat=\"dir in $ctrl.dirs_data\" ng-click=\"$ctrl.loadDir($event)\" data-dirName=\"{{dir.location}}/{{dir.name}}\">\n                <img class=\"img_icon\" src=\"img/priecinok.png\">\n                <div class=\"nazov_suboru\">{{dir.name}}</div>\n\n            </div>\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'image/jpeg\' }\">\n                <img class=\"img_picture\" src=\"{{file.thumb_link}}\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>JPG</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'image/png\' }\">\n                <img class=\"img_icon\" src=\"{{file.thumb_link}}\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>PNG</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'text/plain\' }\">\n                <img class=\"img_icon\" src=\"img/txt.png\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>TXT</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'application/pdf\' }\">\n                <img class=\"img_icon\" src=\"img/pdf.png\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>PDF</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n            <!-- todo componeneta -->\n            <div class=\"icon\" ng-repeat=\"file in $ctrl.files_data | filter:{ type: \'!image/jpeg\'} | filter:{ type: \'!application/pdf\'} | filter:{ type: \'!text/plain\'} | filter:{ type: \'!image/png\'} \">\n                <img class=\"img_icon\" src=\"img/plain.png\">\n                <div class=\"nazov_suboru\">{{file.name}}</div>\n                <div class=\"typ_suboru\">\n                    <p>any</p>\n                </div>\n                <div class=\"velkost_suboru\">\n                    <p>{{file.size}}</p>\n                </div>\n            </div>\n\n\n        </div>\n\n    </div>\n\n</div>");}]);