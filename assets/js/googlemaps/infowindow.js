google.maps.__gjsload__('infowindow', function (_) {
    var gga = function () {
            this.g = new _.LJ
        },
        hga = function (a, b) {
            if (1 == a.g.jc()) {
                var c = a.g.Pb()[0];
                c.i != b.i && (c.set("map", null), a.g.remove(c))
            }
            a.g.add(b)
        },
        sR = function (a) {
            var b = this;
            this.ma = a.Nm;
            this.ka = this.H = null;
            this.ua = a.shouldFocus && !1;
            var c = this.i = _.hq("div");
            _.bA(c, "default");
            c.style.position = "absolute";
            c.style.left = c.style.top = "0";
            a.Yd.floatPane.appendChild(this.i);
            this.V = _.hq("div", this.i);
            this.O = _.hq("div", this.V);
            this.g = _.hq("div", this.O);
            this.j = _.hq("div", this.g);
            _.OJ(this.i);
            _.Ep(this.g, "gm-style-iw");
            _.Ep(this.V, "gm-style-iw-a");
            _.Ep(this.O, "gm-style-iw-t");
            _.Ep(this.g, "gm-style-iw-c");
            _.Ep(this.j, "gm-style-iw-d");
            _.wp.g && (a.nb ? this.g.style.paddingLeft = 0 : this.g.style.paddingRight = 0, this.g.style.paddingBottom = 0, this.j.style.overflow = "scroll");
            rR(this, !1);
            _.M.addDomListener(c, "mousedown", _.Mf);
            _.M.addDomListener(c, "mouseup", _.Mf);
            _.M.addDomListener(c, "mousemove", _.Mf);
            _.M.addDomListener(c, "pointerdown", _.Mf);
            _.M.addDomListener(c, "pointerup", _.Mf);
            _.M.addDomListener(c, "pointermove", _.Mf);
            _.M.addDomListener(c,
                "dblclick", _.Mf);
            _.M.addDomListener(c, "click", _.Mf);
            _.M.addDomListener(c, "touchstart", _.Mf);
            _.M.addDomListener(c, "touchend", _.Mf);
            _.M.addDomListener(c, "touchmove", _.Mf);
            _.M.Xa(c, "contextmenu", this, this.Lo);
            _.M.Xa(c, "wheel", this, _.Mf);
            _.M.Xa(c, "mousewheel", this, _.Jf);
            _.M.Xa(c, "MozMousePixelScroll", this, _.Jf);
            this.W = new _.XI({
                oe: new _.O(8, 8),
                Te: new _.Sg(14, 14),
                offset: new _.O(-6, -6)
            });
            this.g.appendChild(this.W.element);
            _.M.addDomListener(this.W.element, "click", function (d) {
                _.Mf(d);
                _.M.trigger(b, "closeclick");
                b.set("open", !1)
            });
            this.o = null;
            this.ha = !1;
            this.N = new _.Hi(function () {
                !b.ha && b.get("content") && b.get("visible") && (_.M.trigger(b, "domready"), b.ha = !0)
            }, 0)
        },
        uR = function (a) {
            var b = !!a.get("open"),
                c = a.get("content");
            c = b ? c : null;
            if (c == a.o) rR(a, b && a.get("position"));
            else {
                if (a.o) {
                    var d = a.o.parentNode;
                    d == a.j && d.removeChild(a.o)
                }
                c && (a.H = document.activeElement, a.ha = !1, a.j.appendChild(c), d = _.VD(a.j), a.ka = d.length ? d[0] : null);
                rR(a, b && a.get("position"));
                a.o = c;
                tR(a)
            }
        },
        vR = function (a) {
            var b = a.get("pixelOffset") || new _.Sg(0,
                    0),
                c = new _.Sg(a.g.offsetWidth, a.g.offsetHeight);
            a = -b.height + c.height + 11 + 60;
            var d = b.height + 60,
                e = -b.width + c.width / 2 + 60;
            c = b.width + c.width / 2 + 60;
            0 > b.height && (d -= b.height);
            return {
                top: a,
                bottom: d,
                left: e,
                right: c
            }
        },
        rR = function (a, b) {
            a.i.style.visibility = b ? "" : "hidden";
            b && a.ua && _.UD(a.ka || a.W.element)
        },
        tR = function (a) {
            var b = a.get("layoutPixelBounds"),
                c = a.get("pixelOffset");
            var d = a.get("maxWidth") || 648;
            var e = a.get("minWidth") || 0;
            c ? (b ? (c = b.Ga - b.Ba - (11 + -c.height), b = b.Ia - b.Ca - 6, 240 <= b && (b -= 120), 240 <= c && (c -= 120)) : (b =
                648, c = 654), b = Math.min(b, d), b = Math.max(e, b), b = Math.max(0, b), c = Math.max(0, c), d = {
                Sn: new _.Sg(b, c),
                minWidth: e
            }) : d = null;
            if (e = d) d = e.Sn, e = e.minWidth, a.g.style.maxWidth = _.Q(d.width), a.g.style.maxHeight = _.Q(d.height), a.g.style.minWidth = _.Q(e), a.j.style.maxHeight = _.wp.g ? _.Q(d.height - 18) : _.Q(d.height - 36), wR(a), a.N.start()
        },
        wR = function (a) {
            var b = a.get("position");
            if (b && a.get("pixelOffset")) {
                var c = vR(a),
                    d = b.x - c.left,
                    e = b.y - c.top,
                    f = b.x + c.right;
                c = b.y + c.bottom;
                _.gq(a.V, b);
                b = a.get("zIndex");
                _.mq(a.i, _.Le(b) ? b : e + 60);
                a.set("pixelBounds", _.oi(d, e, f, c))
            }
        },
        iga = function (a) {
            var b = a.__gm;
            a = b.get("panes");
            b = b.get("innerContainer");
            a = {
                Yd: a,
                nb: _.Zv.nb(),
                Nm: b,
                shouldFocus: !1
            };
            return new sR(a)
        },
        xR = function (a, b, c) {
            var d = this;
            this.N = !0;
            this.Ka = this.H = this.o = null;
            var e = b.__gm,
                f = b instanceof _.bg;
            f && c ? c.then(function (m) {
                d.N && (d.o = m, d.Ka = new _.YI(function (q) {
                    d.H = new _.yq(b, m, q, function () {});
                    m.lb(d.H);
                    return d.H
                }), d.Ka.bindTo("latLngPosition", a, "position"), h.bindTo("position", d.Ka, "pixelPosition"))
            }) : (this.Ka = new _.YI, this.Ka.bindTo("latLngPosition",
                a, "position"), this.Ka.bindTo("center", e, "projectionCenterQ"), this.Ka.bindTo("zoom", e), this.Ka.bindTo("offset", e), this.Ka.bindTo("projection", b), this.Ka.bindTo("focus", b, "position"));
            this.g = f ? a.g.get("logAsInternal") ? "Ia" : "Id" : null;
            this.i = [];
            var g = new _.ZI(["scale"], "visible", function (m) {
                return null == m || .3 <= m
            });
            this.Ka && g.bindTo("scale", this.Ka);
            var h = this.O = iga(b);
            h.set("logAsInternal", !!a.g.get("logAsInternal"));
            h.bindTo("zIndex", a);
            h.bindTo("layoutPixelBounds", e, "pixelBounds");
            h.bindTo("maxWidth",
                a);
            h.bindTo("minWidth", a);
            h.bindTo("content", a);
            h.bindTo("pixelOffset", a);
            h.bindTo("visible", g);
            this.Ka && h.bindTo("position", this.Ka, "pixelPosition");
            this.j = new _.Hi(function () {
                if (b instanceof _.bg)
                    if (d.o) {
                        var m = a.get("position");
                        m && _.bs(b, d.o, new _.Ag(m), vR(h))
                    } else c.then(function () {
                        return d.j.start()
                    });
                else(m = h.get("pixelBounds")) ? _.M.trigger(e, "pantobounds", m) : d.j.start()
            }, 150);
            if (f) {
                var k = null;
                this.i.push(_.M.Wa(a, "position_changed", function () {
                    var m = a.get("position");
                    !m || a.get("disableAutoPan") ||
                        m.equals(k) || (d.j.start(), k = m)
                }))
            } else a.get("disableAutoPan") || this.j.start();
            h.set("open", !0);
            this.i.push(_.M.addListener(h, "domready", function () {
                a.trigger("domready")
            }));
            this.i.push(_.M.addListener(h, "closeclick", function () {
                a.close();
                a.trigger("closeclick");
                d.g && _.bo(d.g, "-i", d)
            }));
            if (this.g) {
                var l = this.g;
                _.P(b, this.g);
                _.bo(l, "-p", this);
                f = function () {
                    var m = a.get("position"),
                        q = b.getBounds();
                    m && q && q.contains(m) ? _.bo(l, "-v", d) : _.co(l, "-v", d)
                };
                this.i.push(_.M.addListener(b, "idle", f));
                f()
            }
        },
        jga = function (a,
            b, c) {
            return b instanceof _.bg ? new xR(a, b, c) : new xR(a, b)
        },
        kga = function (a) {
            a = a.__gm;
            return a.IW_AUTO_CLOSER = a.IW_AUTO_CLOSER || new gga
        };
    _.t(sR, _.N);
    _.n = sR.prototype;
    _.n.open_changed = function () {
        uR(this)
    };
    _.n.content_changed = function () {
        uR(this)
    };
    _.n.dispose = function () {
        var a = this;
        setTimeout(function () {
            document.activeElement && document.activeElement !== document.body || (a.H && a.H !== document.body ? _.UD(a.H) || _.UD(a.ma) : _.UD(a.ma))
        });
        this.i.parentNode.removeChild(this.i);
        this.N.stop();
        this.N.dispose()
    };
    _.n.pixelOffset_changed = function () {
        var a = this.get("pixelOffset") || new _.Sg(0, 0);
        this.O.style.right = _.Q(-a.width);
        this.O.style.bottom = _.Q(-a.height + 11);
        tR(this)
    };
    _.n.layoutPixelBounds_changed = function () {
        tR(this)
    };
    _.n.position_changed = function () {
        this.get("position") ? (wR(this), rR(this, !!this.get("open"))) : rR(this, !1)
    };
    _.n.zIndex_changed = function () {
        wR(this)
    };
    _.n.visible_changed = function () {
        _.Zz(this.i, this.get("visible"));
        this.N.start()
    };
    _.n.Lo = function (a) {
        for (var b = !1, c = this.get("content"), d = a.target; !b && d;) b = d == c, d = d.parentNode;
        b ? _.Jf(a) : _.Lf(a)
    };
    xR.prototype.close = function () {
        if (this.N) {
            this.N = !1;
            this.g && (_.co(this.g, "-p", this), _.co(this.g, "-v", this));
            for (var a = _.p(this.i), b = a.next(); !b.done; b = a.next()) _.M.removeListener(b.value);
            this.i.length = 0;
            this.j.stop();
            this.j.dispose();
            this.o && this.H && this.o.Gd(this.H);
            a = this.O;
            a.unbindAll();
            a.set("open", !1);
            a.dispose();
            this.Ka && this.Ka.unbindAll()
        }
    };
    _.If("infowindow", {
        Vl: function (a) {
            var b = null;
            _.M.Wa(a, "map_changed", function d() {
                var e = a.get("map");
                b && (b.aj.g.remove(a), b.Wo.close(), b = null);
                if (e) {
                    var f = e.__gm;
                    f.get("panes") ? (b = {
                        Wo: jga(a, e, e instanceof _.bg ? f.i.then(function (g) {
                            return g.mb
                        }) : void 0),
                        aj: kga(e)
                    }, hga(b.aj, a)) : _.M.addListenerOnce(f, "panes_changed", d)
                }
            })
        }
    });
});