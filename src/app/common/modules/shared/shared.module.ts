import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule, MatButtonModule ,MatSelectModule,MatTabsModule, MatDatepickerModule ,MatSlideToggleModule,
  MatNativeDateModule,MatSidenavModule ,MatTooltipModule ,MatExpansionModule ,MatMenuModule , MatCheckboxModule ,
  MatTableModule, MatPaginatorModule, MatDialogModule ,MatAutocompleteModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatTooltipModule,
    FormsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    CdkTableModule,
    MatAutocompleteModule
  ],
  declarations: [

  ],
  providers: [

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatTooltipModule,
    MatExpansionModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    CdkTableModule,
    MatAutocompleteModule
  ]
})
export class SharedModule { }
