"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayClothingListPage = void 0;
const clothing_1 = __importDefault(require("../Models/clothing"));
function DisplayClothingListPage(req, res, next) {
    console.log('Before query');
    let clothingCollection;
    clothing_1.default.find({})
        .then(result => {
        console.log('Query result:', result);
        clothingCollection = result;
        console.log('After query');
    })
        .catch(err => {
        console.error('Query error:', err);
        console.log('After query');
        res.render('index', { title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection });
    })
        .catch((err) => {
        console.error('Query error:', err);
        console.log('After query');
        res.status(500).render('error', { error: 'Internal Server Error' });
    });
}
exports.DisplayClothingListPage = DisplayClothingListPage;
//# sourceMappingURL=clothing.js.map