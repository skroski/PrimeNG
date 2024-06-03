import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AddUserComponent]

    })
      .compileComponents();

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /* 
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('should enable submit button when form is valid', () => {
      const form = component.addUserForm;
      form.controls['username'].setValue('testUser');
      form.controls['email'].setValue('test@example.com');
      form.controls['password'].setValue('password123');
      fixture.detectChanges();
  
      const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
      expect(submitButton.nativeElement.disabled).toBeFalsy();
    });
  
    it('should trigger form submission when submit button is clicked', () => {
      spyOn(component, 'onSubmit');
      const form = component.addUserForm;
      form.controls['username'].setValue('testUser');
      form.controls['email'].setValue('test@example.com');
      form.controls['password'].setValue('password123');
      fixture.detectChanges();
  
      const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
      submitButton.nativeElement.click();
      fixture.detectChanges();
  
      expect(component.onSubmit).toHaveBeenCalled();
    });
  
    it('should disable submit button when form is invalid', () => {
      const form = component.addUserForm;
      form.controls['username'].setValue('');
      form.controls['email'].setValue('');
      form.controls['password'].setValue('');
      fixture.detectChanges();
  
      const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
      expect(submitButton.nativeElement.disabled).toBeTruthy();
    });
  
    it('should display error messages when form is invalid', () => {
      const form = component.addUserForm;
      form.controls['username'].setValue('');
      form.controls['email'].setValue('');
      form.controls['password'].setValue('');
      fixture.detectChanges();
  
      const usernameError = fixture.debugElement.query(By.css('.username-error'));
      const emailError = fixture.debugElement.query(By.css('.email-error'));
      const passwordError = fixture.debugElement.query(By.css('.password-error'));
  
      expect(usernameError.nativeElement.textContent).toContain('Username is required');
      expect(emailError.nativeElement.textContent).toContain('Email is required');
      expect(passwordError.nativeElement.textContent).toContain('Password is required');
    }); */
});