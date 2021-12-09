(self["webpackChunkweb_page"] = self["webpackChunkweb_page"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-menu/toolbar-menu.component */ 5107);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _contact_links_contact_links_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-links/contact-links.component */ 1032);




class AppComponent {
    constructor() {
        this.title = 'Lukas Woodtli\'s Web Page';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "spacer"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-toolbar-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-contact-links");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarMenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _contact_links_contact_links_component__WEBPACK_IMPORTED_MODULE_1__.ContactLinksComponent], styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n\n.footer[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc3BhY2VyXG4gIGZsZXg6IDEgMCBhdXRvXG5cbi5mb290ZXJcbiAgdGV4dC1hbGlnbjogcmlnaHRcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar-menu/toolbar-menu.component */ 5107);
/* harmony import */ var _pages_static_sites_static_site_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/static-sites/static-site.component */ 9501);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-markdown */ 2443);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _static_pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-pages */ 6635);
/* harmony import */ var _pages_table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/table-of-contents/table-of-contents.component */ 1963);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);
/* harmony import */ var _contact_links_contact_links_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-links/contact-links.component */ 1032);
























const routes = [
    { path: '', redirectTo: 'index', pathMatch: 'prefix' }
];
for (const entry of _static_pages__WEBPACK_IMPORTED_MODULE_3__.STATIC_PAGES) {
    routes.push({ path: entry.fileName, component: _pages_static_sites_static_site_component__WEBPACK_IMPORTED_MODULE_2__.StaticSiteComponent });
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled'
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__.FlexLayoutModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_19__.MarkdownModule.forRoot({
                loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient,
                sanitize: _angular_core__WEBPACK_IMPORTED_MODULE_6__.SecurityContext.NONE
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.NoopAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_1__.ToolbarMenuComponent,
        _pages_static_sites_static_site_component__WEBPACK_IMPORTED_MODULE_2__.StaticSiteComponent,
        _pages_table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_4__.TableOfContentsComponent,
        _contact_links_contact_links_component__WEBPACK_IMPORTED_MODULE_5__.ContactLinksComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__.FlexLayoutModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_19__.MarkdownModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.NoopAnimationsModule] }); })();


/***/ }),

/***/ 1032:
/*!**********************************************************!*\
  !*** ./src/app/contact-links/contact-links.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactLinksComponent": () => (/* binding */ ContactLinksComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 5115);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 4163);






function ContactLinksComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", icon_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", icon_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", icon_r1.icon);
} }
class ContactLinksComponent {
    constructor() {
        this.icons = [
            { icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faLinkedin, link: 'https://www.linkedin.com/in/lukaswoodtli' },
            { icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub, link: 'https://github.com/LukasWoodtli' },
            { icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faStackOverflow, link: 'https://stackoverflow.com/cv/lukaswoodtli' },
            { icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faXing, link: 'https://www.xing.com/profile/Lukas_Woodtli' },
            { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faEnvelope, link: 'mailto:woodtli.lukas@gmail.com' }
        ];
    }
    ngOnInit() {
    }
}
ContactLinksComponent.ɵfac = function ContactLinksComponent_Factory(t) { return new (t || ContactLinksComponent)(); };
ContactLinksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactLinksComponent, selectors: [["app-contact-links"]], decls: 1, vars: 1, consts: [["mat-icon-button", "", "target", "_blank", 3, "href", "matTooltip", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "target", "_blank", 3, "href", "matTooltip"], [3, "icon"]], template: function ContactLinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactLinksComponent_a_0_Template, 2, 3, "a", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWxpbmtzLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 9501:
/*!*************************************************************!*\
  !*** ./src/app/pages/static-sites/static-site.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaticSiteComponent": () => (/* binding */ StaticSiteComponent)
/* harmony export */ });
/* harmony import */ var _table_of_contents_table_of_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../table-of-contents/table-of-content */ 2398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ 2443);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 8030);
/* harmony import */ var _table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table-of-contents/table-of-contents.component */ 1963);







