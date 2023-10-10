"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayServicePage = exports.DisplayProjectPage = exports.DisplayABoutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayABoutPage(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about' });
}
exports.DisplayABoutPage = DisplayABoutPage;
function DisplayProjectPage(req, res, next) {
    res.render('index', { title: 'Our Projects', page: 'projects' });
}
exports.DisplayProjectPage = DisplayProjectPage;
function DisplayServicePage(req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services' });
}
exports.DisplayServicePage = DisplayServicePage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact' });
}
exports.DisplayContactPage = DisplayContactPage;
//# sourceMappingURL=index.js.map