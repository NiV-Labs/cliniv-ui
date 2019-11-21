import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecurityModule } from '../../security/security.module'

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import { PatientComponent } from '../../patient/patient.component';
import { PatientEditComponent } from '../../patient/patient-edit/patient-edit.component';

import { UserProfileComponent } from '../../user-profile/user-profile.component'
import { ProfessionalComponent } from '../../professional/professional.component';
import { VisitComponent } from '../../visit/visit.component';
import { TypographyComponent } from '../../typography/typography.component';
import { NotificationsComponent } from '../../core/notification/notifications.component';

import { UserProfileService } from '../../user-profile/user-profile.service';
import { PatientService } from '../../patient/patient.service';
import { VisitService } from '../../visit/visit.service';

import { NgxLoadingModule } from 'ngx-loading';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    NgxLoadingModule,

    FormsModule,

    SecurityModule
  ],
  declarations: [
    DashboardComponent,
    PatientComponent,
    PatientEditComponent,
    ProfessionalComponent,
    UserProfileComponent,
    VisitComponent,
    TypographyComponent,
    NotificationsComponent
  ],
  entryComponents:[
    PatientEditComponent
  ],
  providers: [
    UserProfileService,
    PatientService,
    VisitService
  ]
})

export class AdminLayoutModule { }
