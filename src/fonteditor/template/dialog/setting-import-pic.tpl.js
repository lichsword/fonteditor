define(function () {return '<div id="import-pic-dialog">\r\n    <div class="form-group">\r\n        <div class="input-group btn-right">\r\n            <div class="import-pic-url">\r\n                <div class="input-group input-group-sm">\r\n                    <span class="input-group-addon">图片URL</span>\r\n                    <input id="import-pic-url-text" value="" class="form-control">\r\n                </div>\r\n            </div>\r\n            <button type="button" data-action="import-url" class="btn btn-flat btn-new btn-sm" title="指定图片URL加载图片">从URL导入图片</button>&nbsp;\r\n            <button type="button" data-action="fitwindow" class="btn btn-flat btn-new btn-sm">适应窗口</button>&nbsp;\r\n            <button type="button" data-action="fitwindow-left" class="btn btn-flat btn-new btn-sm">查看原图</button>&nbsp;\r\n            <button type="button" data-action="fitwindow-right" class="btn btn-flat btn-new btn-sm">查看轮廓</button>\r\n        </div>\r\n        <button data-action="openfile" type="button" class="btn btn-flat btn-new btn-sm">选择图片</button>\r\n        <span>请选择字形图片，支持jpg、gif、png、bmp、svg。</span>\r\n        <form id="import-pic-form" style="width:0px;height:0px;overflow:hidden;"><input id="import-pic-file" type="file"></form>\r\n    </div>\r\n    <div class="preview-panel"><div class="canvas-left"><canvas id="import-pic-canvas-origin"></canvas></div><div class="canvas-right"><canvas id="import-pic-canvas-fit"></canvas></div></div>\r\n    <div class="form-inline">\r\n        <button type="button" data-filter="restore" class="btn btn-flat btn-sm btn-right">恢复</button>\r\n        <span class="form-title">预处理：</span>\r\n        <div class="form-group">\r\n            <div class="input-group input-group-sm">\r\n                <span class="input-group-addon">反转</span>\r\n                <span class="form-control"><input data-filter="reverse" type="checkbox"></span>\r\n            </div>\r\n        </div>\r\n        <div class="form-group">\r\n            <div class="input-group input-group-sm">\r\n                <span class="input-group-addon">高斯模糊</span>\r\n                <span class="form-control"><input data-filter="gaussBlur" type="range" min="0" max="20" value="0"\r\n                step="1"></span>\r\n            </div>\r\n        </div>\r\n        <div class="form-group">\r\n            <div class="input-group input-group-sm">\r\n                <span class="input-group-addon">对比度</span>\r\n                <span class="form-control"><input data-filter="contrast" type="range" min="-50" max="50" value="0" step="1"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="form-inline">\r\n        <button type="button" data-filter="restore-binarize" class="btn btn-flat btn-sm btn-right">恢复</button>\r\n        <span class="form-title">轮　廓：</span>\r\n        <div class="form-group">\r\n            <div class="input-group input-group-sm">\r\n                <span class="input-group-addon">二值化阈值</span>\r\n                <span class="form-control"><input data-filter="threshold" type="range" min="0" max="255" value="200" step="1"></span>\r\n            </div>\r\n            <div class="input-group input-group-sm">\r\n                <select id="import-pic-threshold-pre" class="form-control">\r\n                    <option value="">预设</option>\r\n                    <option value="mean">均值</option>\r\n                    <option value="minimum">谷底最小值</option>\r\n                    <option value="intermodes">双峰平均</option>\r\n                    <option value="ostu">大津法</option>\r\n                    <option value="isoData">ISODATA法</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <div class="form-group">\r\n            <span class="input-group">\r\n                <button type="button" data-filter="open" class="btn btn-sm btn-flat btn-new">消除杂点</button>&nbsp;\r\n                <button type="button" data-filter="close" class="btn btn-sm btn-flat btn-new">消除孔洞</button>&nbsp;\r\n                <button type="button" data-filter="dilate" class="btn btn-sm btn-flat btn-new">膨胀</button>&nbsp;\r\n                <button type="button" data-filter="erode" class="btn btn-sm btn-flat btn-new">腐蚀</button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n';});