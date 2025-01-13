import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClipboardService } from './ngx-clipboard.service';
import { ClipboardIfSupportedDirective } from './ngx-clipboard-if-supported.directive';
import { ClipboardDirective } from './ngx-clipboard.directive';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'test-cmp',
    template: ` <span *ngxClipboardIfSupported ngxClipboard cbContent="Foo Bar"> Copy Foo Bar </span>`,
    imports: [ClipboardIfSupportedDirective, ClipboardDirective],
    standalone: true
})
class TestComponent {}

function createTestComponent(): ComponentFixture<TestComponent> {
    return TestBed.createComponent(TestComponent);
}

describe('ngxClipboardIfSupported directive', () => {
    let fixture: ComponentFixture<TestComponent>;
    let clipboardService: ClipboardService;
    let spy: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ClipboardIfSupportedDirective, TestComponent]
        });

        clipboardService = TestBed.get(ClipboardService);
        fixture = createTestComponent();
        spy = spyOnProperty(clipboardService, 'isSupported', 'get');
    });

    it('should not render host when copy is not supported', waitForAsync(() => {
        spy.and.returnValue(false);
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(0);
    }));

    it('should render host when copy is supported', waitForAsync(() => {
        spy.and.returnValue(true);
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('span')).length).toEqual(1);
    }));
});
