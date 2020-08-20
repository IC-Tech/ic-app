/*!
 * ic-app v1.2.1
 * https://github.com/IC-Tech/ic-app
 * Copyright © 2020, Imesh Chamara. All rights reserved.
 * Released under the MIT License
 */
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var XHR = function XHR(url, call) {
  var op = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  op = op || {};
  var xhr = new XMLHttpRequest();
  xhr.open(op.meth || (data && !op.meth ? 'POST' : 'GET'), url + (op.fresh == 0 ? '' : (url.indexOf('?') >= 0 ? '&' : '?') + 't=' + new Date().getTime()));
  Object.keys(op.head || {}).forEach(function (a) {
    return xhr.setRequestHeader(a, op.head[a]);
  });

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status != 0) {
      if (!xhr.response) return call({
        success: false,
        error: {
          code: 3,
          message: 'server did not respond'
        }
      });

      try {
        call(op.raw ? xhr.response : JSON.parse(xhr.response));
      } catch (e) {
        call({
          success: false,
          error: {
            code: 4,
            message: 'response could not parse'
          }
        });
      }
    }
  };

  xhr.onerror = function () {
    return call({
      success: false,
      error: {
        code: 1,
        message: 'network error occurred'
      }
    });
  };

  xhr.ontimeout = function () {
    return call({
      success: false,
      error: {
        code: 2,
        message: 'request timed out'
      }
    });
  };

  xhr.send(data);
};

var xhr = function xhr(url) {
  var op = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return new Promise(function (_) {
    return XHR(url, _, op, data);
  });
};

