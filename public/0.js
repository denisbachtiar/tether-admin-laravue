(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Breadcrumbs.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Breadcrumbs.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    crumbs: function crumbs() {
      var _this = this;

      var pathArray = this.$route.path.split("/");
      pathArray.shift();
      var breadcrumbs = pathArray.reduce(function (breadcrumbArray, path, idx) {
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1] ? "/" + breadcrumbArray[idx - 1].path + "/" + path : "/" + path,
          text: _this.$route.matched[idx].meta.breadCrumb || path
        });
        return breadcrumbArray;
      }, []);
      return breadcrumbs;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/ActiveGraphBox.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/ActiveGraphBox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-c3 */ "./node_modules/vue-c3/dist/vue-c3.umd.js");
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_c3__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueC3: vue_c3__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      handler: new vue__WEBPACK_IMPORTED_MODULE_0___default.a()
    };
  },
  mounted: function mounted() {
    // to init the graph call:
    var options = {
      padding: {
        bottom: -10,
        left: -1,
        right: -1
      },
      data: {
        url: '/api/dashboard/graphbox',
        'mimeType': 'json',
        keys: {
          value: ['1']
        },
        names: {
          1: 'Active Users'
        },
        type: 'area'
      },
      legend: {
        show: false
      },
      transition: {
        duration: 0
      },
      point: {
        show: false
      },
      tooltip: {
        format: {
          title: function title(x) {
            return '';
          }
        }
      },
      axis: {
        y: {
          padding: {
            bottom: 0
          },
          show: false,
          tick: {
            outer: false
          }
        },
        x: {
          padding: {
            left: 0,
            right: 0
          },
          show: false
        }
      },
      color: {
        pattern: ['#e74c3c']
      }
    };
    this.handler.$emit('init', options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/AllGraphBox.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/AllGraphBox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-c3 */ "./node_modules/vue-c3/dist/vue-c3.umd.js");
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_c3__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueC3: vue_c3__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      handler: new vue__WEBPACK_IMPORTED_MODULE_0___default.a()
    };
  },
  mounted: function mounted() {
    // to init the graph call:
    var options = {
      padding: {
        bottom: -10,
        left: -1,
        right: -1
      },
      data: {
        url: '/api/dashboard/graphbox',
        'mimeType': 'json',
        keys: {
          value: ['0']
        },
        names: {
          0: 'All Users'
        },
        type: 'area'
      },
      legend: {
        show: false
      },
      transition: {
        duration: 0
      },
      point: {
        show: false
      },
      tooltip: {
        format: {
          title: function title(x) {
            return '';
          }
        }
      },
      axis: {
        y: {
          padding: {
            bottom: 0
          },
          show: false,
          tick: {
            outer: false
          }
        },
        x: {
          padding: {
            left: 0,
            right: 0
          },
          show: false
        }
      },
      color: {
        pattern: ['#467fcf']
      }
    };
    this.handler.$emit('init', options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/BoxStat.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/BoxStat.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllGraphBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllGraphBox */ "./resources/js/components/user/dashboard/AllGraphBox.vue");
/* harmony import */ var _ActiveGraphBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActiveGraphBox */ "./resources/js/components/user/dashboard/ActiveGraphBox.vue");
/* harmony import */ var _IddleGraphBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IddleGraphBox */ "./resources/js/components/user/dashboard/IddleGraphBox.vue");
/* harmony import */ var _NonActiveGraphBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NonActiveGraphBox */ "./resources/js/components/user/dashboard/NonActiveGraphBox.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AllGraphBox: _AllGraphBox__WEBPACK_IMPORTED_MODULE_0__["default"],
    ActiveGraphBox: _ActiveGraphBox__WEBPACK_IMPORTED_MODULE_1__["default"],
    IddleGraphBox: _IddleGraphBox__WEBPACK_IMPORTED_MODULE_2__["default"],
    NonActiveGraphBox: _NonActiveGraphBox__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      all: null,
      active: null,
      iddle: null,
      nonactive: null,
      loading: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("http://localhost:8000/api/dashboard").then(function (response) {
      // console.log(response.data)
      _this.all = response.data.all;
      _this.active = response.data.active;
      _this.iddle = response.data.iddle;
      _this.nonactive = response.data.nonactive;
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {
      return _this.loading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/ChartAgePie.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/ChartAgePie.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-c3 */ "./node_modules/vue-c3/dist/vue-c3.umd.js");
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_c3__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueC3: vue_c3__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      handler: new vue__WEBPACK_IMPORTED_MODULE_0___default.a()
    };
  },
  mounted: function mounted() {
    // to init the graph call:
    var options = {
      data: {
        url: '/api/dashboard/graphagepie',
        'mimeType': 'json',
        keys: {
          // x: 'date',
          value: ['kids', 'adult', 'old', 'elder']
        },
        type: 'pie',
        // default type of chart
        colors: {
          kids: '#1e78da',
          adult: '#fa7f0f',
          old: '#d41111',
          elder: '#000000'
        },
        names: {
          // name of each serie
          kids: '>17',
          adult: '17-30',
          old: '31-45',
          elder: '>46'
        }
      },
      axis: {},
      legend: {
        show: true //hide legend

      },
      padding: {
        bottom: 20,
        top: 0
      },
      onrendered: function onrendered() {
        $('.loading-chart-pie').addClass('d-none');
      }
    };
    this.handler.$emit('init', options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/ChartLineMonth.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/ChartLineMonth.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-c3 */ "./node_modules/vue-c3/dist/vue-c3.umd.js");
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_c3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueC3: vue_c3__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      handler: new vue__WEBPACK_IMPORTED_MODULE_0___default.a()
    };
  },
  mounted: function mounted() {
    // to init the graph call:
    var months = new Array();
    var y = null;

    for (y = 6; y >= 0; y--) {
      months.push(moment_moment__WEBPACK_IMPORTED_MODULE_2__().subtract(y, 'months').format('MMM Y'));
    }

    ;
    var options = {
      data: {
        url: '/api/dashboard/graphmonth',
        'mimeType': 'json',
        keys: {
          value: ['0', '1', '2']
        },
        type: 'line',
        colors: {
          0: '#1e78da',
          1: '#fa7f0f',
          2: '#d41111'
        },
        names: {
          0: 'Male',
          1: 'Female',
          2: 'Undefined'
        },
        order: 'desc'
      },
      grid: {
        x: {
          show: true
        },
        y: {
          show: true
        }
      },
      axis: {
        x: {
          type: 'category',
          categories: months
        },
        y: {
          tick: {
            format: function format(d) {
              return parseInt(d) == d ? d : null;
            }
          }
        }
      },
      bar: {
        width: 16
      },
      legend: {
        show: true //hide legend

      },
      padding: {
        bottom: 20,
        top: 0
      },
      onrendered: function onrendered() {
        $('.loading-chart').addClass('d-none');
      }
    };
    this.handler.$emit('init', options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/IddleGraphBox.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/IddleGraphBox.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-c3 */ "./node_modules/vue-c3/dist/vue-c3.umd.js");
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_c3__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueC3: vue_c3__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      handler: new vue__WEBPACK_IMPORTED_MODULE_0___default.a()
    };
  },
  mounted: function mounted() {
    // to init the graph call:
    var options = {
      padding: {
        bottom: -10,
        left: -1,
        right: -1
      },
      data: {
        url: '/api/dashboard/graphbox',
        'mimeType': 'json',
        keys: {
          value: ['2']
        },
        names: {
          2: 'Iddle Users'
        },
        type: 'area'
      },
      legend: {
        show: false
      },
      transition: {
        duration: 0
      },
      point: {
        show: false
      },
      tooltip: {
        format: {
          title: function title(x) {
            return '';
          }
        }
      },
      axis: {
        y: {
          padding: {
            bottom: 0
          },
          show: false,
          tick: {
            outer: false
          }
        },
        x: {
          padding: {
            left: 0,
            right: 0
          },
          show: false
        }
      },
      color: {
        pattern: ['#5eba00']
      }
    };
    this.handler.$emit('init', options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/NonActiveGraphBox.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/NonActiveGraphBox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-c3 */ "./node_modules/vue-c3/dist/vue-c3.umd.js");
/* harmony import */ var vue_c3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_c3__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueC3: vue_c3__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      handler: new vue__WEBPACK_IMPORTED_MODULE_0___default.a()
    };
  },
  mounted: function mounted() {
    // to init the graph call:
    var options = {
      padding: {
        bottom: -10,
        left: -1,
        right: -1
      },
      data: {
        url: '/api/dashboard/graphbox',
        'mimeType': 'json',
        keys: {
          value: ['3']
        },
        names: {
          3: 'Nonactive Users'
        },
        type: 'area'
      },
      legend: {
        show: false
      },
      transition: {
        duration: 0
      },
      point: {
        show: false
      },
      tooltip: {
        format: {
          title: function title(x) {
            return '';
          }
        }
      },
      axis: {
        y: {
          padding: {
            bottom: 0
          },
          show: false,
          tick: {
            outer: false
          }
        },
        x: {
          padding: {
            left: 0,
            right: 0
          },
          show: false
        }
      },
      color: {
        pattern: ['#f1c40f']
      }
    };
    this.handler.$emit('init', options);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layouts/Breadcrumbs */ "./resources/js/components/layouts/Breadcrumbs.vue");
