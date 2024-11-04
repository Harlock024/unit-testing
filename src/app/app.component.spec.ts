import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component"; // Asegúrate de que la ruta sea correcta
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs"; // Importa `of` para crear un observable simulado

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, // Importa RouterTestingModule
        AppComponent, // Importa el componente standalone
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: {} }, // Puedes agregar datos simulados si es necesario
            params: of({}), // Simula los parámetros
            queryParams: of({}), // Simula los parámetros de consulta
          },
        },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should create the app", () => {
    expect(component).toBeTruthy();
  });
});
