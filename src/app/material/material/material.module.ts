import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as Material from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatListModule,
    Material.MatDialogModule,
    Material.MatCheckboxModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatListModule,
    Material.MatDialogModule,
    Material.MatCheckboxModule
  ]
})
export class MaterialModule {}
