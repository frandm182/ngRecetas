"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DropdownDirective = (function () {
    function DropdownDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    DropdownDirective.prototype.open = function () {
        this.mostrar();
    };
    DropdownDirective.prototype.onmouseleave = function () {
        this.ocultar();
    };
    DropdownDirective.prototype.mostrar = function () {
        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
    };
    DropdownDirective.prototype.ocultar = function () {
        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
    };
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "open", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], DropdownDirective.prototype, "onmouseleave", null);
    DropdownDirective = __decorate([
        core_1.Directive({
            selector: '[rbDropdown]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], DropdownDirective);
    return DropdownDirective;
}());
exports.DropdownDirective = DropdownDirective;
//# sourceMappingURL=dropdown.directive.js.map