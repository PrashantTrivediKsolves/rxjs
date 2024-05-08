import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularEditorService } from './angular-editor.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rxjs';
  // htmlContent=''
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',

  };
  htmlContent= ''; // Initialize the HTML content variable
  name='';
  content='';

  constructor(private aes: AngularEditorService) {}

  onSubmit(data:any) {
    console.log(this.htmlContent); // Log the editor's content
    // Here you can add further logic to handle the submitted content
    // console.log(data.editorContent.value);
    console.log(this.name);
    this.content=data.editorContent;
    console.log(data.editorContent.value);
    this.aes.addEditorContent(data);
 }

}
