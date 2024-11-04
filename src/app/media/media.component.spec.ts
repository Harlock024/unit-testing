import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MediaComponent } from "./media.component";
import { media } from "./media";

describe("MediaComponent", () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    component.columna1 = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    component.columna2 = [
      15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2,
    ];

    fixture.detectChanges();
    component.ngOnInit();
  });
  it("should return media = 550.6 if input is [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503] ", () => {
    const expectedMediaColumna1 = 550.6;
    expect(component.mediaColumna1).toBe(expectedMediaColumna1);
  });
  it("should return media = 60.32 if input is [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] ", () => {
    const expectedMediaColumna2 = 60.32;
    expect(parseFloat(component.mediaColumna2.toFixed(2))).toBe(
      expectedMediaColumna2,
    );
  });
  it("should call media method", () => {
    //Arrang
    let result = 0;
    component.numbers = "12, 15, 8, 20, 5, 18, 10";
    //Act
    component.media();
    result = component.result;
    // Assert
    expect(parseFloat(result.toFixed(2))).toBe(12.57);
  });
});
