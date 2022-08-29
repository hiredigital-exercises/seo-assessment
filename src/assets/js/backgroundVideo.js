'use strict';
var _extends =
  Object.assign ||
  function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
var _typeof =
  typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
    ? function (obj) {
        return typeof obj;
      }
    : function (obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj;
      };
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
(function (root, factory) {
  var pluginName = 'BackgroundVideo';
  if (typeof define === 'function' && define.amd) {
    define([], factory(pluginName));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory(pluginName);
  } else {
    root[pluginName] = factory(pluginName);
  }
})(window || module || {}, function (pluginName) {
  var defaults = {
    parallax: { effect: 1.5 },
    pauseVideoOnViewLoss: false,
    preventContextMenu: false,
    minimumVideoWidth: 400,
    autoplayFallback: '',
    onBeforeReady: function onBeforeReady() {},
    onReady: function onReady() {},
  };
  var addClass = function addClass(el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  };
  var BackgroundVideo = (function () {
    function BackgroundVideo(element, options) {
      _classCallCheck(this, BackgroundVideo);
      this.element = document.querySelectorAll(element);
      this.options = _extends({}, defaults, options);
      this.options.browserPrexix = this.detectBrowser();
      this.shimRequestAnimationFrame();
      this.options.has3d = this.detect3d();
      this.setWindowDimensions();
      for (var i = 0; i < this.element.length; i++) {
        this.init(this.element[i], i);
      }
    }
    _createClass(BackgroundVideo, [
      {
        key: 'init',
        value: function init(element, iteration) {
          this.el = element;
          this.playEvent = this.videoReadyCallback.bind(this);
          this.setVideoWrap(iteration);
          this.setVideoProperties();
          this.insertVideos();
          if (this.options && this.options.onBeforeReady()) this.options.onBeforeReady();
          if (this.el.readyState > 3) {
            this.videoReadyCallback();
          } else {
            this.el.addEventListener('canplaythrough', this.playEvent, false);
            this.el.addEventListener('canplay', this.playEvent, false);
          }
          if (this.options.preventContextMenu) {
            this.el.addEventListener('contextmenu', function () {
              return false;
            });
          }
        },
      },
      {
        key: 'videoReadyCallback',
        value: function videoReadyCallback() {
          this.el.removeEventListener('canplaythrough', this.playEvent, false);
          this.el.removeEventListener('canplay', this.playEvent, false);
          this.options.originalVideoW = this.el.videoWidth;
          this.options.originalVideoH = this.el.videoHeight;
          this.bindEvents();
          this.requestTick();
          if (this.options && this.options.onReady()) this.options.onReady();
        },
      },
      {
        key: 'bindEvents',
        value: function bindEvents() {
          this.ticking = false;
          if (this.options.parallax) {
            window.addEventListener('scroll', this.requestTick.bind(this));
          }
          window.addEventListener('resize', this.requestTick.bind(this));
          window.addEventListener('resize', this.setWindowDimensions.bind(this));
        },
      },
      {
        key: 'setWindowDimensions',
        value: function setWindowDimensions() {
          this.windowWidth = window.innerWidth;
          this.windowHeight = window.innerHeight;
        },
      },
      {
        key: 'requestTick',
        value: function requestTick() {
          if (!this.ticking) {
            this.ticking = true;
            window.requestAnimationFrame(this.positionObject.bind(this));
          }
        },
      },
      {
        key: 'positionObject',
        value: function positionObject() {
          var scrollPos = window.pageYOffset;
          var _scaleObject = this.scaleObject(),
            xPos = _scaleObject.xPos,
            yPos = _scaleObject.yPos;
          if (this.options.parallax) {
            if (scrollPos >= 0) {
              yPos = this.calculateYPos(yPos, scrollPos);
            } else {
              yPos = this.calculateYPos(yPos, 0);
            }
          } else {
            yPos = -yPos;
          }
          var transformStyle = this.options.has3d
            ? 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)'
            : 'translate(' + xPos + 'px, ' + yPos + 'px)';
          this.el.style['' + this.options.browserPrexix] = transformStyle;
          this.el.style.transform = transformStyle;
          this.ticking = false;
        },
      },
      {
        key: 'scaleObject',
        value: function scaleObject() {
          var heightScale = this.windowWidth / this.options.originalVideoW;
          var widthScale = this.windowHeight / this.options.originalVideoH;
          var scaleFactor = void 0;
          this.options.bvVideoWrap.style.width = this.windowWidth + 'px';
          this.options.bvVideoWrap.style.height = this.windowHeight + 'px';
          scaleFactor = heightScale > widthScale ? heightScale : widthScale;
          if (scaleFactor * this.options.originalVideoW < this.options.minimumVideoWidth) {
            scaleFactor = this.options.minimumVideoWidth / this.options.originalVideoW;
          }
          var videoWidth = scaleFactor * this.options.originalVideoW;
          var videoHeight = scaleFactor * this.options.originalVideoH;
          this.el.style.width = videoWidth + 'px';
          this.el.style.height = videoHeight + 'px';
          return {
            xPos: -parseInt((videoWidth - this.windowWidth) / 2),
            yPos: parseInt(videoHeight - this.windowHeight) / 2,
          };
        },
      },
      {
        key: 'calculateYPos',
        value: function calculateYPos(yPos, scrollPos) {
          var videoPosition = parseInt(this.options.bvVideoWrap.offsetTop);
          var videoOffset = videoPosition - scrollPos;
          yPos = -(videoOffset / this.options.parallax.effect + yPos);
          return yPos;
        },
      },
      {
        key: 'setVideoWrap',
        value: function setVideoWrap(iteration) {
          var wrapper = document.createElement('div');
          this.options.bvVideoWrapClass = this.el.className + '-wrap-' + iteration;
          addClass(wrapper, 'bv-video-wrap');
          addClass(wrapper, this.options.bvVideoWrapClass);
          wrapper.style.position = 'relative';
          wrapper.style.overflow = 'hidden';
          wrapper.style.zIndex = '10';
          this.el.parentNode.insertBefore(wrapper, this.el);
          wrapper.appendChild(this.el);
          this.options.bvVideoWrap = document.querySelector('.' + this.options.bvVideoWrapClass);
        },
      },
      {
        key: 'setVideoProperties',
        value: function setVideoProperties() {
          this.el.setAttribute('preload', 'metadata');
          this.el.setAttribute('loop', 'true');
          this.el.setAttribute('autoplay', 'true');
          this.el.style.position = 'absolute';
          this.el.style.zIndex = '1';
          var poster = this.options.autoplayFallback;
          if (poster) {
            this.el.setAttribute('poster', poster);
          }
        },
      },
      {
        key: 'insertVideos',
        value: function insertVideos() {
          for (var i = 0; i < this.options.src.length; i++) {
            var videoTypeArr = this.options.src[i].split('.');
            var videoType = videoTypeArr[videoTypeArr.length - 1];
            this.addSourceToVideo(this.options.src[i], 'video/' + videoType);
          }
        },
      },
      {
        key: 'addSourceToVideo',
        value: function addSourceToVideo(src, type) {
          var source = document.createElement('source');
          source.src = src;
          source.type = type;
          this.el.appendChild(source);
        },
      },
      {
        key: 'detectBrowser',
        value: function detectBrowser() {
          var val = navigator.userAgent.toLowerCase();
          var browserPrexix = void 0;
          if (val.indexOf('chrome') > -1 || val.indexOf('safari') > -1) {
            browserPrexix = 'webkitTransform';
          } else if (val.indexOf('firefox') > -1) {
            browserPrexix = 'MozTransform';
          } else if (val.indexOf('MSIE') !== -1 || val.indexOf('Trident/') > 0) {
            browserPrexix = 'msTransform';
          } else if (val.indexOf('Opera') > -1) {
            browserPrexix = 'OTransform';
          }
          return browserPrexix;
        },
      },
      {
        key: 'shimRequestAnimationFrame',
        value: function shimRequestAnimationFrame() {
          var lastTime = 0;
          var vendors = ['ms', 'moz', 'webkit', 'o'];
          for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame =
              window[vendors[x] + 'CancelAnimationFrame'] ||
              window[vendors[x] + 'CancelRequestAnimationFrame'];
          }
          if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function (callback, element) {
              var currTime = new Date().getTime();
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
              }, timeToCall);
              lastTime = currTime + timeToCall;
              return id;
            };
          if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function (id) {
              clearTimeout(id);
            };
        },
      },
      {
        key: 'detect3d',
        value: function detect3d() {
          var el = document.createElement('p'),
            t,
            has3d,
            transforms = {
              WebkitTransform: '-webkit-transform',
              OTransform: '-o-transform',
              MSTransform: '-ms-transform',
              MozTransform: '-moz-transform',
              transform: 'transform',
            };
          document.body.insertBefore(el, document.body.lastChild);
          for (t in transforms) {
            if (el.style[t] !== undefined) {
              el.style[t] = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)';
              has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
          }
          el.parentNode.removeChild(el);
          if (has3d !== undefined) {
            return has3d !== 'none';
          } else {
            return false;
          }
        },
      },
    ]);
    return BackgroundVideo;
  })();
  return BackgroundVideo;
});