var pram = function pram(a) {
  a = a || location.search;
  var b = {},
      d,
      c = /(?:(?:\?|&)?([^=&?#]*)=([^=&?#]*))/g;

  while (d = c.exec(a)) {
    b[d[1]] = decodeURIComponent(d[2]);
  }

  return b;
};

var _n = {
  b: function b(a, _b) {
    if (_b) return a instanceof icApp ? a : new icApp(a);
    return a instanceof icApp ? a.v : a;
  },
  c: function c(a) {
    return a instanceof Array ? a : [a];
  }
};

var icApp = /*#__PURE__*/function () {
  function icApp(v, cr) {
    _classCallCheck(this, icApp);

    this.v = cr ? icApp.ce(v, typeof cr == 'string' || _typeof(cr) == 'object' ? cr : {}) : typeof v == 'string' ? icApp.qs(v) : v;
    return v == null || v == undefined ? v : this;
  }

  _createClass(icApp, [{
    key: "ap",
    value: function ap(v) {
      this.v.appendChild(_n.b(v));
      return this;
    }
  }, {
    key: "chr",
    value: function chr(v) {
      if (v) {
        _n.c(v).forEach(function (a) {
          return _n.b(a, 1).rem();
        });
      } else {
        while (this.ch.length > 0) {
          this.ch[0].remove();
        }
      }

      return this;
    }
  }, {
    key: "cla",
    value: function cla(v) {
      var _this$cl;

      (_this$cl = this.cl).add.apply(_this$cl, _toConsumableArray(_n.c(v)));

      return this;
    }
  }, {
    key: "clr",
    value: function clr(v) {
      var _this$cl2;

      (_this$cl2 = this.cl).remove.apply(_this$cl2, _toConsumableArray(_n.c(v)));

      return this;
    }
  }, {
    key: "clc",
    value: function clc(v) {
      var _this = this;

      return !_n.c(v).some(function (a) {
        return !_this.cl.contains(a);
      });
    }
  }, {
    key: "ga",
    value: function ga(n) {
      return this.v.getAttribute(n);
    }
  }, {
    key: "ra",
    value: function ra(n, v) {
      this.v.removeAttribute(n);
      return this;
    }
  }, {
    key: "sa",
    value: function sa(n, v) {
      this.v.setAttribute(n, v);
      return this;
    }
  }, {
    key: "ae",
    value: function ae(n, f) {
      this.v.addEventListener(n, f);
      return this;
    }
  }, {
    key: "rem",
    value: function rem() {
      this.v.remove();
      return this;
    }
  }, {
    key: "c",
    get: function get() {
      return Array.from(this.v.classList).map(function (e) {
        return new icApp(e);
      });
    }
  }, {
    key: "cl",
    get: function get() {
      return this.v.classList;
    }
  }, {
    key: "ch",
    get: function get() {
      return this.v.children;
    }
  }, {
    key: "chn",
    get: function get() {
      return this.v.childNodes;
    }
  }, {
    key: "st",
    get: function get() {
      return this.v.style;
    }
  }, {
    key: "d",
    get: function get() {
      return this.v.dataset;
    }
  }, {
    key: "stp",
    set: function set(v) {
      this.st.setProperty(v[0], v[1]);
    }
  }, {
    key: "txt",
    get: function get() {
      return this.v.innerText;
    },
    set: function set(v) {
      this.v.innerText = v;
    }
  }, {
    key: "html",
    get: function get() {
      return this.v.innerHTML;
    },
    set: function set(v) {
      this.v.innerHTML = v;
    }
  }, {
    key: "p",
    get: function get() {
      return new icApp(this.v.parentElement);
    }
  }, {
    key: "tag",
    get: function get() {
      return this.v.tagName;
    }
  }, {
    key: "node",
    get: function get() {
      return this.v.nodeName;
    }
  }, {
    key: "val",
    get: function get() {
      return this.v.value;
    },
    set: function set(v) {
      this.v.value = v;
    }
  }, {
    key: "prev",
    get: function get() {
      return new icApp(this.v.previousElementSibling);
    }
  }, {
    key: "prevN",
    get: function get() {
      return new icApp(this.v.previousSibling);
    }
  }, {
    key: "next",
    get: function get() {
      return new icApp(this.v.nextElementSibling);
    }
  }, {
    key: "nextN",
    get: function get() {
      return new icApp(this.v.nextSibling);
    }
  }], [{
    key: "qs",
    value: function qs(v) {
      return this.d.querySelector(v);
    }
  }, {
    key: "qsa",
    value: function qsa(v) {
      return this.d.querySelectorAll(v);
    }
  }, {
    key: "ce",
    value: function ce(v) {
      var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i = 0;
      if ([['#cdata-section', 'createCDATASection'], ['#comment', 'createComment'], ['#document-fragment', 'createDocumentFragment'], ['#text', 'createTextNode']].some(function (a) {
        return a[0] == v ? [i = a[1]] : 0;
      })) return this.d[i](d);else return this.d.createElement(v, d);
    }
  }, {
    key: "cen",
    value: function cen(n, v) {
      return this.d.createElementNS(n, v);
    }
  }, {
    key: "ds",
    value: function ds(a) {
      return new icApp(Object.keys(a).map(function (b) {
        return "[data-".concat(b, "=\"").concat(a[b], "\"]");
      }).join(''));
    }
  }, {
    key: "d",
    get: function get() {
      return document;
    }
  }]);

  return icApp;
}();

var IC_DEV = !!(typeof __IC_DEV__ != 'undefined' && __IC_DEV__ || 0);
var _fn = {
  a: function a(_a) {
    return _a || typeof _a == 'string' || typeof _a == 'number' && _a == 0;
  },
  b: function b(a, _b2) {
    return Object.keys(a).forEach(function (c) {
      return _b2(c);
    });
  },
  c: function c(a) {
    return a instanceof Array ? a : Object.keys(a).map(function (b) {
      return [b, a[b]];
    });
  },
  d: function d(a) {
    return a instanceof Array ? a : [a];
  }
};

var _elm = function _elm(a) {
  if (typeof a.d == 'string') a.d = {
    t: '#text',
    _txt: a.d,
    nodes: 1,
    e: {
      data: a.d
    }
  };
  if (a.cr) a.cr.ap(a.e = new icApp(a.d.t, a.d.t.startsWith('#') ? a.d._txt : {}));

  if (_fn.a(a.d.t) && a.e.node.toUpperCase() != a.d.t.toUpperCase()) {
    a.e.p.v.replaceChild((a.t = new icApp(a.d.t, a.d.t.startsWith('#') ? a.d._txt : {})).v, a.e.v);
    a.e = a.t;
  }

  if (a.d.s) {
    a.t = function (b) {
      return a.d.s[b] != a.e.st[b] ? [a.e.st[b] = a.d.s[b]] : 0;
    };

    _fn.b(a.d.s, a.t);
  }

  if (a.d.at) _fn.c(a.d.at).forEach(function (b) {
    var _a$e;

    return _fn.a(b[1]) ? a.e.ga(b[0]) != b[1].toString() ? (_a$e = a.e).sa.apply(_a$e, _toConsumableArray(b)) : 0 : b[1] == undefined ? a.e.ra(b[0]) : 0;
  });
  if (a.d.d) _fn.c(a.d.d).forEach(function (b) {
    return b[1].toString() != a.e.d[b[0]] ? [a.e.d[b[0]] = b[1].toString()] : 0;
  });

  if (a.d.cl) {
    a.t = [];

    _fn.d(a.d.cl).forEach(function (b) {
      return b.toString().split(/ /g).forEach(function (b) {
        return a.t.push(b);
      });
    });

    if (!a.e.clc(a.t)) a.e.cla(a.t);
    a.e.cl.forEach(function (b) {
      return a.t.indexOf(b) >= 0 ? 0 : a.e.clr(b);
    });
  }

  if (_fn.a(a.d.html)) {
    a.e.html != a.d.html ? a.e.html = a.d.html : 0;
  }

  if (_fn.a(a.d.txt)) {
    a.e.txt != a.d.txt ? a.e.txt = a.d.txt : 0;
  }

  if (a.d.e) _fn.c(a.d.e).forEach(function (b) {
    return a.e.v[b[0]] != b[1] ? a.e.v[b[0]] = b[1] : 0;
  });

  if (!a.d.noupdate && a.d.ch) {
    a.t = a.e[a.d.nodes ? 'chn' : 'ch'];
    a.d.ch.forEach(function (b, c) {
      return !_fn.a(b) ? 0 : _elm(a.t[c] ? {
        e: new icApp(a.t[c]),
        d: b
      } : {
        cr: a.e,
        d: b
      });
    });

    while (a.d.ch.length < a.t.length) {
      a.t[a.t.length - 1].remove();
    }
  }

  if (_fn.a(a.d.id)) a.e.id = a.d.id;
  return a;
};

var icAppRender = /*#__PURE__*/function () {
  function icAppRender() {
    _classCallCheck(this, icAppRender);

    this._elm = _elm.bind(this);
    this.e = null;
    this.a = false;
    this.pevData = null;
    if (IC_DEV) window.__IC_DEV__[this.constructor.name] = this;
  }

  _createClass(icAppRender, [{
    key: "update",
    value: function update(d) {
      if (this.data) {
        if (this.willUpdate) this.pevData = Object.assign({}, this.data);
        Object.assign(this.data, d);
      }

      if (this.render && (typeof this.willUpdate == 'undefined' || !this.willUpdate())) {
        var b = this.render();

        this._elm({
          e: this.e,
          d: {
            ch: typeof b.length == 'undefined' ? [b] : b
          }
        });

        if (this.a && this.didUpdate) this.didUpdate();
        if (!this.a) this.a = true;
      }
    }
  }, {
    key: "mount",
    value: function mount(e) {
      this.e = new icApp(e);
      this.update();
      if (this.didMount) this.didMount();
    }
  }]);

  return icAppRender;
}();

var i = window.ic || function () {
  var ic = function ic() {
    _classCallCheck(this, ic);
  };

  return ic;
}();

i.XHR = XHR;
i.xhr = xhr;
i.icApp = icApp;
i.pram = pram;
i.IAR = icAppRender;
window.ic = i;

export default i;
export { icAppRender as IAR, XHR, icApp, pram, xhr };
