import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPostEditorComponent } from './get-all-post-editor.component';

describe('GetAllPostEditorComponent', () => {
  let component: GetAllPostEditorComponent;
  let fixture: ComponentFixture<GetAllPostEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllPostEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllPostEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
