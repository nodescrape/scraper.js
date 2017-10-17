var IntroTourDialog=function(t,e,i,o,n){"use strict";function s(t,e,i,o,n){var s=0;switch(t){case"top":case"left":s=e?i:i+o;break;case"right":case"bottom":s=e?i+o-n:i-n}return s}function r(t,e,i,o,n){var s=0;switch(t){case"top":case"left":s=e;break;case"right":case"bottom":s=e+i-n;break;case"center":default:s=o-Math.round(n/2)}return s}var a=function(t){o.call(this,t,{closeButtonEnabled:!1,maximizeButtonEnabled:!1,dynamicHeight:!0,hideHeader:!0,hideButtons:!0,confirmOnClose:!1,buttonsInsideContent:!0,isModal:!1}),a.prototype._arrow=null,a.prototype._options=null};return a.prototype=Object.create(o.prototype),a.prototype.constructor=a,a.prototype.createButton=function(e,i,o,n){if(e&&i){var s=i.style||"",r=i.sizeStyle||"col-6",a=t("<div></div>").addClass(r).append(t("<button></button>").text(i.text).data("index",o).addClass("btn-base radius-sm "+s).off().on("click",n));e.append(a)}},a.prototype.setup=function(s,r){if(r&&r.options&&r.flow){var a=this;a._options=t.extend({title:i.translateString("Tour Title here")},r.options);var l=a.$element.find(".buttons").empty();a.$element.removeClass().addClass("dialog responsive intro-tour-dialog"),a._options.class&&a.$element.addClass(a._options.class);for(var h=function(t){t&&("string"==typeof t?r.flow.executeAction(t):t.event&&r.flow.executeAction(t.event,t.params))},p=0;p<a._options.buttons.length;p++){var d=function(e){e.preventDefault(),r.flow.closeCurrentStep();var i=t(e.target).data("index");if(t.isNumeric(i)&&i>=0&&i<a._options.buttons.length){var o=a._options.buttons[i];if(o.action&&Array.isArray(o.action))for(var n=0;n<o.action.length;n++)h(o.action[n]);else h(o.action)}};this.createButton(l,a._options.buttons[p],p,d)}var c=function(t){t.preventDefault(),r.flow.closeCurrentStep(),a._options.exitAction&&r.flow.executeAction(a._options.exitAction)};s.find("#btnClose").off().on("click",c),this.setText(this._options.title,this.$element.find("#mainTitle"));var g="function"==typeof this._options.contentText1?this._options.contentText1():this._options.contentText1;this.setText(g,this.$element.find("#contentText1"));var u="function"==typeof this._options.contentText2?this._options.contentText2():this._options.contentText2;this.setText(u,this.$element.find("#contentText2")),o.prototype.setup.apply(this,arguments),this.setSize(this._options.position),this.setPosition(this._options.position),this._options.position&&this._options.position.arrowPosition?(this._arrow=this._arrow||new e({$parentEl:this.$element,arrowClass:"arrow-box a-white"}),this._arrow.show(this._options.position.orientation,this._options.position.arrowPosition)):this._arrow&&this._arrow.hide(),this.$overlayDialogEl=t("#dialogOverlay"),this.$overlayDialogEl&&this.$overlayDialogEl.length>0&&this.$overlayDialogEl.detach(),this.subscribeToWindowResize()}n.get(n.INTRO_TOURS_LOADED).publish()},a.prototype.setText=function(t,e){t&&e?e.text(t).show():e.hide()},a.prototype.setPosition=function(e){e.dialogPosition=null,e&&e.targetId&&(e.$targetEl=t(e.targetId),e.targetDimensions=this.getDimensions(e.$targetEl),e.dialogPosition=this.computeDialogPosition(this.$element,e)),e.dialogPosition&&this.$element.offset(e.dialogPosition)},a.prototype.setSize=function(e){if(e){e.$targetEl=t(e.targetId);var i,o=this.getDimensions(e.$targetEl);e.fillWidth?(i=t(e.fillWidth),i&&i.length>0?this.$element.width(i.width()):this.$element.width(o.width)):this.$element.css("width",""),e.fillHeight?(i=t(e.fillHeight),i&&i.length>0?this.$element.height(i.height()):this.$element.height(o.height)):this.$element.css("height","")}},a.prototype.subscribeToWindowResize=function(){var t=this;t.positionAndResizeHandler=function(){t.setSize(t._options.position),t.setPosition(t._options.position)},window&&window.addEventListener("resize",t.positionAndResizeHandler),n.get(n.VAULT_LEFT_MENU_TOGGLE).subscribe(t.positionAndResizeHandler),n.get(n.EMPTY_VAULT_STATE_CHANGE).subscribe(t.positionAndResizeHandler)},a.prototype.unSubscribeToWindowResize=function(){var t=this;window&&(window.removeEventListener&&window.removeEventListener("resize",t.positionAndResizeHandler),t.positionAndResizeHandler=null),n.get(n.VAULT_LEFT_MENU_TOGGLE).unsubscribe(t.positionAndResizeHandler),n.get(n.EMPTY_VAULT_STATE_CHANGE).unsubscribe(t.positionAndResizeHandler)},a.prototype.computeDialogPosition=function(t,e){if(t&&t.length>0&&e&&e.$targetEl.length>0){var i=e.arrowPosition?15:0;e.dialogDimensions=this.getDimensions(t);var o={top:0,left:0},n=e.align||"center";switch(e.orientation){case"top":o.left=r(n,e.targetDimensions.left,e.targetDimensions.width,e.targetDimensions.center.left,e.dialogDimensions.width),o.top=s(e.orientation,e.inside,e.targetDimensions.top,e.targetDimensions.height,e.dialogDimensions.height)+i;break;case"bottom":o.left=r(n,e.targetDimensions.left,e.targetDimensions.width,e.targetDimensions.center.left,e.dialogDimensions.width),o.top=s(e.orientation,e.inside,e.targetDimensions.top,e.targetDimensions.height,e.dialogDimensions.height)-i;break;case"left":o.top=r(n,e.targetDimensions.top,e.targetDimensions.height,e.targetDimensions.center.top,e.dialogDimensions.height),o.left=s(e.orientation,e.inside,e.targetDimensions.left,e.targetDimensions.width,e.dialogDimensions.width)+i;break;case"right":o.top=r(n,e.targetDimensions.top,e.targetDimensions.height,e.targetDimensions.center.top,e.dialogDimensions.height),o.left=s(e.orientation,e.inside,e.targetDimensions.left,e.targetDimensions.width,e.dialogDimensions.width)-i}return e.offset&&(o.top+=e.offset.top,o.left+=e.offset.left),o}return null},a.prototype.getDimensions=function(e){if(e&&e.length>0){var i=t.extend({height:e.height(),width:e.width()},e.offset());return i.center={top:Math.round(i.top+i.height/2),left:Math.round(i.left+i.width/2)},i}return null},a.prototype.close=function(t){t&&(o.prototype.close.apply(this,arguments),this.unSubscribeToWindowResize())},a.prototype.showBlurOverlay=function(){},a.prototype.hideBlurOverlay=function(){},a.prototype.closeOnSuccess=function(){},a.prototype.getZIndex=function(){var t=this.$element.css("z-index");if("auto"===t)return 0;var e=parseInt(t);return e<8?8:e},a}(jQuery,lpArrow,Strings,Dialog,Topics);