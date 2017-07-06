import { Component, AfterViewInit, Input, HostBinding, HostListener, ElementRef } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { GlobalStateServiceService } from 'app/services/global-state-service.service';

@Component({
  selector: 'app-child-controls-panel',
  templateUrl: './child-controls-panel.component.html',
  styleUrls: ['./child-controls-panel.component.scss']
})
export class ChildControlsPanelComponent {
    @HostBinding('style.width.px') hostStyleWidthPx : number;

    @HostListener('mousewheel', ['$event']) onMousewheel(event: any) {
        this.globalStateServiceService.changeControlsPanelScrollState(event.wheelDelta);
    }

    public mobileVersion : boolean = false;
    public hostStyleHeightPx : number;

    private mainWrapperScrollValue: number;
    private subscription: Subscription;


    private calculateHostHeight() : void{
        this.hostStyleHeightPx = this.elementRef.nativeElement.offsetHeight;
        this.globalStateServiceService.changeChildControlsPanelElementHeightState(this.hostStyleHeightPx);
    }

    public sideNavOpen(): void{
        this.globalStateServiceService.changeSideNavState(true);
    }

    public setLogoKiwiStyles() : any {
        let styles = {
            'transform':  'rotateY('+this.mainWrapperScrollValue * 0.1+'deg)'
        };
        return styles;
    }


    constructor(private globalStateServiceService: GlobalStateServiceService, private elementRef: ElementRef) {
        globalStateServiceService.mainWrapperScrollState.subscribe( scrollValue => {
                this.mainWrapperScrollValue = scrollValue;
                this.calculateHostHeight();
        });
        globalStateServiceService.mobileVersionState.subscribe( state => {
            this.mobileVersion = state;
        });
        globalStateServiceService.mainContentWidthState.subscribe( elementWidthValue => {
            this.hostStyleWidthPx = elementWidthValue;
        });
    }

    ngAfterViewInit() {
        this.calculateHostHeight();
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }


}