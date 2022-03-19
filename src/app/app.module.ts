import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainComponent } from './pages/main/main.component';
import { FormTextfieldComponent } from './shared/form-textfield/form-textfield.component'

@NgModule({
	declarations: [AppComponent, MainComponent, FormTextfieldComponent],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