class StaticSiteComponent {
    constructor(router, activatedRoute, markdownService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.markdownService = markdownService;
        this.tableOfContent = [];
        this.isFirstTableRow = true;
        this.isFirstTableRow = true;
    }
    ngOnInit() {
        this.configureMarkDownFileName();
        this.markdownService.renderer.heading = (text, level, raw) => this.renderHeading(text, level, raw);
        this.markdownService.renderer.text = (text) => this.renderText(text);
        this.markdownService.renderer.table = (header, body) => this.renderTable(header, body);
        this.markdownService.renderer.tablerow = (content) => this.renderTableRow(content);
        this.markdownService.renderer.tablecell = this.renderTableCell;
        this.markdownService.renderer.link = this.renderLink;
    }
    configureMarkDownFileName() {
        const url = this.router.url;
        this.pathToMdFile = this.getMarkdownFileNameFromRouteUrl(url);
    }
    getMarkdownFileNameFromRouteUrl(url) {
        const urlPart = url.split('#')[0];
        let filePath = 'assets/pages';
        if (!urlPart.startsWith('/')) {
            filePath += '/';
        }
        return `${filePath}${urlPart}.md`;
    }
    renderHeading(text, level, raw) {
        let anchorPrefix = this.markdownService.options.headerPrefix;
        anchorPrefix = anchorPrefix ? anchorPrefix : '';
        const anchor = anchorPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-');
        this.tableOfContent.push(new _table_of_contents_table_of_content__WEBPACK_IMPORTED_MODULE_0__.TableOfContentEntry(level, raw, anchor));
        const headerTag = `<h${level} id='${anchor}'>${text}</h${level}>`;
        return headerTag;
    }
    renderText(text) {
        if (text.trim() === '[TOC]') {
            return '';
        }
        if (this.isMetadataTag(text)) {
            console.log(`Warning removing meta data from Markdown file: ${text}`);
            return '';
        }
        return text;
    }
    renderTable(header, body) {
        this.isFirstTableRow = true;
        return '<div class="mat-table">' + header + body + '</div>';
    }
    renderTableRow(content) {
        if (this.isFirstTableRow) {
            this.isFirstTableRow = false;
            return '<div class="mat-header-row">' + content + '</div>';
        }
        return '<div class="mat-row">' + content + '</div>';
    }
    renderTableCell(content, flags) {
        if (flags.header) {
            return '<div class="mat-header-cell">' + content + '</div>';
        }
        return '<div class="mat-cell">' + content + '</div>';
    }
    isMetadataTag(text) {
        const textTrimmed = text.trim().toLowerCase();
        const metadataTags = ['Title:', 'slug:', 'save_as:', 'URL:'];
        return metadataTags.some(x => textTrimmed.startsWith(x.toLowerCase()));
    }
    renderLink(href, title, text) {
        console.log(`href: ${href}, title: ${title}, text: ${text}`);
        const staticPagePrefix = '{filename}/pages/';
        const documentsPrefix = '/documents/';
        const absoluteUrlPattern = /^https?:\/\//i;
        let url = href;
        let openInNewTab = '';
        if (href.startsWith(staticPagePrefix)) {
            url = href.replace(staticPagePrefix, '');
            url = url.replace('.md', '');
            console.log(`Warning fixing link: ${href} to ${url}`);
        }
        else if (href.startsWith(documentsPrefix)) {
            url = href.replace(documentsPrefix, 'assets/documents/');
            console.log(`Warning fixing link: ${href} to ${url}`);
        }
        else if (href === 'courses.html') {
            url = 'courses';
            console.log(`Warning fixing link: ${href} to ${url}`);
        }
        else if (absoluteUrlPattern.test(href)) {
            console.log(`Warning opening: ${href} in new tab`);
            openInNewTab = ' target="_blank"';
        }
        return `<a href="${url}"${openInNewTab}>${text}</a>`;
    }
}
StaticSiteComponent.ɵfac = function StaticSiteComponent_Factory(t) { return new (t || StaticSiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownService)); };
StaticSiteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StaticSiteComponent, selectors: [["app-static-site"]], decls: 8, vars: 4, consts: [["hasBackdrop", "false"], ["mode", "side", "fxShow", "", "fxHide.lt-md", "true", 3, "opened"], ["fxShow", "", "fxHide.lt-md", "true", 3, "tableOfContent"], [1, "document-wrapper"], ["fxShow", "", "fxHide.gt-sm", "true", 3, "tableOfContent"], [3, "src"], [1, "grow-content"]], template: function StaticSiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-table-of-contents", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-table-of-contents", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "markdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("opened", ctx.tableOfContent.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableOfContent", ctx.tableOfContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tableOfContent", ctx.tableOfContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.pathToMdFile);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenav, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultShowHideDirective, _table_of_contents_table_of_contents_component__WEBPACK_IMPORTED_MODULE_1__.TableOfContentsComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContent, ngx_markdown__WEBPACK_IMPORTED_MODULE_4__.MarkdownComponent], styles: [".mat-table {\n  display: block;\n}\n\n.mat-row,\n.mat-header-row {\n  display: flex;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  align-items: center;\n  min-height: 48px;\n  padding: 0 24px;\n}\n\n.mat-cell,\n.mat-header-cell {\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}\n\nmat-sidenav {\n  width: 300px;\n}\n\n* {\n  line-height: 1.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpYy1zaXRlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBOztFQUVFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTs7RUFFRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtBQUlGOztBQUZBO0VBQ0UsZ0JBQUE7QUFLRiIsImZpbGUiOiJzdGF0aWMtc2l0ZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGVcbiAgZGlzcGxheTogYmxvY2tcblxuLm1hdC1yb3csXG4ubWF0LWhlYWRlci1yb3dcbiAgZGlzcGxheTogZmxleFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHhcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWRcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuICBtaW4taGVpZ2h0OiA0OHB4XG4gIHBhZGRpbmc6IDAgMjRweFxuXG4ubWF0LWNlbGwsXG4ubWF0LWhlYWRlci1jZWxsXG4gIGZsZXg6IDFcbiAgb3ZlcmZsb3c6IGhpZGRlblxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmRcblxubWF0LXNpZGVuYXZcbiAgd2lkdGg6IDMwMHB4XG5cbipcbiAgbGluZS1oZWlnaHQ6IDEuOFxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 2398:
/*!*************************************************************!*\
  !*** ./src/app/pages/table-of-contents/table-of-content.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableOfContentEntry": () => (/* binding */ TableOfContentEntry)
