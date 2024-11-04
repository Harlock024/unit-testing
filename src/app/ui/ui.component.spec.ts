import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute } from "@angular/router";
import { UiComponent } from "./ui.component"; // Ajusta la ruta según corresponda

describe("UiComponent", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, // Agrega RouterTestingModule aquí
        UiComponent, // Importa el componente aquí
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: {} }, // Simula el ActivatedRoute si es necesario
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create the app", () => {
    expect(component).toBeTruthy();
  });
});
