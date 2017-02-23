import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[rbDropdown]'
})
export class DropdownDirective {

    constructor(private el: ElementRef, private renderer: Renderer) { }

    @HostListener('click') open() {
        this.mostrar();
    }

    @HostListener('mouseleave') onmouseleave() {
        this.ocultar();
    }
    

    private mostrar() {
        this.renderer.setElementStyle(this.el.nativeElement , 'display', 'block');
    }

    private ocultar() {
        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
    }

}