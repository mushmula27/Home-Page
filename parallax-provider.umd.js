(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ParallaxProvider = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var ParallaxProvider =
  /*#__PURE__*/
  function () {
    function ParallaxProvider(modules) {
      _classCallCheck(this, ParallaxProvider);

      if (modules && modules.length) {
        this.modules = modules;
        this.init();
      }
    }

    _createClass(ParallaxProvider, [{
      key: "init",
      value: function init() {
        var newModules = [];
        var moduleMap = [];

        for (var i = 0; i < this.modules.length; i++) {
          var module = this.modules[i];
          var numNewModules = newModules.length;
          var previousModule = numNewModules ? newModules[numNewModules - 1] : null;
          var endPrevModule = 0;

          if (previousModule) {
            var prevDuration = typeof previousModule.duration === 'function' ? previousModule.duration() : previousModule.duration;
            endPrevModule = previousModule._absMountPoint + prevDuration;
          }

          var absMountPoint = endPrevModule + module.mountPoint;

          if (module.mountType === 'absolute') {
            absMountPoint = module.mountPoint;
          } else if (Object.prototype.hasOwnProperty.call(module, 'mountAfterId')) {
            if (module.mountAfterId === module.id) {
              throw new Error("Can't mount module relative to itself");
            }

            if (numNewModules === 0) {
              throw new Error("First module can't use mountAfterId");
            }

            if (!moduleMap[module.mountAfterId]) {
              throw new Error("Trying to mount module after id ".concat(module.mountAfterId, " which does not exist. Be aware that you can only mount after a module that is declared before the current module in the modules array"));
            }

            var mountAfter = moduleMap[module.mountAfterId];
            var mountAfterDur = typeof mountAfter.duration === 'function' ? mountAfter.duration() : mountAfter.duration;
            absMountPoint = mountAfter._absMountPoint + mountAfterDur + module.mountPoint;
          }

          module._absMountPoint = absMountPoint;
          newModules.push(module);

          if (moduleMap[module.id]) {
            throw new Error("Module id ".concat(module.id, " is a duplicate. Please give every module a unique ID"));
          }

          if (Object.prototype.hasOwnProperty.call(module, 'id')) {
            moduleMap[module.id] = module;
          }
        }

        this.modules = newModules;
        this.calcMinHeight();
        this.listenToScroll();
      }
    }, {
      key: "calcMinHeight",
      value: function calcMinHeight() {
        var finalEndTime = 0;

        for (var i = 0; i < this.modules.length; i++) {
          var module = this.modules[i];
          var moduleDur = typeof module.duration === 'function' ? module.duration() : module.duration;
          var endTime = module._absMountPoint + moduleDur;
          finalEndTime = endTime > finalEndTime ? endTime : finalEndTime;
        }

        document.body.style.minHeight = "".concat(finalEndTime + window.innerHeight, "px");
      }
    }, {
      key: "listenToScroll",
      value: function listenToScroll() {
        var _this = this;

        window.addEventListener('scroll', function () {
          _this.calcMinHeight();

          var yoff = window.pageYOffset;

          _this.modules.forEach(function (module) {
            var duration = typeof module.duration === 'function' ? module.duration() : module.duration;
            module.controller(yoff - module._absMountPoint, duration);
          });
        });
      }
    }]);

    return ParallaxProvider;
  }();

  return ParallaxProvider;

}));
