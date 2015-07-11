! function(e) {
	e.fn.slides = function(t) {
		return t = e.extend({}, e.fn.slides.option, t), this.each(function() {
			function s() {
				clearInterval(p.data("interval"))
			}
			function n() {
				t.pause ? (clearTimeout(p.data("pause")), clearInterval(p.data("interval")), pauseTimeout = setTimeout(function() {
					clearTimeout(p.data("pause")), playInterval = setInterval(function() {
						i("next", g)
					}, t.play), p.data("interval", playInterval)
				}, t.pause), p.data("pause", pauseTimeout)) : s()
			}
			function i(s, n, i) {
				if (!r && a) {
					switch (r = !0, s) {
						case "next":
							v = k, $ = k + 1, $ = f === $ ? 0 : $, o = 2 * u, s = 2 * -u, k = $;
							break;
						case "prev":
							v = k, $ = k - 1, $ = -1 === $ ? f - 1 : $, o = 0, s = 0, k = $;
							break;
						case "pagination":
							$ = parseInt(i, 10), v = e("." + t.paginationClass + " li.current a", p).attr("href").match("[^#/]+$"), $ > v ? (o = 2 * u, s = 2 * -u) : (o = 0, s = 0), k = $
					}
					"fade" === n ? (t.animationStart(), t.crossfade ? d.children(":eq(" + $ + ")", p).css({
						zIndex: 10
					}).fadeIn(t.fadeSpeed, function() {
						t.autoHeight ? d.animate({
							height: d.children(":eq(" + $ + ")", p).outerHeight()
						}, t.autoHeightSpeed, function() {
							d.children(":eq(" + v + ")", p).css({
								display: "none",
								zIndex: 0
							}), d.children(":eq(" + $ + ")", p).css({
								zIndex: 0
							}), t.animationComplete($ + 1), r = !1
						}) : (d.children(":eq(" + v + ")", p).css({
							display: "none",
							zIndex: 0
						}), d.children(":eq(" + $ + ")", p).css({
							zIndex: 0
						}), t.animationComplete($ + 1), r = !1)
					}) : (t.animationStart(), d.children(":eq(" + v + ")", p).fadeOut(t.fadeSpeed, function() {
						t.autoHeight ? d.animate({
							height: d.children(":eq(" + $ + ")", p).outerHeight()
						}, t.autoHeightSpeed, function() {
							d.children(":eq(" + $ + ")", p).fadeIn(t.fadeSpeed)
						}) : d.children(":eq(" + $ + ")", p).fadeIn(t.fadeSpeed, function() {
							e.browser.msie && e(this).get(0).style.removeAttribute("filter")
						}), t.animationComplete($ + 1), r = !1
					}))) : (d.children(":eq(" + $ + ")").css({
						left: o,
						display: "block"
					}), t.autoHeight ? (t.animationStart(), d.animate({
						left: s,
						height: d.children(":eq(" + $ + ")").outerHeight()
					}, t.slideSpeed, function() {
						d.css({
							left: -u
						}), d.children(":eq(" + $ + ")").css({
							left: u,
							zIndex: 5
						}), d.children(":eq(" + v + ")").css({
							left: u,
							display: "none",
							zIndex: 0
						}), t.animationComplete($ + 1), r = !1
					})) : (t.animationStart(), d.animate({
						left: s
					}, t.slideSpeed, function() {
						d.css({
							left: -u
						}), d.children(":eq(" + $ + ")").css({
							left: u,
							zIndex: 5
						}), d.children(":eq(" + v + ")").css({
							left: u,
							display: "none",
							zIndex: 0
						}), t.animationComplete($ + 1), r = !1
					}))), t.pagination && (e("." + t.paginationClass + " li.current", p).removeClass("current"), e("." + t.paginationClass + " li:eq(" + $ + ")", p).addClass("current"))
				}
			}
			e("." + t.container, e(this)).children().wrapAll('<div class="slides_control"/>');
			var a, r, c, o, l, p = e(this),
				d = e(".slides_control", p),
				f = d.children().size(),
				u = d.children().outerWidth(),
				_ = d.children().outerHeight(),
				h = t.start - 1,
				g = t.effect.indexOf(",") < 0 ? t.effect : t.effect.replace(" ", "").split(",")[0],
				m = t.effect.indexOf(",") < 0 ? g : t.effect.replace(" ", "").split(",")[1],
				$ = 0,
				v = 0,
				b = 0,
				k = 0;
			if (!(2 > f)) {
				if (0 > h && (h = 0), h > f && (h = f - 1), t.start && (k = h), t.randomize && d.randomize(), e("." + t.container, p).css({
					overflow: "hidden",
					position: "relative"
				}), d.children().css({
					position: "absolute",
					top: 0,
					left: d.children().outerWidth(),
					zIndex: 0,
					display: "none"
				}), d.css({
					position: "relative",
					width: 3 * u,
					height: _,
					left: -u
				}), e("." + t.container, p).css({
					display: "block"
				}), t.autoHeight && (d.children().css({
					height: "auto"
				}), d.animate({
					height: d.children(":eq(" + h + ")").outerHeight()
				}, t.autoHeightSpeed)), t.preload && d.find("img").length) {
					e("." + t.container, p).css({
						background: "url(" + t.preloadImage + ") no-repeat 50% 50%"
					});
					var x = d.find("img:eq(" + h + ")").attr("src") + "?" + (new Date).getTime();
					l = "slides_control" != e("img", p).parent().attr("class") ? d.children(":eq(0)")[0].tagName.toLowerCase() : d.find("img:eq(" + h + ")"), d.find("img:eq(" + h + ")").attr("src", x).load(function() {
						d.find(l + ":eq(" + h + ")").fadeIn(t.fadeSpeed, function() {
							e(this).css({
								zIndex: 5
							}), p.css({
								background: ""
							}), a = !0
						})
					})
				} else d.children(":eq(" + h + ")").fadeIn(t.fadeSpeed, function() {
					a = !0
				});
				t.bigTarget && (d.children().css({
					cursor: "pointer"
				}), d.children().click(function() {
					return i("next", g), !1
				})), t.hoverPause && t.play && (d.children().bind("mouseover", function() {
					s()
				}), d.children().bind("mouseleave", function() {
					n()
				})), t.generateNextPrev && (e("." + t.container, p).after('<a href="#" class="' + t.prev + '">Prev</a>'), e("." + t.prev, p).after('<a href="#" class="' + t.next + '">Next</a>')), e("." + t.next, p).click(function(e) {
					e.preventDefault(), t.play && n(), i("next", g)
				}), e("." + t.prev, p).click(function(e) {
					e.preventDefault(), t.play && n(), i("prev", g)
				}), t.generatePagination ? (p.append("<ul class=" + t.paginationClass + "></ul>"), d.children().each(function() {
					e("." + t.paginationClass, p).append('<li><a href="#' + b + '">' + (b + 1) + "</a></li>"), b++
				})) : e("." + t.paginationClass + " li a", p).each(function() {
					e(this).attr("href", "#" + b), b++
				}), e("." + t.paginationClass + " li:eq(" + h + ")", p).addClass("current"), e("." + t.paginationClass + " li a", p).click(function() {
					return t.play && n(), c = e(this).attr("href").match("[^#/]+$"), k != c && i("pagination", m, c), !1
				}), e("a.link", p).click(function() {
					return t.play && n(), c = e(this).attr("href").match("[^#/]+$") - 1, k != c && i("pagination", m, c), !1
				}), t.play && (playInterval = setInterval(function() {
					i("next", g)
				}, t.play), p.data("interval", playInterval))
			}
		})
	}, e.fn.slides.option = {
		preload: !1,
		container: "slides__container",
		generateNextPrev: !1,
		next: "slides__next",
		prev: "slides__prev",
		pagination: !0,
		generatePagination: !0,
		paginationClass: "slides__pagination",
		fadeSpeed: 350,
		slideSpeed: 350,
		start: 1,
		effect: "slide",
		crossfade: !1,
		randomize: !1,
		play: 0,
		pause: 0,
		hoverPause: !1,
		autoHeight: !1,
		autoHeightSpeed: 350,
		bigTarget: !1,
		animationStart: function() {},
		animationComplete: function() {}
	}, e.fn.randomize = function(t) {
		function s() {
			return Math.round(Math.random()) - .5
		}
		return e(this).each(function() {
			var n = e(this),
				a = n.children(),
				r = a.length;
			if (r > 1) {
				a.hide();
				var c = [];
				for (i = 0; i < r; i++) c[c.length] = i;
				c = c.sort(s), e.each(c, function(e, s) {
					var i = a.eq(s),
						r = i.clone(!0);
					r.show().appendTo(n), void 0 !== t && t(i, r), i.remove()
				})
			}
		})
	}
}(jQuery), $(document).ready(function() {
	jQuery.fn.progressbarAnimation = function(e) {
		var t = 1000,
			s = 60 * t,
			n = 3600 * t,
			i = 86400 * t,
			a = {
				start: new Date,
				finish: (new Date).setTime((new Date).getTime() + 60 * t),
				interval: 300
			}, r = jQuery.extend(a, e),
			c = this;
		return this.each(function() {
			var e = r.finish - r.start;
			$(c).children(".progress-bar__ui").progressbar();
			var a = setInterval(function() {
				var o = r.finish - new Date,
					l = new Date - r.start,
					p = parseInt(o / i),
					d = parseInt((o - p * i) / n),
					f = parseInt((o - p * i - d * n) / s),
					u = parseInt((o - p * i - f * s - d * n) / t),
					_ = 4 - f;
				lSec = 60 - u, iPerc = l > 0 ? l / e * 100 : 0, $(c).children(".progress-bar__percent").html(iPerc.toFixed(1) + "%"), $(c).children(".progress-bar__time").children(".progress-bar__time-start").html(_ + ":" + lSec), $(c).children(".progress-bar__time").children(".progress-bar__time-finish").html(f + ":" + u), $(c).children(".progress-bar__ui").children(".ui-progressbar-value").css("width", iPerc + "%"), iPerc >= 100 && (clearInterval(a), $(c).children(".progress-bar__time").children(".progress-bar__time-start").html("0:0"), $(c).children(".progress-bar__time").children(".progress-bar__time-finish").html("5:00"), $(c).children(".progress-bar__percent").html("100%"))
			}, r.interval)
		})
	};
	$("#progress").progressbarAnimation()
}), $(document).ready(function() {
	$(function() {
		$("#slides").slides({
			play: 3e3,
			pause: 3000,
			hoverPause: !0
		})
	}), $(function() {
		$(document).on("click", ".tabs__menu-item", function() {
			var e = $(this).index();
			$(".tabs__menu-item--active").removeClass("tabs__menu-item--active"), $(this).addClass("tabs__menu-item--active"), $(".tabs__article--active").removeClass("tabs__article--active"), $(".tabs__article").eq(e).addClass("tabs__article--active")
		})
	}), $(function() {
		$(".rangeslider").noUiSlider({
			start: [1200, 9500],
			step: 100,
			connect: !0,
			range: {
				min: 0,
				max: 20000
			},
			format: wNumb({
				decimals: 0,
				postfix: "Р"
			})
		}), $(".rangeslider").Link("lower").to('-inline-<div class="rangeslider-tooltip"></div>', function(e) {
			$(this).html("<span>" + e + "</span>")
		}), $(".rangeslider").Link("upper").to('-inline-<div class="rangeslider-tooltip"></div>', function(e) {
			$(this).html("<span>" + e + "</span>")
		}), $(".rangeslider").Link("lower").to($("#range_lower")), $(".rangeslider").Link("upper").to($("#range_upper"))
	}), $(function() {
		$(document).on("click", ".steps__pill--start", function() {
			$(".steps__pill--half").css("background-color", "#e6e9ed"), $(".steps__pill--finish").css("background-color", "#e6e9ed"), $(".steps__range--start").css("background-color", "#e6e9ed"), $(".steps__range--finish").css("background-color", "#e6e9ed"), $(".steps__pill--active").css("left", "20px")
		}), $(document).on("click", ".steps__pill--half", function() {
			$(".steps__pill--half").css("background-color", "#fc6e51"), $(".steps__pill--finish").css("background-color", "#e6e9ed"), $(".steps__range--start").css("background-color", "#fc6e51"), $(".steps__range--finish").css("background-color", "#e6e9ed"), $(".steps__pill--active").css("left", "255px")
		}), $(document).on("click", ".steps__pill--finish", function() {
			$(".steps__pill--half").css("background-color", "#fc6e51"), $(".steps__pill--finish").css("background-color", "#fc6e51"), $(".steps__range--start").css("background-color", "#fc6e51"), $(".steps__range--finish").css("background-color", "#fc6e51"), $(".steps__pill--active").css("left", "487px")
		}), $(document).on("click", ".steps__range--start", function() {
			var e = $(".steps__pill--active").css("left");
			console.log(e), "20px" == e ? ($(".steps__pill--half").css("background-color", "#fc6e51"), $(".steps__pill--finish").css("background-color", "#e6e9ed"), $(".steps__range--start").css("background-color", "#fc6e51"), $(".steps__range--finish").css("background-color", "#e6e9ed"), $(".steps__pill--active").css("left", "255px")) : "255px" == e ? ($(".steps__pill--half").css("background-color", "#e6e9ed"), $(".steps__pill--finish").css("background-color", "#e6e9ed"), $(".steps__range--start").css("background-color", "#e6e9ed"), $(".steps__range--finish").css("background-color", "#e6e9ed"), $(".steps__pill--active").css("left", "20px")) : "487px" == e && ($(".steps__pill--half").css("background-color", "#fc6e51"), $(".steps__pill--finish").css("background-color", "#e6e9ed"), $(".steps__range--start").css("background-color", "#fc6e51"), $(".steps__range--finish").css("background-color", "#e6e9ed"), $(".steps__pill--active").css("left", "255px"))
		}), $(document).on("click", ".steps__range--finish", function() {
			var e = $(".steps__pill--active").css("left");
			console.log(e), "20px" == e ? ($(".steps__pill--half").css("background-color", "#fc6e51"), $(".steps__pill--finish").css("background-color", "#e6e9ed"), $(".steps__range--start").css("background-color", "#fc6e51"), $(".steps__range--finish").css("background-color", "#e6e9ed"), $(".steps__pill--active").css("left", "255px")) : "255px" == e ? ($(".steps__pill--half").css("background-color", "#fc6e51"), $(".steps__pill--finish").css("background-color", "#fc6e51"), $(".steps__range--start").css("background-color", "#fc6e51"), $(".steps__range--finish").css("background-color", "#fc6e51"), $(".steps__pill--active").css("left", "487px")) : "487px" == e && ($(".steps__pill--half").css("background-color", "#fc6e51"), $(".steps__pill--finish").css("background-color", "#e6e9ed"), $(".steps__range--start").css("background-color", "#fc6e51"), $(".steps__range--finish").css("background-color", "#e6e9ed"), $(".steps__pill--active").css("left", "255px"))
		})
	}), $(".js-example-basic-single").select2({ width: '100%' , minimumResultsForSearch: Infinity });
});