/* harmony export */ });
class TableOfContentEntry {
    constructor(level, text, anchor) {
        this.level = level;
        this.text = text;
        this.anchor = anchor;
    }
}


/***/ }),

/***/ 1963:
/*!************************************************************************!*\
  !*** ./src/app/pages/table-of-contents/table-of-contents.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableOfContentsComponent": () => (/* binding */ TableOfContentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




function TableOfContentsComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tocEntry_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fragment", tocEntry_r2.anchor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tocEntry_r2.text, " ");
} }
function TableOfContentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableOfContentsComponent_div_0_div_4_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tableOfContent);
} }
class TableOfContentsComponent {
    constructor() {
        this.tableOfContent = [];
    }
    ngOnInit() {
    }
    showToc() {
        return this.tableOfContent.length > 0;
    }
}
TableOfContentsComponent.ɵfac = function TableOfContentsComponent_Factory(t) { return new (t || TableOfContentsComponent)(); };
TableOfContentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableOfContentsComponent, selectors: [["app-table-of-contents"]], inputs: { tableOfContent: "tableOfContent" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "table-of-contents"], ["dense", ""], [4, "ngFor", "ngForOf"], ["mat-list-item", "", "routerLink", ".", "routerLinkActive", "true", 3, "fragment"]], template: function TableOfContentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableOfContentsComponent_div_0_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showToc());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatNavList, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1vZi1jb250ZW50cy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 6635:
/*!*********************************!*\
  !*** ./src/app/static-pages.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATIC_PAGES": () => (/* binding */ STATIC_PAGES)
/* harmony export */ });
const STATIC_PAGES = [
    { displayName: 'Home', fileName: 'index' },
    { displayName: 'Resume', fileName: 'resume' },
    { displayName: 'Skills', fileName: 'skills' },
    { displayName: 'Books', fileName: 'books' },
    { displayName: 'Courses', fileName: 'courses' },
    { displayName: 'Projects', fileName: 'projects' },
    { displayName: 'Blog', fileName: 'blog' },
    { displayName: 'Contact', fileName: 'contact' },
    { displayName: 'mmm', fileName: 'recruiters_headhunters', exclueFromMenu: true },
];


/***/ }),

/***/ 5107:
/*!********************************************************!*\
  !*** ./src/app/toolbar-menu/toolbar-menu.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarMenuComponent": () => (/* binding */ ToolbarMenuComponent)
/* harmony export */ });
/* harmony import */ var _static_pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static-pages */ 6635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 8030);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);









function ToolbarMenuComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/", menuItem_r3.fileName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r3.displayName, " ");
} }
function ToolbarMenuComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/", menuItem_r4.fileName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r4.displayName, " ");
} }
class ToolbarMenuComponent {
    constructor() {
        this.menuItems = _static_pages__WEBPACK_IMPORTED_MODULE_0__.STATIC_PAGES.filter((element) => {
            if (!element.exclueFromMenu) {
                return element;
            }
        });
    }
    ngOnInit() {
    }
}
ToolbarMenuComponent.ɵfac = function ToolbarMenuComponent_Factory(t) { return new (t || ToolbarMenuComponent)(); };
ToolbarMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToolbarMenuComponent, selectors: [["app-toolbar-menu"]], decls: 14, vars: 3, consts: [["color", "primary"], [1, "gap"], ["mat-button", "", "routerLink", "/"], [1, "filler"], ["fxShow", "", "fxHide.gt-sm", "true"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "color", "alert", 3, "routerLink", 4, "ngFor", "ngForOf"], ["fxShow", "", "fxHide.lt-md", "true", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "color", "alert", 3, "routerLink"], ["fxShow", "", "fxHide.lt-md", "true"], ["mat-button", "", 3, "routerLink"]], template: function ToolbarMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Lukas Woodtli");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ToolbarMenuComponent_button_12_Template, 2, 2, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ToolbarMenuComponent_span_13_Template, 3, 2, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultShowHideDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem], styles: [".filler[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.gap[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXItbWVudS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoidG9vbGJhci1tZW51LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZmlsbGVyXG4gIGZsZXg6IDEgMSBhdXRvXG5cbi5nYXBcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4XG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map