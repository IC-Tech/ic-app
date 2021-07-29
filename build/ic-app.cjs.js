/*!
 * ic-app v1.2.2
 * https://github.com/IC-Tech/ic-app#readme
 * Copyright (c) 2021, Imesh Chamara. All rights reserved.
 * Released under the MIT License
 */
(function () {
  'use strict';

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
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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

  var _xE = function _xE(a) {
    return {
      success: false,
      error: {
        code: a,
        message: [, 'network error occurred', 'request timed out', 'server did not respond', 'response could not parse'][a]
      }
    };
  },
      XHR = function XHR(url, call, op, data) {
    var xhr = new XMLHttpRequest();
    xhr.open((op = op || {}).meth || (data && !op.meth ? 'POST' : 'GET'), url + (op.fresh == 0 ? '' : (url.indexOf('?') >= 0 ? '&' : '?') + 't=' + new Date().getTime()));
    Object.keys(op.head || {}).forEach(function (a) {
      xhr.setRequestHeader(a, op.head[a]);
    });

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status != 0) {
        if (!xhr.response) return call(_xE(3));

        try {
          call(op.raw ? xhr.response : JSON.parse(xhr.response));
        } catch (e) {
          call(_xE(4));
        }
      }
    };

    xhr.onerror = function () {
      call(_xE(1));
    };

    xhr.ontimeout = function () {
      call(_xE(2));
    };

    xhr.send(data);
  },
      xhr = function xhr(url, op, data) {
    return new Promise(function (_) {
      XHR(url, _, op, data);
    });
  },
      _ne = encodeURIComponent,
      _nf = decodeURIComponent,
      pram = function pram(a) {
    if (_typeof(a) == 'object') return Object.keys(a).map(function (b) {
      return _ne(b) + '=' + _ne(a[b]);
    }).join('&');
    var b = {},
        c = /(?:(?:\?|&)?([^=&?#]*)=([^=&?#]*))/g,
        d;

    while (d = c.exec(a)) {
      if (!b[d[1] = _nf(d[1])]) b[d[1]] = _nf(d[2]);else {
        if (!(b[d[1]] instanceof Array)) b[d[1]] = [b[d[1]]];
        b[d[1]].push(_nf(d[2]));
      }
    }

    return b;
  },
      _nb = function _nb(a, b) {
    return b ? a instanceof icApp ? a : new icApp(a) : a instanceof icApp ? a.v : a;
  },
      _nc = function _nc(a) {
    return a instanceof Array ? a : [a];
  },
      _nd = function _nd(a) {
    return Object.keys(a).map(function (b) {
      return "[data-".concat(b, "=\"").concat(a[b], "\"]");
    }).join('');
  };

  var icApp = /*#__PURE__*/function () {
    function icApp(v, cr) {
      _classCallCheck(this, icApp);

      this.v = cr ? icApp.ce(v, typeof cr == 'string' || _typeof(cr) == 'object' ? cr : undefined) : typeof v == 'string' ? icApp.qs(v) : v;
    }

    _createClass(icApp, [{
      key: "c",
      get: function get() {
        return Array.from(this.ch).map(function (e) {
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
      key: "ap",
      value: function ap(v) {
        this.v.appendChild(_nb(v));
        return this;
      }
    }, {
      key: "chr",
      value: function chr(v) {
        if (v) {
          _nc(v).forEach(function (a) {
            _nb(a, 1).rem();
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

        (_this$cl = this.cl).add.apply(_this$cl, _toConsumableArray(_nc(v)));

        return this;
      }
    }, {
      key: "clr",
      value: function clr(v) {
        var _this$cl2;

        (_this$cl2 = this.cl).remove.apply(_this$cl2, _toConsumableArray(_nc(v)));

        return this;
      }
    }, {
      key: "clc",
      value: function clc(v) {
        var _this = this;

        return !_nc(v).some(function (a) {
          return !_this.cl.contains(a);
        });
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
        return this.v.textContent;
      },
      set: function set(v) {
        this.v.textContent = v;
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
      key: "ga",
      value: function ga(n) {
        return this.v.getAttribute(n);
      }
    }, {
      key: "ra",
      value: function ra(n) {
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
      key: "rem",
      value: function rem() {
        this.v.remove();
        return this;
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
    }, {
      key: "qs",
      value: function qs(v) {
        return new icApp(icApp.qs(v, this.v));
      }
    }, {
      key: "ds",
      value: function ds(a) {
        return new icApp(icApp.qs(_nd(a), this.v));
      }
    }], [{
      key: "d",
      get: function get() {
        return document;
      }
    }, {
      key: "qs",
      value: function qs(v, e) {
        return (e || this.d).querySelector(v);
      }
    }, {
      key: "qsa",
      value: function qsa(v, e) {
        return (e || this.d).querySelectorAll(v);
      }
    }, {
      key: "ce",
      value: function ce(v, d) {
        var i = v && ['createTextNode', 'createDocumentFragment', 'createComment'][['#text', '#document-fragment', '#comment'].indexOf(v)];
        return i ? this.d[i](d) : this.d.createElement(v, d);
      }
    }, {
      key: "cen",
      value: function cen(n, v) {
        return this.d.createElementNS(n, v);
      }
    }, {
      key: "ds",
      value: function ds(a) {
        return new icApp(_nd(a));
      }
    }]);

    return icApp;
  }();

  var _Na = function _Na(a) {
    return a || typeof a == 'string' || typeof a == 'number' && a == 0;
  },
      _Nb = function _Nb(a, b) {
    return Object.keys(a).forEach(function (c) {
      b(c);
    });
  },
      _Nc = function _Nc(a) {
    return a instanceof Array ? a : Object.keys(a).map(function (b) {
      return [b, a[b]];
    });
  },
      _Nd = _nc,
      _Ne = function _Ne(a) {
    return a === 0 || a === false;
  },
      _Nf = function _Nf(a) {
    return new icApp(a.t, a.t[0] == '#' && a.txt || 1);
  },
      _elm = function _elm(a) {
    if (typeof a.d == 'string') a.d = {
      t: '#text',
      txt: a.d
    };

    if (a.cr) {
      a.cr.ap(a.e = _Nf(a.d));
      if (a.d.cg) a.d.cg(a.e);
    }

    if (_Na(a.d.t) && a.e.node.toUpperCase() != a.d.t.toUpperCase()) {
      a.e.p.v.replaceChild((a.t = _Nf(a.d)).v, a.e.v);
      a.e = a.t;
      if (a.d.cg) a.d.cg(a.e);
    }

    if (a.d.s) _Nb(a.d.s, function (b) {
      if (a.d.s[b] != a.e.st[b]) a.e.st[b] = a.d.s[b];
    });
    if (a.d.at) _Nc(a.d.at).forEach(function (b) {
      var _a$e;

      b[1] === undefined ? a.e.ra(b[0]) : _Na(b[1]) ? a.e.ga(b[0]) != b[1].toString() ? (_a$e = a.e).sa.apply(_a$e, _toConsumableArray(b)) : 0 : 0;
    });
    if (a.d.d) _Nc(a.d.d).forEach(function (b) {
      if (b[1].toString() != a.e.d[b[0]]) a.e.d[b[0]] = b[1].toString();
    });

    if (a.d.cl) {
      if (!a.e.clc(a.t = _Nd(a.d.cl).join(' ').split(' '))) a.e.cla(a.t);
      a.e.cl.forEach(function (b) {
        a.t.indexOf(b) == -1 && a.e.clr(b);
      });
    }

    if (_Na(a.d.html) && a.e.html != a.d.html) a.e.html = a.d.html;
    if (_Na(a.d.txt) && a.e.txt != a.d.txt) a.e.txt = a.d.txt;
    if (a.d.e) _Nc(a.d.e).forEach(function (b) {
      if (a.e.v[b[0]] != b[1]) a.e.v[b[0]] = b[1];
    });

    if (!a.d.noupdate && a.d.ch) {
      a.t = a.e[a.d.nodes || a.e.chn.length != a.e.ch.length ? 'chn' : 'ch'];
      a.d.ch.forEach(function (b, c) {
        if (_Na(b)) _elm(a.t[c] ? {
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

    if (_Na(a.d.id)) a.e.v.id = a.d.id;
    return a;
  };

  var icAppRender = /*#__PURE__*/function () {
    function icAppRender() {
      _classCallCheck(this, icAppRender);

      this._elm = _elm.bind(this);
      this.e = null;
      this._a = false;
    }

    _createClass(icAppRender, [{
      key: "update",
      value: function update(d) {
        if (this.data) this.pevData = Object.assign({}, this.data);else if (d) this.data = {};
        if (d) Object.assign(this.data, d);

        if (this.e && this.render && !(this.willUpdate && _Ne(this.willUpdate()))) {
          var b = this.render();

          this._elm({
            e: this.e,
            d: {
              ch: _Nd(b)
            }
          });

          if (!this._a) {
            this._a = true;
            if (this.didMount) this.didMount();
          } else if (this.didUpdate) this.didUpdate();
        }
      }
    }, {
      key: "mount",
      value: function mount(e) {
        this.e = new icApp(e);
        this.update();
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

}());
