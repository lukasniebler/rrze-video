if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(){var t=jQuery.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1||3<t[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(s){function r(t,e){this.options=e,this.$body=s(document.body),this.$element=s(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,s.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}function a(o,n){return this.each(function(){var t=s(this),e=t.data("bs.modal"),i=s.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new r(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}r.VERSION="3.3.7",r.TRANSITION_DURATION=300,r.BACKDROP_TRANSITION_DURATION=150,r.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},r.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},r.prototype.show=function(i){var o=this,t=s.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',s.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){s(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=s.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=s.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(r.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},r.prototype.hide=function(t){t&&t.preventDefault(),t=s.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),s(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),s.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",s.proxy(this.hideModal,this)).emulateTransitionEnd(r.TRANSITION_DURATION):this.hideModal())},r.prototype.enforceFocus=function(){s(document).off("focusin.bs.modal").on("focusin.bs.modal",s.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},r.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",s.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},r.prototype.resize=function(){this.isShown?s(window).on("resize.bs.modal",s.proxy(this.handleUpdate,this)):s(window).off("resize.bs.modal")},r.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},r.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},r.prototype.backdrop=function(t){var e,i=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=s.support.transition&&o;if(this.$backdrop=s(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",s.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;n?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION):t()}else{!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e=function(){i.removeBackdrop(),t&&t()},s.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION):e()):t&&t()}},r.prototype.handleUpdate=function(){this.adjustDialog()},r.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},r.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},r.prototype.checkScrollbar=function(){var t,e=window.innerWidth;e||(e=(t=document.documentElement.getBoundingClientRect()).right-Math.abs(t.left)),this.bodyIsOverflowing=document.body.clientWidth<e,this.scrollbarWidth=this.measureScrollbar()},r.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},r.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},r.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=s.fn.modal;s.fn.modal=a,s.fn.modal.Constructor=r,s.fn.modal.noConflict=function(){return s.fn.modal=t,this},s(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=s(this),i=e.attr("href"),o=s(e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),n=o.data("bs.modal")?"toggle":s.extend({remote:!/#/.test(i)&&i},o.data(),e.data());e.is("a")&&t.preventDefault(),o.one("show.bs.modal",function(t){t.isDefaultPrevented()||o.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),a.call(o,n,this)})}(jQuery),function(o){o.fn.emulateTransitionEnd=function(t){var e=!1,i=this;o(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||o(i).trigger(o.support.transition.end)},t),this},o(function(){o.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}(),o.support.transition&&(o.event.special.bsTransitionEnd={bindType:o.support.transition.end,delegateType:o.support.transition.end,handle:function(t){if(o(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),jQuery(document).ready(function(i){i("body").on("hidden.bs.modal",".modal",function(){i("video").trigger("pause")}),i("[id*=videoModal]").on("hidden.bs.modal",function(t){var e=i(this).find("iframe");e.attr("src",e.attr("src"))}),i("[class^=box-widget]").click(function(){i(window).scrollTop(0)}),i("[class^=rrze-video-container]").click(function(){i(window).scrollTop(0)})});