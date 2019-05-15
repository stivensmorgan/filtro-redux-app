import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule  } from '@ngrx/store';
// import { todoReducer } from './todo/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

//forms
import { ReactiveFormsModule }  from '@angular/forms/'

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { appReducers } from './app.reducers';
import { FilterPipe } from './filter/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