/* harmony import */ var _components_user_dashboard_BoxStat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user/dashboard/BoxStat */ "./resources/js/components/user/dashboard/BoxStat.vue");
/* harmony import */ var _components_user_dashboard_ChartLineMonth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user/dashboard/ChartLineMonth */ "./resources/js/components/user/dashboard/ChartLineMonth.vue");
/* harmony import */ var _components_user_dashboard_ChartAgePie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/user/dashboard/ChartAgePie */ "./resources/js/components/user/dashboard/ChartAgePie.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dashboard',
  components: {
    Breadcrumb: _components_layouts_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__["default"],
    ChartLineMonth: _components_user_dashboard_ChartLineMonth__WEBPACK_IMPORTED_MODULE_3__["default"],
    ChartAgePie: _components_user_dashboard_ChartAgePie__WEBPACK_IMPORTED_MODULE_4__["default"],
    BoxStat: _components_user_dashboard_BoxStat__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Breadcrumbs.vue?vue&type=template&id=15f01b2f&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Breadcrumbs.vue?vue&type=template&id=15f01b2f& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-6 col-sm-12" }, [
    _c("h1", [_vm._v("Dashboard")]),
    _vm._v(" "),
    _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
      _c(
        "ol",
        { staticClass: "breadcrumb" },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._l(_vm.crumbs, function(item, index) {
            return _c(
              "li",
              {
                key: index,
                staticClass: "breadcrumb-item active",
                attrs: { "aria-current": "page" }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(item.text) +
                    "\n                "
                )
              ]
            )
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "breadcrumb-item" }, [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Tether")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/ActiveGraphBox.vue?vue&type=template&id=109ed247&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/ActiveGraphBox.vue?vue&type=template&id=109ed247& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card-chart-bg pt-4" },
    [
      _c("vue-c3", {
        staticStyle: { height: "60px" },
        attrs: { handler: _vm.handler }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/AllGraphBox.vue?vue&type=template&id=ea6f21ec&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/AllGraphBox.vue?vue&type=template&id=ea6f21ec& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card-chart-bg pt-4" },
    [
      _c("vue-c3", {
        staticStyle: { height: "60px" },
        attrs: { handler: _vm.handler }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/BoxStat.vue?vue&type=template&id=6775562a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/BoxStat.vue?vue&type=template&id=6775562a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row clearfix" }, [
    _c("div", { staticClass: "col-sm-6 col-lg-3" }, [
      _c(
        "div",
        { staticClass: "card" },
        [
          _c("div", { staticClass: "body" }, [
            _c("div", { staticClass: "row clearfix" }, [
              _c("div", { staticClass: "col-auto" }),
              _vm._v(" "),
              _c("div", { staticClass: "col text-right" }, [
                _c("div", { staticClass: "text-muted" }, [_vm._v("All User")]),
                _vm._v(" "),
                _vm.loading
                  ? _c(
                      "div",
                      {
                        staticClass: "spinner-grow",
                        attrs: { role: "status" }
                      },
                      [
                        _c("span", { staticClass: "sr-only" }, [
                          _vm._v("Loading...")
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "h4 mb-0" }, [_vm._v(_vm._s(_vm.all))])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("AllGraphBox")
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-6 col-lg-3" }, [
      _c(
        "div",
        { staticClass: "card" },
        [
          _c("div", { staticClass: "body" }, [
            _c("div", { staticClass: "row clearfix" }, [
              _c("div", { staticClass: "col-auto" }),
              _vm._v(" "),
              _c("div", { staticClass: "col text-right" }, [
                _c("div", { staticClass: "text-muted" }, [
                  _vm._v("Active User")
                ]),
                _vm._v(" "),
                _vm.loading
                  ? _c(
                      "div",
                      {
                        staticClass: "spinner-grow",
                        attrs: { role: "status" }
                      },
                      [
                        _c("span", { staticClass: "sr-only" }, [
                          _vm._v("Loading...")
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "h4 mb-0" }, [
                  _vm._v(_vm._s(_vm.active))
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("ActiveGraphBox")
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-6 col-lg-3" }, [
      _c(
        "div",
        { staticClass: "card" },
        [
          _c("div", { staticClass: "body" }, [
            _c("div", { staticClass: "row clearfix" }, [
              _c("div", { staticClass: "col-auto" }),
              _vm._v(" "),
              _c("div", { staticClass: "col text-right" }, [
                _c("div", { staticClass: "text-muted" }, [
                  _vm._v("Iddle User")
                ]),
                _vm._v(" "),
                _vm.loading
                  ? _c(
                      "div",
                      {
                        staticClass: "spinner-grow",
                        attrs: { role: "status" }
                      },
                      [
                        _c("span", { staticClass: "sr-only" }, [
                          _vm._v("Loading...")
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "h4 mb-0" }, [
                  _vm._v(_vm._s(_vm.iddle))
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("IddleGraphBox")
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-6 col-lg-3" }, [
      _c(
        "div",
        { staticClass: "card" },
        [
          _c("div", { staticClass: "body" }, [
            _c("div", { staticClass: "row clearfix" }, [
              _c("div", { staticClass: "col-auto" }),
              _vm._v(" "),
              _c("div", { staticClass: "col text-right" }, [
                _c("div", { staticClass: "text-muted" }, [
                  _vm._v("Non Active User")
                ]),
                _vm._v(" "),
                _vm.loading
                  ? _c(
                      "div",
                      {
                        staticClass: "spinner-grow",
                        attrs: { role: "status" }
                      },
                      [
                        _c("span", { staticClass: "sr-only" }, [
                          _vm._v("Loading...")
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "h4 mb-0" }, [
                  _vm._v(_vm._s(_vm.nonactive))
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("NonActiveGraphBox")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/ChartAgePie.vue?vue&type=template&id=63c84892&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/ChartAgePie.vue?vue&type=template&id=63c84892& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("span", { staticClass: "loading-chart-pie" }, [_vm._v("Loading...")]),
      _vm._v(" "),
      _c("vue-c3", { attrs: { handler: _vm.handler } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/ChartLineMonth.vue?vue&type=template&id=84be2a9c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/ChartLineMonth.vue?vue&type=template&id=84be2a9c& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("span", { staticClass: "loading-chart" }, [_vm._v("Loading...")]),
      _vm._v(" "),
      _c("vue-c3", { attrs: { handler: _vm.handler } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/IddleGraphBox.vue?vue&type=template&id=1829766a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/IddleGraphBox.vue?vue&type=template&id=1829766a& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card-chart-bg pt-4" },
    [
      _c("vue-c3", {
        staticStyle: { height: "60px" },
        attrs: { handler: _vm.handler }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/NonActiveGraphBox.vue?vue&type=template&id=49ded8c8&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/dashboard/NonActiveGraphBox.vue?vue&type=template&id=49ded8c8& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card-chart-bg pt-4" },
    [
      _c("vue-c3", {
        staticStyle: { height: "60px" },
        attrs: { handler: _vm.handler }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Dashboard.vue?vue&type=template&id=5c5876d9&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Dashboard.vue?vue&type=template&id=5c5876d9& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "main-content" } }, [
    _c(
      "div",
      { staticClass: "container-fluid" },
      [
        _c("div", { staticClass: "block-header" }, [
          _c(
            "div",
            { staticClass: "row clearfix" },
            [
              _c("Breadcrumb"),
              _vm._v(" "),
              _c("div", {
                staticClass: "col-md-6 col-sm-12 text-right hidden-xs"
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("BoxStat"),
        _vm._v(" "),
        _c("div", { staticClass: "row clearfix" }, [
          _c("div", { staticClass: "col-lg-4 col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "body" }, [_c("ChartAgePie")], 1)
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-8 col-md-12" }, [
            _c("div", { staticClass: "card user_statistics" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "body" }, [_c("ChartLineMonth")], 1)
            ])
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header" }, [_c("h2", [_vm._v("Users")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header" }, [
      _c("h2", [_vm._v("Users Report")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/Breadcrumbs.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/layouts/Breadcrumbs.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumbs_vue_vue_type_template_id_15f01b2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumbs.vue?vue&type=template&id=15f01b2f& */ "./resources/js/components/layouts/Breadcrumbs.vue?vue&type=template&id=15f01b2f&");
/* harmony import */ var _Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumbs.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Breadcrumbs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Breadcrumbs_vue_vue_type_template_id_15f01b2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Breadcrumbs_vue_vue_type_template_id_15f01b2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Breadcrumbs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Breadcrumbs.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/layouts/Breadcrumbs.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumbs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Breadcrumbs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Breadcrumbs.vue?vue&type=template&id=15f01b2f&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/layouts/Breadcrumbs.vue?vue&type=template&id=15f01b2f& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_15f01b2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumbs.vue?vue&type=template&id=15f01b2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Breadcrumbs.vue?vue&type=template&id=15f01b2f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_15f01b2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs_vue_vue_type_template_id_15f01b2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/dashboard/ActiveGraphBox.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/user/dashboard/ActiveGraphBox.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActiveGraphBox_vue_vue_type_template_id_109ed247___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActiveGraphBox.vue?vue&type=template&id=109ed247& */ "./resources/js/components/user/dashboard/ActiveGraphBox.vue?vue&type=template&id=109ed247&");
/* harmony import */ var _ActiveGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActiveGraphBox.vue?vue&type=script&lang=js& */ "./resources/js/components/user/dashboard/ActiveGraphBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActiveGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActiveGraphBox_vue_vue_type_template_id_109ed247___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActiveGraphBox_vue_vue_type_template_id_109ed247___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/dashboard/ActiveGraphBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/dashboard/ActiveGraphBox.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/ActiveGraphBox.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ActiveGraphBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/ActiveGraphBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/dashboard/ActiveGraphBox.vue?vue&type=template&id=109ed247&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/ActiveGraphBox.vue?vue&type=template&id=109ed247& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveGraphBox_vue_vue_type_template_id_109ed247___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ActiveGraphBox.vue?vue&type=template&id=109ed247& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/ActiveGraphBox.vue?vue&type=template&id=109ed247&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveGraphBox_vue_vue_type_template_id_109ed247___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActiveGraphBox_vue_vue_type_template_id_109ed247___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/dashboard/AllGraphBox.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/user/dashboard/AllGraphBox.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllGraphBox_vue_vue_type_template_id_ea6f21ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllGraphBox.vue?vue&type=template&id=ea6f21ec& */ "./resources/js/components/user/dashboard/AllGraphBox.vue?vue&type=template&id=ea6f21ec&");
/* harmony import */ var _AllGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllGraphBox.vue?vue&type=script&lang=js& */ "./resources/js/components/user/dashboard/AllGraphBox.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AllGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AllGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllGraphBox_vue_vue_type_template_id_ea6f21ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AllGraphBox_vue_vue_type_template_id_ea6f21ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/dashboard/AllGraphBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/dashboard/AllGraphBox.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/AllGraphBox.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AllGraphBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/AllGraphBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/dashboard/AllGraphBox.vue?vue&type=template&id=ea6f21ec&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/AllGraphBox.vue?vue&type=template&id=ea6f21ec& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllGraphBox_vue_vue_type_template_id_ea6f21ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AllGraphBox.vue?vue&type=template&id=ea6f21ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/AllGraphBox.vue?vue&type=template&id=ea6f21ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllGraphBox_vue_vue_type_template_id_ea6f21ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllGraphBox_vue_vue_type_template_id_ea6f21ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/dashboard/BoxStat.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/user/dashboard/BoxStat.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxStat_vue_vue_type_template_id_6775562a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxStat.vue?vue&type=template&id=6775562a& */ "./resources/js/components/user/dashboard/BoxStat.vue?vue&type=template&id=6775562a&");
/* harmony import */ var _BoxStat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoxStat.vue?vue&type=script&lang=js& */ "./resources/js/components/user/dashboard/BoxStat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BoxStat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BoxStat_vue_vue_type_template_id_6775562a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BoxStat_vue_vue_type_template_id_6775562a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/dashboard/BoxStat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/dashboard/BoxStat.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/BoxStat.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxStat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoxStat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/BoxStat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxStat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/dashboard/BoxStat.vue?vue&type=template&id=6775562a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/BoxStat.vue?vue&type=template&id=6775562a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxStat_vue_vue_type_template_id_6775562a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoxStat.vue?vue&type=template&id=6775562a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/BoxStat.vue?vue&type=template&id=6775562a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxStat_vue_vue_type_template_id_6775562a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxStat_vue_vue_type_template_id_6775562a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/dashboard/ChartAgePie.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/user/dashboard/ChartAgePie.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartAgePie_vue_vue_type_template_id_63c84892___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartAgePie.vue?vue&type=template&id=63c84892& */ "./resources/js/components/user/dashboard/ChartAgePie.vue?vue&type=template&id=63c84892&");
/* harmony import */ var _ChartAgePie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartAgePie.vue?vue&type=script&lang=js& */ "./resources/js/components/user/dashboard/ChartAgePie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartAgePie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartAgePie_vue_vue_type_template_id_63c84892___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartAgePie_vue_vue_type_template_id_63c84892___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/dashboard/ChartAgePie.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/dashboard/ChartAgePie.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/ChartAgePie.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartAgePie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartAgePie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/ChartAgePie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartAgePie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/dashboard/ChartAgePie.vue?vue&type=template&id=63c84892&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/ChartAgePie.vue?vue&type=template&id=63c84892& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartAgePie_vue_vue_type_template_id_63c84892___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartAgePie.vue?vue&type=template&id=63c84892& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/ChartAgePie.vue?vue&type=template&id=63c84892&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartAgePie_vue_vue_type_template_id_63c84892___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartAgePie_vue_vue_type_template_id_63c84892___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/dashboard/ChartLineMonth.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/user/dashboard/ChartLineMonth.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartLineMonth_vue_vue_type_template_id_84be2a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartLineMonth.vue?vue&type=template&id=84be2a9c& */ "./resources/js/components/user/dashboard/ChartLineMonth.vue?vue&type=template&id=84be2a9c&");
/* harmony import */ var _ChartLineMonth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartLineMonth.vue?vue&type=script&lang=js& */ "./resources/js/components/user/dashboard/ChartLineMonth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChartLineMonth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartLineMonth_vue_vue_type_template_id_84be2a9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartLineMonth_vue_vue_type_template_id_84be2a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/dashboard/ChartLineMonth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/dashboard/ChartLineMonth.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/ChartLineMonth.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLineMonth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartLineMonth.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/ChartLineMonth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLineMonth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/dashboard/ChartLineMonth.vue?vue&type=template&id=84be2a9c&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/ChartLineMonth.vue?vue&type=template&id=84be2a9c& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLineMonth_vue_vue_type_template_id_84be2a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartLineMonth.vue?vue&type=template&id=84be2a9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/ChartLineMonth.vue?vue&type=template&id=84be2a9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLineMonth_vue_vue_type_template_id_84be2a9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLineMonth_vue_vue_type_template_id_84be2a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/dashboard/IddleGraphBox.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/user/dashboard/IddleGraphBox.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IddleGraphBox_vue_vue_type_template_id_1829766a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IddleGraphBox.vue?vue&type=template&id=1829766a& */ "./resources/js/components/user/dashboard/IddleGraphBox.vue?vue&type=template&id=1829766a&");
/* harmony import */ var _IddleGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IddleGraphBox.vue?vue&type=script&lang=js& */ "./resources/js/components/user/dashboard/IddleGraphBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IddleGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IddleGraphBox_vue_vue_type_template_id_1829766a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IddleGraphBox_vue_vue_type_template_id_1829766a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/dashboard/IddleGraphBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/dashboard/IddleGraphBox.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/IddleGraphBox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IddleGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./IddleGraphBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/IddleGraphBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IddleGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/dashboard/IddleGraphBox.vue?vue&type=template&id=1829766a&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/IddleGraphBox.vue?vue&type=template&id=1829766a& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IddleGraphBox_vue_vue_type_template_id_1829766a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./IddleGraphBox.vue?vue&type=template&id=1829766a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/IddleGraphBox.vue?vue&type=template&id=1829766a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IddleGraphBox_vue_vue_type_template_id_1829766a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IddleGraphBox_vue_vue_type_template_id_1829766a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user/dashboard/NonActiveGraphBox.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/user/dashboard/NonActiveGraphBox.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NonActiveGraphBox_vue_vue_type_template_id_49ded8c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NonActiveGraphBox.vue?vue&type=template&id=49ded8c8& */ "./resources/js/components/user/dashboard/NonActiveGraphBox.vue?vue&type=template&id=49ded8c8&");
/* harmony import */ var _NonActiveGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NonActiveGraphBox.vue?vue&type=script&lang=js& */ "./resources/js/components/user/dashboard/NonActiveGraphBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NonActiveGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NonActiveGraphBox_vue_vue_type_template_id_49ded8c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NonActiveGraphBox_vue_vue_type_template_id_49ded8c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/dashboard/NonActiveGraphBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/dashboard/NonActiveGraphBox.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/NonActiveGraphBox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonActiveGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NonActiveGraphBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/NonActiveGraphBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NonActiveGraphBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/dashboard/NonActiveGraphBox.vue?vue&type=template&id=49ded8c8&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/user/dashboard/NonActiveGraphBox.vue?vue&type=template&id=49ded8c8& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NonActiveGraphBox_vue_vue_type_template_id_49ded8c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NonActiveGraphBox.vue?vue&type=template&id=49ded8c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/dashboard/NonActiveGraphBox.vue?vue&type=template&id=49ded8c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NonActiveGraphBox_vue_vue_type_template_id_49ded8c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NonActiveGraphBox_vue_vue_type_template_id_49ded8c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/Dashboard.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/user/Dashboard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_5c5876d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=5c5876d9& */ "./resources/js/pages/user/Dashboard.vue?vue&type=template&id=5c5876d9&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_5c5876d9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_5c5876d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/Dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/Dashboard.vue?vue&type=template&id=5c5876d9&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/user/Dashboard.vue?vue&type=template&id=5c5876d9& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_5c5876d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=5c5876d9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Dashboard.vue?vue&type=template&id=5c5876d9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_5c5876d9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_5c5876d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=0.js.map